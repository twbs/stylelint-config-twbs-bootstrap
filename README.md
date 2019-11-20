# stylelint-config-twbs-bootstrap [![npm version](https://img.shields.io/npm/v/stylelint-config-twbs-bootstrap.svg)](https://www.npmjs.com/package/stylelint-config-twbs-bootstrap) [![Build Status](https://github.com/twbs/stylelint-config-twbs-bootstrap/workflows/Tests/badge.svg)](https://github.com/twbs/stylelint-config-twbs-bootstrap/actions?workflow=Tests)

Default stylelint config used by Bootstrap.

## Installation

### CSS config (default):

```bash
npm install stylelint-config-twbs-bootstrap --save-dev
# Or with yarn:
yarn add stylelint-config-twbs-bootstrap --dev
```

### SCSS config:

```bash
npm install stylelint-config-twbs-bootstrap stylelint-scss stylelint-config-recommended-scss --save-dev
# Or with yarn:
yarn add stylelint-config-twbs-bootstrap stylelint-scss stylelint-config-recommended-scss --dev
```

## Usage

We provide a config for both CSS and SCSS. You can choose which one you would like to extend in your configuration:

### CSS

```json
{
  "extends": "stylelint-config-twbs-bootstrap/css"
}
```

### SCSS

```json
{
  "extends": "stylelint-config-twbs-bootstrap/scss"
}
```
