# Contributing

Thank you for your interest in contributing! Please feel free to put up a PR for any issue, feature request or enhancement.

Even if you have little to no experience with Tailwindcss, JavaScript or React, we'd be more than happy to help you with any information or guidance in order to fulfill your PR.

## Reporting issues & features requests

If you notice any bugs in the code, see some code that can be improved, or have features you would like to be added, please create a [bug report](https://github.com/creativetimofficial/material-tailwind/issues/new?template=bug-report---.md) or a [feature request](https://github.com/creativetimofficial/material-tailwind/issues/new?template=feature-request---.md)!

If you want to open a PR that fixes a bug or adds a feature, then we can't thank you enough!

## Working on issues

Please feel free to take on any issue that's currently open. Just send a comment in order to let us know you're working on it so we can assign that specific issue to you.

## Submitting a pull request

**@material-tailwind** is an open-source project, so pull requests are always welcomed (_always_ ❤️).
What we ask you, is that before working on a large change, it is best to open an issue first to discuss it with the maintainers or if an issue was already opened, comment your intention of opening up a PR.

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

### Branch types

1. **Feature** - New implementation code that is required for product development. Everything that is not considered a defect and brings value is considered a feature. Example: **feature/GBXB-483-enable-SSR**
2. **Bug** - Defects, either flagged by the QA team or any of the parties involved in the project, missing functionality or wrongly implemented functionality, they all fall into the “bug” category. Branches that solve such defects should be prefixed with the **bug** prefix. Example: **bug/GBXB-441-fix-double-spending**
3. **Chore** — Miscellaneous work not related to the project code. For example, updating node module versions, renaming an environment configuration file or removing unused variables. Example: **chore/rename-dotenv-preference-file**
4. **Docs** — Any work that relates to project-level and code-level documentation. Whether it is work related to the project **README**, or code-level documentation, branches that host this type of work should use this prefix. Example: **docs/GBXB-483-enable-SSR**

### Commit formatting

Every file changed should have its own commit message and each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

From the above template, only the **header** is mandatory (_note_: the **scope** of the header is not mandatory) and the **header** should not be longer than 100 characters!

#### Type

Can only be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

#### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

#### Subject

The subject is a succint description of what this commit does.

#### Body

A large detail, if needed, of what this commit does.

#### Footer

The footer should only contain a closing statement for an issue.

#### Samples:

```
docs(changelog): update changelog to v1.0.0
```

```
refactor: change alert code

With this new code, the alert will respond faster to user interactions (such as closing the alert).

Closes #12
```

## Branches explained

As you can see we have multiple branches:

- **main**: This branch stores the latest stable version of @material-tailwind.
- **dev-main**: This is the **development** branch of @material-tailwind, and this is where everything is happening before releasing on main
