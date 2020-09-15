'use strict';

module.exports = {
  'extends': [
    'stylelint-config-recommended-scss',
    '../css'
  ],
  'rules': {
    'at-rule-no-unknown': null,
    'scss/at-function-named-arguments': 'never',
    'scss/at-function-pattern': '^[a-z][a-z-]*$',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension': 'never',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': null,
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/dimension-no-non-numeric-values': true,
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': '^[a-z][a-z-\\d]*$',
    'scss/media-feature-value-dollar-variable': null,
    'scss/no-duplicate-dollar-variables': [
      null,
      {
        'ignoreInsideAtRules': [
          'if',
          'mixin'
        ]
      }
    ],
    'scss/no-duplicate-mixins': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true
  }
};
