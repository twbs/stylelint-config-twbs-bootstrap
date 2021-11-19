'use strict';

module.exports = {
  'extends': [
    'stylelint-config-standard',
    './css.js',
  ],
  'overrides': [
    {
      'files': '**/*.scss',
      'extends': [
        'stylelint-config-standard-scss',
        './css.js',
      ],
      'rules': {
        'no-invalid-position-at-import-rule': null,
        'scss/at-function-named-arguments': 'never',
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/at-mixin-named-arguments': null,
        'scss/dimension-no-non-numeric-values': true,
        'scss/dollar-variable-colon-space-after': 'at-least-one-space',
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
        'scss/selector-no-redundant-nesting-selector': true
      }
    }
  ]
};
