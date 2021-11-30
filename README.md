# stylelint-config-twbs-bootstrap [![npm version](https://img.shields.io/npm/v/stylelint-config-twbs-bootstrap)](https://www.npmjs.com/package/stylelint-config-twbs-bootstrap) [![Build Status](https://img.shields.io/github/workflow/status/twbs/stylelint-config-twbs-bootstrap/Tests/main?label=Tests&logo=github)](https://github.com/twbs/stylelint-config-twbs-bootstrap/actions?query=workflow%3ATests+branch%3Amain)

Default stylelint config used by Bootstrap.

## Installation

```bash
npm install stylelint-config-twbs-bootstrap --save-dev
# Or with yarn:
yarn add stylelint-config-twbs-bootstrap --dev
```

## Usage

We provide a single config that covers both CSS and SCSS. It will automatically apply SCSS rules to files ending in `.scss`. You simply have to extend this config:

```json
{
  "extends": "stylelint-config-twbs-bootstrap"
}
```
