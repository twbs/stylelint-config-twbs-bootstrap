'use strict';

module.exports = {
  'extends': [
    'stylelint-config-recommended-scss',
    '../css'
  ],
  'rules': {
    'at-rule-no-unknown': null,
    'scss/at-function-named-arguments': 'never',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/at-mixin-named-arguments': null,
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-default': [
      true,
      {
        'ignore': 'local'
      }
    ],
    'scss/dollar-variable-no-missing-interpolation': true,
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
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true
  }
};
