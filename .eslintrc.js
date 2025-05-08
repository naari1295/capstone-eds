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
    // 'linebreak-style': ['error', 'unix'], // enforce unix linebreaks
    'linebreak-style': 'off',
    'quotes': 'off',
    'quote-props': 'off', // require quotes around object literal property names only when needed
    'no-param-reassign': [2, { props: false }], // allow modifying properties of param
  },
};
