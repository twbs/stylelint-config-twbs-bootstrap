# stylelint-config-twbs-bootstrap [![npm version](https://img.shields.io/npm/v/stylelint-config-twbs-bootstrap?logo=npm&logoColor=fff)](https://www.npmjs.com/package/stylelint-config-twbs-bootstrap) [![CI Status](https://img.shields.io/github/actions/workflow/status/twbs/stylelint-config-twbs-bootstrap/test.yml?branch=main&label=CI&logo=github)](https://github.com/twbs/stylelint-config-twbs-bootstrap/actions/workflows/test.yml?query=workflow%3ATests+branch%3Amain)

> An opinionated Stylelint config used by Bootstrap across our projects.

## Installation

```bash
npm install stylelint-config-twbs-bootstrap --save-dev
# Or with yarn:
yarn add stylelint-config-twbs-bootstrap --dev
```

## Usage

We provide a single config that covers both CSS and SCSS. It will automatically apply SCSS rules to files ending in `.scss`.

You simply have to extend this config in your Stylelint config:

```json
{
  "extends": "stylelint-config-twbs-bootstrap"
}
```

To see the included rules, please check [index.js](index.js).

## License

Released under the [MIT License](LICENSE).
