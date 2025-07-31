#!/bin/bash

# Material Tailwind Deploy Script
# Usage: ./deploy.sh [command] [package] [version_type]
# 
# Commands:
#   release react [beta|stable]     - Build and prepare React package for release
#   release html [beta|stable]      - Build and prepare HTML package for release
#   release npm react [beta|stable] - Publish React package to NPM
#   release npm html [beta|stable]  - Publish HTML package to NPM
#
# Examples:
#   ./deploy.sh release react beta
#   ./deploy.sh release html stable
#   ./deploy.sh release npm react beta
#   ./deploy.sh release npm html stable

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
check_directory() {
    if [[ ! -f "package.json" ]] || [[ ! -d "packages" ]]; then
        log_error "This script must be run from the Material Tailwind root directory"
        exit 1
    fi
}

# Check if pnpm is installed
check_pnpm() {
    if ! command -v pnpm &> /dev/null; then
        log_error "pnpm is not installed. Please install pnpm first."
        exit 1
    fi
}

# Check if git working directory is clean
check_git_clean() {
    if [[ -n $(git status --porcelain) ]]; then
        log_warning "Git working directory is not clean. Uncommitted changes detected."
        read -p "Do you want to continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            log_info "Aborting deployment."
            exit 1
        fi
    fi
}

# Update package version
update_version() {
    local package_path=$1
    local version_type=$2
    
    log_info "Updating version for $package_path ($version_type)"
    
    cd "$package_path"
    
    if [[ "$version_type" == "beta" ]]; then
        # Check if current version is already a beta
        current_version=$(node -p "require('./package.json').version")
        if [[ $current_version == *"beta"* ]]; then
            # Increment beta version
            npm version prerelease --preid=beta
        else
            # Create first beta for next minor version
            npm version preminor --preid=beta
        fi
    elif [[ "$version_type" == "stable" ]]; then
        # For stable release, just increment patch/minor/major
        echo "Select version increment for stable release:"
        echo "1) patch (x.x.X)"
        echo "2) minor (x.X.x)"
        echo "3) major (X.x.x)"
        read -p "Enter choice (1-3): " choice
        
        case $choice in
            1) npm version patch ;;
            2) npm version minor ;;
            3) npm version major ;;
            *) log_error "Invalid choice"; exit 1 ;;
        esac
    else
        log_error "Invalid version type: $version_type"
        exit 1
    fi
    
    # Get the new version
    new_version=$(node -p "require('./package.json').version")
    log_success "Updated to version: $new_version"
    
    cd - > /dev/null
    echo "$new_version"
}

# Build package
build_package() {
    local package_path=$1
    local package_name=$2
    
    log_info "Building $package_name package..."
    
    cd "$package_path"
    
    # Clean previous build
    if [[ -d "dist" ]]; then
        rm -rf dist
        log_info "Cleaned previous build"
    fi
    
    # Install dependencies
    pnpm install
    
    # Build package
    pnpm build
    
    # Verify build output
    if [[ ! -d "dist" ]] || [[ -z "$(ls -A dist)" ]]; then
        log_error "Build failed - dist directory is missing or empty"
        exit 1
    fi
    
    log_success "$package_name package built successfully"
    
    cd - > /dev/null
}

# Publish to NPM
publish_to_npm() {
    local package_path=$1
    local package_name=$2
    local version_type=$3
    
    log_info "Publishing $package_name to NPM ($version_type)..."
    
    cd "$package_path"
    
    # Verify we're logged in to NPM
    if ! npm whoami &> /dev/null; then
        log_error "Not logged in to NPM. Run 'npm login' first."
        exit 1
    fi
    
    # Check if package.json exists and has correct structure
    if [[ ! -f "package.json" ]]; then
        log_error "package.json not found in $package_path"
        exit 1
    fi
    
    # Verify dist directory exists
    if [[ ! -d "dist" ]]; then
        log_error "No dist directory found. Build the package first."
        exit 1
    fi
    
    # Get package info
    package_json_name=$(node -p "require('./package.json').name")
    package_version=$(node -p "require('./package.json').version")
    
    log_info "Publishing $package_json_name@$package_version"
    
    # Dry run first
    log_info "Running npm publish dry run..."
    npm publish --dry-run
    
    # Confirm publication
    read -p "Proceed with publishing? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_info "Publishing cancelled."
        exit 1
    fi
    
    # Publish with appropriate tag
    if [[ "$version_type" == "beta" ]]; then
        npm publish --tag beta
        log_success "Published $package_json_name@$package_version with @beta tag"
    elif [[ "$version_type" == "stable" ]]; then
        npm publish
        log_success "Published $package_json_name@$package_version with @latest tag"
    fi
    
    cd - > /dev/null
}

# Create git tag and commit
create_git_tag() {
    local package_name=$1
    local version=$2
    
    log_info "Creating git tag for $package_name v$version"
    
    # Commit version changes
    git add .
    git commit -m "chore($package_name): release v$version"
    
    # Create tag
    tag_name="$package_name-v$version"
    git tag "$tag_name"
    
    log_success "Created git tag: $tag_name"
    
    # Ask if user wants to push
    read -p "Push changes and tags to remote? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git push origin main
        git push origin "$tag_name"
        log_success "Pushed changes and tags to remote"
    fi
}

# Main command processing
main() {
    local command=$1
    local target=$2
    local package_arg=$3
    local version_type=$4
    
    # Handle different command formats
    if [[ "$command" == "release" && "$target" == "npm" ]]; then
        # Format: release npm react/html beta/stable
        local package_name=$package_arg
        local version_type=$version_type
        local action="npm"
    elif [[ "$command" == "release" ]]; then
        # Format: release react/html beta/stable
        local package_name=$target
        local version_type=$package_arg
        local action="build"
    else
        log_error "Invalid command format"
        show_usage
        exit 1
    fi
    
    # Validate package name
    if [[ "$package_name" != "react" && "$package_name" != "html" ]]; then
        log_error "Invalid package: $package_name. Must be 'react' or 'html'"
        exit 1
    fi
    
    # Validate version type
    if [[ "$version_type" != "beta" && "$version_type" != "stable" ]]; then
        log_error "Invalid version type: $version_type. Must be 'beta' or 'stable'"
        exit 1
    fi
    
    # Set package path
    local package_path="packages/$package_name"
    
    # Verify package exists
    if [[ ! -d "$package_path" ]]; then
        log_error "Package directory not found: $package_path"
        exit 1
    fi
    
    log_info "Starting $action for $package_name package ($version_type)"
    
    # Execute based on action
    if [[ "$action" == "build" ]]; then
        # Release process (version + build + tag)
        new_version=$(update_version "$package_path" "$version_type")
        build_package "$package_path" "$package_name"
        create_git_tag "$package_name" "$new_version"
        
        log_success "Release process completed for $package_name v$new_version"
        log_info "To publish to NPM, run: ./deploy.sh release npm $package_name $version_type"
        
    elif [[ "$action" == "npm" ]]; then
        # NPM publish process
        build_package "$package_path" "$package_name"
        publish_to_npm "$package_path" "$package_name" "$version_type"
        
        log_success "NPM publishing completed for $package_name ($version_type)"
    fi
}

# Show usage information
show_usage() {
    echo "Material Tailwind Deploy Script"
    echo ""
    echo "Usage: $0 [command] [options]"
    echo ""
    echo "Commands:"
    echo "  release react [beta|stable]      - Version, build and tag React package"
    echo "  release html [beta|stable]       - Version, build and tag HTML package" 
    echo "  release npm react [beta|stable]  - Build and publish React package to NPM"
    echo "  release npm html [beta|stable]   - Build and publish HTML package to NPM"
    echo ""
    echo "Examples:"
    echo "  $0 release react beta             # Create beta release for React"
    echo "  $0 release html stable            # Create stable release for HTML"
    echo "  $0 release npm react beta         # Publish React beta to NPM"
    echo "  $0 release npm html stable        # Publish HTML stable to NPM"
    echo ""
    echo "Notes:"
    echo "  - Beta versions: X.Y.Z-beta.N (published with @beta tag)"
    echo "  - Stable versions: X.Y.Z (published with @latest tag)"
    echo "  - Make sure you're logged in to NPM before publishing"
    echo "  - Git working directory should be clean for releases"
}

# Script entry point
if [[ $# -lt 3 ]]; then
    show_usage
    exit 1
fi

# Run checks
check_directory
check_pnpm
check_git_clean

# Execute main function
main "$@" 