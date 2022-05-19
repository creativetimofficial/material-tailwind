# Material Tailwind Contributing Guide

Thank you for your interest in contributing to Material Tailwind! Please feel free to put up a PR for any issue, feature request or enhancement.

Even if you have little to no experience with Tailwind CSS, JavaScript or React, we'd be more than happy to help you with any information or guidance in order to fulfill your PR.

## Development Setup

Material Tailwind is using PNPM workspaces and you need to execute the following commands after clonning the repository.

1. Install dependencies

```bash
pnpm i
```

2. Run the project

```bash
pnpm dev

#or

yarn dev

#or

npm run dev
```

## Material Tailwind Structure

There are different files and folders inside the @material-tailwind directory:

1. packages: all of the different versions are there, the material-tailwind-html and material-tailwind-react and future versions like: material-tailwind-vue, material-tailwind-angular and material-tailwind-svelte. If you want to fix issue or add new features for any of the versions you can use the packages directory.

2. documentation: all of the documentation pages are there as mdx files, if you want to fix any issue, typo or add something new then you need to add it right there. There are currently two directories one html and the other one react which belongs to each version documentation files.

## Reporting Issues & Features Requests

If you notice any bugs in the code, see some code that can be improved, or have features you would like to be added, please create a [bug report](https://github.com/creativetimofficial/material-tailwind/issues/new?template=bug-report---.md) or a [feature request](https://github.com/creativetimofficial/material-tailwind/issues/new?template=feature-request---.md)!

If you want to open a PR that fixes a bug or adds a feature, then we can't thank you enough!

## Working on Issues

Please feel free to take on any issue that's currently open. Just send a comment in order to let us know you're working on it so we can assign that specific issue to you.

## Opening a Pull Request

@material-tailwind is an open-source project, so pull requests are always welcomed (_always_ ❤️).
What we ask you, is that before working on a large change, it is best to open an issue first to discuss it with the maintainers or if an issue was already opened, comment your intention of opening up a PR.

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

### Branch Types

1. **feature/version/branch** - New implementation code that is required for product development. Everything that is not considered a defect and brings value is considered a feature. Example: **feature/react/gbxb-483-enable-ssr**
2. **bug/version/branch** - Defects, either flagged by the QA team or any of the parties involved in the project, missing functionality or wrongly implemented functionality, they all fall into the “bug” category. Branches that solve such defects should be prefixed with the **bug** prefix. Example: **bug/react/gbxb-483-enable-ssr**
3. **docs/version/branch** — Any work that relates to project-level and code-level documentation. Whether it is work related to the project **README**, or code-level documentation, branches that host this type of work should use this prefix. Example: **docs/react/gbxb-483-enable-ssr**

### Commit Formatting

Every file changed should have its own commit message, please don't do one commit for multiple changes.

### Submitting a Pull Request

1. Each PR should be compared with the **dev-main** branch not with the **main**.
2. For @material-tailwind/react add **@sajadevo** as a reviewer.
3. For @material-tailwind/html add **@sajadevo** and **@groovemen** as reviewers.
4. Once your PR approved we'll merge it to the **main** branch and you'll become one of the contributors to the @material-tailwind library. 🥳

## Branches Explained

As you can see we have multiple branches:

- **main**: This branch stores the latest stable version of @material-tailwind.
- **dev-main**: This is the **development** branch of @material-tailwind, and this is where everything is happening before releasing on main
