import js from '@eslint/js'
import globals from 'globals'

/** @type {import('eslint').Linter.RulesRecord} */
const RULES = {
  'comma-dangle': [
    'error',
    'never'
  ],
  'quotes': [
    'error',
    'single'
  ],
  'quote-props': [
    'error',
    'always'
  ]
};

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // global ignores
  {
    'ignores': [
      'bootstrap',
      'node_modules/**'
    ]
  },
  {
    'languageOptions': {
      'ecmaVersion': 2022,
      'sourceType': 'script',
      'globals': {
        ...globals.node
      }
    },
    'linterOptions': {
      'reportUnusedDisableDirectives': 'error'
    }
  },
  js.configs.recommended,
  {
    'files': [
      '**/*.js'
    ],
    'rules': {
      ...RULES
    }
  },
  {
    'files': [
      '**/*.mjs'
    ],
    'languageOptions': {
      'sourceType': 'module',
      'globals': {
        ...globals.nodeBuiltin
      }
    },
    'rules': {
      ...RULES
    }
  }
]
