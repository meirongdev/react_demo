# React Demo

## Prerequisites

- node.js (v21.6.2)
- pnpm (v9.9.0)
- react (v18.3.1)

## Create a new React app

```bash
# react + javascript
pnpm create vite react_demo
cd react_demo
pnpm install
```

## Setting up development environment

- vs code
  - extensions
    - Docker
    - ESLint
    - Prettier
    - MongoDB

### Static code analysis

```bash
pnpm add -D prettier \
eslint \
eslint-plugin-react \
eslint-config-prettier \
eslint-plugin-jsx-a11y
```

- prettier: formats our code automatically according to a defined code style
- eslint: analyzes our code and enforces best practices
- eslint-config-react: enables rules in eslint relevant to react projects
- eslint-config-prettier: disables rules relating to code style in eslint so that prettier can handle them instead
- eslint-plugin-jsx-ally: allow eslint to check for accessibility issues in our JSX code

### Configuring Prettier

.prettierrc.json

```json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "printWidth": 80,
  "semi": false,
  "jsxSingleQuote": true,
  "singleQuote": true
}
```

- https://prettier.io/docs/en/options.html

#### Config Prettier extension

- VS Code
  - settings
    - editor format on save
    - editor default formatter

#### .prettierignore

content

```
dist/
```

`node_modules` will be ignored by default.

#### Verification

Add new line in `App.jsx`, it will be formatted automatically when saved.

### Configuring ESLint

Prettier will focus on code style, while ESLint will focus on code quality.

#### `.eslintrc.json`

```json
{
  "root": true,
  "env": {
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-ally/recommended",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "overrides": [
    {
      "files": ["*.js", "*.jsx"]
    }
  ]
}
```

#### eslint.config.js

add ignore patterns

```json
{ ignores: ['dist', 'vite.config.js'] },
```

`node_modules` will be ignored by default.

#### Verification

```bash
npx eslint src
```

#### Add script for lint

```bash
# add script to package.json
pnpm pkg set scripts.lint="eslint src"
# run the script
pnpm lint
```

### Setting up Husky

Husky will ensure we have run the linting and formatting checks before we commit our code. It can work with [lint-staged](https://github.com/lint-staged/lint-staged).

#### Installation

```bash
pnpm add -D husky lint-staged
```

#### Configuring lint-staged

package.json

```json
  "devDependencies": {
	  ......
  },
  "lint-staged": {
    "**/*.{js,jsx}": [
      "npx prettier --write",
      "npx eslint --fix"
    ]
  }
```

Add husky commands to package.json

#### Verification

```bash
git init
git add .
git commit -m "chore: initial commit"
```

```bash
pnpm pkg set scripts.prepare="husky install"
```
