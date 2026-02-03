# e-packages — Shared Packages Repository

Reusable packages for the e-commerce platform (TypeScript types, utilities, UI component library).

## Structure

```
e-packages/
├── packages/
│   ├── types/           # TypeScript types & interfaces (@3asoftwares/types)
│   ├── utils/           # Utility functions (@3asoftwares/utils)
│   └── ui-library/      # React component library (@3asoftwares/ui)
├── .github/workflows/   # GitHub Actions CI/CD automation
└── package.json         # Yarn workspaces configuration
```

## Package Overview

| Package      | Name               | Description                          | Entry Points                   |
| ------------ | ------------------ | ------------------------------------ | ------------------------------ |
| `types`      | @3asoftwares/types | TypeScript type definitions          | index.d.ts                     |
| `utils`      | @3asoftwares/utils | Utility functions (client/server)    | index, client, server, backend |
| `ui-library` | @3asoftwares/ui    | React component library w/ Storybook | index, styles.css              |

## Quick Start

```bash
# Install dependencies (uses Yarn workspaces)
yarn install

# Build all packages in dependency order
yarn build

# Run all tests
yarn test

# Test with coverage
yarn test:coverage
```

## Building Packages

### Build All Packages

```bash
yarn build
```

### Build Individual Packages

```bash
yarn build:types
yarn build:utils
yarn build:ui
```

## Testing

Each package includes comprehensive test suites using Vitest.

### Run All Tests

```bash
yarn test
```

### Test Individual Packages

```bash
yarn test:types
yarn test:utils
yarn test:ui
```

### Coverage Reports

```bash
yarn test:coverage
```

Coverage reports are generated for all packages and uploaded to Codecov on each CI run.

**Coverage Output Locations:**

- `packages/types/coverage/coverage-final.json`
- `packages/utils/coverage/coverage-final.json`
- `packages/ui-library/coverage/coverage-final.json`

## UI Library & Storybook

The UI library includes interactive Storybook documentation.

### Development

```bash
# Start Storybook dev server
yarn workspace @3asoftwares/ui run storybook
```

### Build Storybook

```bash
yarn workspace @3asoftwares/ui run build-storybook
```

Storybook is automatically deployed to GitHub Pages on every push to `main` branch at: `https://<org>.github.io/e-packages/`

## Publishing to npm

All packages are published to npm with individual workflows for reliability.

### Manual Publishing (Local)

```bash
# Publish all packages
yarn publish

# Or publish individual packages
yarn workspace @3asoftwares/types npm publish
yarn workspace @3asoftwares/utils npm publish
yarn workspace @3asoftwares/ui npm publish
```

### Automatic Publishing (CI/CD)

Packages are automatically published to npm when pushed to `main` branch:

- **@3asoftwares/types** - Published via `publish-npm-types` job
- **@3asoftwares/utils** - Published via `publish-npm-utils` job
- **@3asoftwares/ui** - Published via `publish-npm-ui` job

**Requirements:**

- NPM_TOKEN secret must be configured in repository
- All tests must pass
- All packages must build successfully
- Push must be to `main` branch

**Configuration:**

- Access level: public
- Registry: https://registry.npmjs.org/

## CI/CD Pipeline

Automated workflow via GitHub Actions (`.github/workflows/ci-cd.yml`)

### Jobs Overview

| Job                             | Trigger | Purpose                                    |
| ------------------------------- | ------- | ------------------------------------------ |
| `lint-build-test`               | All     | Build, test, and coverage for each package |
| `sonarqube-scan`                | All     | Code quality & security analysis           |
| `publish-npm-types`             | main    | Publish @3asoftwares/types to npm          |
| `publish-npm-utils`             | main    | Publish @3asoftwares/utils to npm          |
| `publish-npm-ui`                | main    | Publish @3asoftwares/ui to npm             |
| `deploy-storybook-github-pages` | main    | Deploy UI Storybook to GitHub Pages        |

### CI Workflow Details

#### 1. Lint, Build, Test (All Branches)

- Runs on all pushes to `main` and `develop` branches
- Runs on all pull requests to `main` and `develop` branches
- **Matrix Strategy:** Tests each package independently (types, utils, ui)
- **Steps per package:**
  1. Checkout code
  2. Setup Node.js v18
  3. Install dependencies
  4. Build package
  5. Run tests with coverage
  6. Upload coverage to Codecov

#### 2. SonarQube Scan

- Requires `lint-build-test` to complete
- Runs on all branches (if configured)
- Requires secrets: `SONAR_TOKEN`, `SONAR_HOST_URL`, `SONAR_ORGANIZATION`
- Analyzes code quality and security

#### 3. NPM Publishing (main branch only)

- Separate job for each package (reliability)
- Depends on successful `lint-build-test`
- Only triggers on pushes to `main` branch
- Requires `NPM_TOKEN` secret
- Each job:
  1. Builds package
  2. Publishes with `--access public`
  3. Continues on error (graceful failure)

#### 4. Storybook Deployment (main branch only)

- Deploys UI library Storybook to GitHub Pages
- Only triggers on pushes to `main` branch
- Steps:
  1. Install dependencies
  2. Build Storybook static files
  3. Upload artifact
  4. Deploy to GitHub Pages

### Build Matrix Strategy

The `lint-build-test` job uses a matrix strategy for parallel execution:

```yaml
matrix:
  package: [types, utils, ui]
```

This creates 3 independent jobs that run in parallel:

- `lint-build-test[types]`
- `lint-build-test[utils]`
- `lint-build-test[ui]`

### Coverage Tracking

Coverage is tracked per package and uploaded to Codecov:

- Each package coverage is tagged with package name flag
- LCOV reports are generated for SonarQube integration
- Coverage data is in `sonar-project.properties`

## Repository Secrets Required

| Secret               | Description                             | Required |
| -------------------- | --------------------------------------- | -------- |
| `NPM_TOKEN`          | npm authentication token for publishing | No\*     |
| `SONAR_TOKEN`        | SonarQube/SonarCloud token              | No\*\*   |
| `SONAR_HOST_URL`     | SonarQube host URL (self-hosted)        | No\*\*   |
| `SONAR_ORGANIZATION` | SonarCloud organization key             | No\*\*   |
| `GITHUB_TOKEN`       | Automatic (GitHub Actions)              | Yes      |

\* If not provided, npm publishing is skipped  
\*\* If not provided, SonarQube scanning is skipped

## Configuration Files

### Root Level

- `package.json` — Yarn workspaces configuration and root scripts
- `tsconfig.json` — TypeScript base configuration
- `sonar-project.properties` — SonarQube analysis settings
- `.github/workflows/ci-cd.yml` — GitHub Actions pipeline

### SonarQube Configuration (`sonar-project.properties`)

```properties
sonar.projectKey=e-packages
sonar.projectName=e-packages
sonar.sources=packages
sonar.coverage.exclusions=**/node_modules/**,**/*.spec.ts,**/*.test.ts,**/*.test.tsx,dist/**
sonar.javascript.lcov.reportPaths=packages/types/coverage/lcov.info,packages/utils/coverage/lcov.info,packages/ui-library/coverage/lcov.info
```

### TypeScript Configuration

Each package has its own `tsconfig.json` with:

- Modern ES module target
- Strict type checking
- Path aliases where needed

### Build Configuration

- `types/` — Uses `tsup` for bundling (CJS + ESM + types)
- `utils/` — Uses `tsup` with separate backend config
- `ui-library/` — Uses Vite for React app, Storybook for documentation

### Test Configuration

All packages use Vitest with:

- Unit test support
- Coverage reporting (--coverage flag)
- Optional UI mode (`yarn test:ui` for ui-library)

## Package Scripts Reference

### Root Scripts

```bash
# Building
yarn build              # Build all packages
yarn build:types       # Build types package
yarn build:utils       # Build utils package
yarn build:ui          # Build ui package

# Testing
yarn test              # Run all tests
yarn test:types        # Test types package
yarn test:utils        # Test utils package
yarn test:ui           # Test ui package
yarn test:coverage     # Run all tests with coverage

# Publishing
yarn publish           # Publish all packages (local)

# Storybook
yarn docs              # Open Storybook dev server
```

### Individual Package Scripts

See each package's `package.json` for additional scripts:

- `types/package.json` — tsup build configuration
- `utils/package.json` — Multiple build targets (client/server/backend)
- `ui-library/package.json` — Vite dev/build, Storybook, test UI mode

## Environment Requirements

- **Node.js:** >=18.0.0
- **Yarn:** >=3.0.0 (Yarn workspaces)

Verify in your terminal:

```bash
node --version    # Should be v18+
yarn --version    # Should be v3+
```

## Troubleshooting

### Build Failures

```bash
# Clear node_modules and reinstall
rm -rf node_modules packages/*/node_modules
yarn install
yarn build
```

### Test Failures

```bash
# Run tests with verbose output
yarn test -- --reporter=verbose

# Test single package
yarn test:types -- --reporter=verbose
```

### Coverage Issues

```bash
# Regenerate coverage
yarn test:coverage

# Check coverage reports
cat packages/types/coverage/coverage-final.json
cat packages/utils/coverage/coverage-final.json
cat packages/ui-library/coverage/coverage-final.json
```

### npm Publishing Issues

```bash
# Check npm token configuration
npm config get registry

# Verify package.json publishConfig
cat packages/types/package.json | grep -A2 publishConfig
```

## Project Structure Details

### @3asoftwares/types

- **Location:** `packages/types/`
- **Type:** Type definitions library
- **Build:** tsup (CJS + ESM + TypeScript definitions)
- **Output:** `dist/` (index.js, index.mjs, index.d.ts)
- **Entry:** All type definitions via `src/index.ts`

### @3asoftwares/utils

- **Location:** `packages/utils/`
- **Type:** Utility functions (client + server)
- **Build:** tsup (Multiple export targets)
- **Output:** `dist/` (main, client, server, backend)
- **Exports:**
  - Default: `index`
  - Named: `./client`, `./server`, `./backend`
  - Config: `./config/tsconfig.base.json`

### @3asoftwares/ui

- **Location:** `packages/ui-library/`
- **Type:** React component library
- **Build:** Vite + TypeScript (for production), Storybook (for docs)
- **Output:**
  - Library: `dist/` (ui-library.cjs.js, ui-library.es.js, style.css)
  - Storybook: `storybook-static/` (deployed to GitHub Pages)
- **Components:** Badge, Button, Confirm, Header, Input, Modal, etc.
- **Styling:** Tailwind CSS + DaisyUI

## Performance & Optimization

### Parallel Testing

The CI pipeline uses matrix strategy to test all packages in parallel, reducing overall CI time.

### Dependency Caching

GitHub Actions caches Yarn dependencies to speed up subsequent runs.

### Incremental Builds

Each package is built independently, allowing for faster iteration during development.

## Notes

- Uses **Yarn workspaces** for monorepo management
- Packages can be used independently or together
- All packages support **TypeScript** with strict mode
- **React 18+** required for UI library
- Components styled with **Tailwind CSS** + **DaisyUI**
- Interactive documentation via **Storybook**
- Code quality tracked via **SonarQube/SonarCloud**
- Coverage tracked via **Codecov**
