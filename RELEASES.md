# Material Tailwind Release Process

This document outlines the complete release process for Material Tailwind packages including versioning, building, GitHub releases, and NPM publishing.

## Package Structure

- `@material-tailwind/react` - React components package
- `@material-tailwind/html` - HTML/CSS components package

## Release Types

### Beta Releases
- Used for testing new features and breaking changes
- Version format: `X.Y.Z-beta.N` (e.g., `3.0.0-beta.1`)
- Published to NPM with `@beta` tag
- Can be installed with `npm install @material-tailwind/react@beta`

### Final Releases
- Stable releases for production use
- Version format: `X.Y.Z` (e.g., `3.0.0`)
- Published to NPM with `@latest` tag (default)
- Can be installed with `npm install @material-tailwind/react`

## Pre-Release Checklist

### 1. Code Preparation
- [ ] Ensure all features are complete and tested
- [ ] Update component documentation
- [ ] Run full test suite: `pnpm test`
- [ ] Run linting: `pnpm lint`
- [ ] Build all packages: `pnpm build`
- [ ] Update CHANGELOG.md with new features/fixes

### 2. Version Management
- [ ] Decide on version number following [Semantic Versioning](https://semver.org/)
  - MAJOR: Breaking changes
  - MINOR: New features (backward compatible)
  - PATCH: Bug fixes (backward compatible)

### 3. Documentation Updates
- [ ] Update installation guides if needed
- [ ] Update component examples
- [ ] Update migration guides for breaking changes
- [ ] Verify all CodePreview examples work

## Release Process

### Step 1: Update Package Versions

#### For React Package
```bash
cd packages/react
npm version [patch|minor|major|prerelease] --preid=beta
```

#### For HTML Package
```bash
cd packages/html
npm version [patch|minor|major|prerelease] --preid=beta
```

### Step 2: Build Packages

#### Build React Package
```bash
cd packages/react
pnpm build
```

#### Build HTML Package
```bash
cd packages/html
pnpm build
```

### Step 3: Create Git Tag and Commit

```bash
# Commit version changes
git add .
git commit -m "chore: release v{VERSION}"

# Create and push tag
git tag v{VERSION}
git push origin main
git push origin v{VERSION}
```

### Step 4: Create GitHub Release

1. Go to [GitHub Releases](https://github.com/creativetimofficial/material-tailwind/releases)
2. Click "Draft a new release"
3. Choose the created tag `v{VERSION}`
4. Set release title: `Material Tailwind v{VERSION}`
5. Generate release notes or write custom notes including:
   - New features
   - Bug fixes
   - Breaking changes (if any)
   - Migration guide links
6. Mark as "pre-release" if it's a beta version
7. Publish release

### Step 5: Publish to NPM

#### Beta Release
```bash
# React package
cd packages/react
npm publish --tag beta

# HTML package
cd packages/html
npm publish --tag beta
```

#### Final Release
```bash
# React package
cd packages/react
npm publish

# HTML package
cd packages/html
npm publish
```

## NPM Package Management

### Publishing Beta Versions
```bash
# Publish beta version
npm publish --tag beta

# Users install with:
npm install @material-tailwind/react@beta
```

### Publishing Final Versions
```bash
# Publish final version (latest tag)
npm publish

# Users install with:
npm install @material-tailwind/react
```

### Promoting Beta to Latest
```bash
# If beta testing is successful, promote to latest
npm dist-tag add @material-tailwind/react@{VERSION} latest
```

## Post-Release Tasks

### 1. Update Documentation
- [ ] Update documentation site with new version
- [ ] Deploy documentation changes
- [ ] Update README.md files if needed

### 2. Community Communication
- [ ] Announce release on GitHub Discussions
- [ ] Update Discord/community channels
- [ ] Consider blog post for major releases

### 3. Monitor Release
- [ ] Watch for issue reports
- [ ] Monitor NPM download statistics
- [ ] Check for any critical bugs

## Emergency Hotfix Process

For critical bugs in production releases:

1. Create hotfix branch from main: `git checkout -b hotfix/v{VERSION}`
2. Apply minimal fix
3. Update version (patch increment)
4. Follow normal release process
5. Merge hotfix back to main

## Version Management Examples

### Beta Release Example
```bash
# Starting from version 2.5.0, create first beta for 3.0.0
npm version 3.0.0-beta.1

# Subsequent beta releases
npm version prerelease --preid=beta  # Creates 3.0.0-beta.2
```

### Final Release Example
```bash
# Promote beta to final
npm version 3.0.0
```

## Build Verification

Before publishing, ensure all builds are successful:

```bash
# From project root
pnpm build

# Verify dist folders exist and contain built files
ls packages/react/dist/
ls packages/html/dist/

# Verify package.json files have correct versions
cat packages/react/package.json | grep version
cat packages/html/package.json | grep version
```

## Rollback Process

If a release needs to be rolled back:

### NPM Rollback
```bash
# Deprecate problematic version
npm deprecate @material-tailwind/react@{VERSION} "This version has critical issues, please upgrade"

# Or unpublish within 24 hours
npm unpublish @material-tailwind/react@{VERSION}
```

### GitHub Release Rollback
1. Mark release as draft
2. Delete problematic tag
3. Create new release with fixed version

## Security Considerations

- [ ] Never commit NPM auth tokens
- [ ] Use NPM 2FA for publishing
- [ ] Verify package contents before publishing
- [ ] Review dependencies for vulnerabilities

## Automation Notes

Consider setting up GitHub Actions for:
- Automated testing on release tags
- Automated NPM publishing on tag creation
- Automated documentation deployment
- Release note generation

## Support Matrix

Maintain clear documentation of:
- Node.js version support
- React version compatibility
- Tailwind CSS version compatibility
- Browser support

---

## Quick Reference Commands

```bash
# Check current versions
pnpm version

# Build all packages
pnpm build

# Publish beta
npm publish --tag beta

# Publish final
npm publish

# Check published versions
npm view @material-tailwind/react versions --json
```

---

**Note**: Always test releases in a staging environment before publishing to production. Keep this file updated as the release process evolves. 