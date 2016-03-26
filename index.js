/* eslint-disable quote-props */
module.exports = {
  extends: 'airbnb/base',
  rules: {
    'object-curly-spacing': [2, 'always'],

    'semi': [2, 'never'],

    'no-console': 0,

    'no-multi-spaces': 2,

    'no-nested-ternary': 0,

    'no-else-return': 0,

    'block-scoped-var': 0,

    'prefer-arrow-callback': 2,

    'prefer-template': 2,

    'new-cap': 0,

    'one-var': 0,

    'no-dupe-keys': 2,

    'spaced-comment': 0,

    'id-length': 0,

    'no-unused-expressions': 0,

    'object-shorthand': 2,

    'block-spacing': [2, 'always'],

    // require should be able to serve as dynamic escape hatch
    'global-require': 0,

    'max-statements-per-line': ['error', { max: 1 }],
  },
  globals: {
    'it': false,
    'afterEach': false,
    'beforeEach': false,
    'before': false,
    'after': false,
    'describe': false,
    'expect': false,
    'assert': false,
  },
  env: {
    'browser': true,
    'es6': true,
    'node': true,
  },
}

