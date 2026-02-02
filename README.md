# e-packages — Shared Packages Repository

Reusable packages for the e-commerce platform (TypeScript types, utilities, UI component library).

## Structure

```
e-packages/
├── packages/
│   ├── types/           # TypeScript types & interfaces
│   ├── utils/           # Utility functions
│   └── ui-library/      # React component library (published to GitHub Pages)
└── package.json
```

## Quick Start

```bash
# Install dependencies
yarn install

# Build all packages
yarn build

# Test all packages
yarn test

# Test with coverage
yarn test:coverage

# View test coverage
yarn test:coverage
```

## Packages

### @3asoftwares/types

TypeScript type definitions and interfaces used across the platform.

```bash
yarn build:types
yarn test:types
```

### @3asoftwares/utils

Shared utility functions (data transformation, API helpers, etc.).

```bash
yarn build:utils
yarn test:utils
```

### @3asoftwares/ui

React component library. Published to npm and UI documentation to GitHub Pages.

```bash
yarn build:ui
yarn test:ui
```

## Publishing

### npm Registry

Packages are published to npm on every successful merge to `main` branch:

```bash
yarn workspaces foreach --all npm publish --access public
```

### GitHub Pages (UI Library Docs)

UI library documentation is deployed to GitHub Pages at: `https://<org>.github.io/e-packages/`

## Repository Secrets Required

| Secret               | Description                                        |
| -------------------- | -------------------------------------------------- |
| `NPM_TOKEN`          | npm authentication token for publishing (optional) |
| `SONAR_TOKEN`        | SonarQube/SonarCloud token (optional)              |
| `SONAR_HOST_URL`     | SonarQube host URL (optional, self-hosted)         |
| `SONAR_ORGANIZATION` | SonarCloud organization key (optional)             |

## CI/CD

Automated via GitHub Actions (`.github/workflows/ci-cd.yml`):

1. **Lint, Build, Test** — runs on all branches
2. **SonarQube Scan** — code quality analysis
3. **Publish to npm** — on `main` branch push (if `NPM_TOKEN` set)
4. **Deploy UI to GitHub Pages** — on `main` branch push

## Testing

All packages include test suites:

```bash
# Run all tests
yarn test

# Run specific package tests
yarn test:types
yarn test:utils
yarn test:ui

# Coverage report
yarn test:coverage
```

Tests run on:

- All branches (PR validation)
- Main branch (before publish)

## SonarQube Integration

Configure in your SonarQube instance:

```properties
sonar.projectKey=e-packages
sonar.projectName=e-packages
sonar.sources=packages
sonar.coverage.exclusions=**/node_modules/**,**/*.spec.ts,**/*.test.ts,**/*.spec.tsx
```

## Notes

- Uses Yarn workspaces
- Packages can be used independently or as a group
- UI library is web-ready and published for reuse
- All packages support TypeScript
