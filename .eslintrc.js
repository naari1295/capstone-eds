module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }], // require js file extensions in imports
    'linebreak-style' : 'off', // enforce unix linebreaks
    'no-param-reassign': [2, { props: false }], // allow modifying properties of param
    'eol-last' : 'off',
    'object-curly-newline' : 'off',
    'indent' : 'off',
    'key-spacing' : 'off',
    'space-before-blocks' : 'off',
    'space-infix-ops' : 'off',
    'comma-spacing' : 'off',
    'keyword-spacing' : 'off',
    'no-trailing-spaces' : 'off',
    'comma-dangle' : 'off',
    'arrow-parens' : 'off',
    'prefer-template' : 'off',
    'quote-props' : 'off',
    'eqeqeq' : 'off',
    'no-multiple-empty-lines' : 'off',
    'prefer-const' : 'off',
    'padded-blocks' : 'off',
    'spaced-comment' : 'off',
    'no-inner-declarations' : 'off',
    'no-shadow' : 'off',
    'brace-style' : 'off',
    'semi' : 'off',
    'no-undef' : 'off',
    'operator-linebreak' : 'off',
    'no-plusplus' : 'off',
    'no-console' : 'off',
    'quotes' : 'off',
  },
};

 
 