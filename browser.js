module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:react-hooks/recommended',
    './rules/base',
    './rules/react',
    './rules/import',
  ],
  plugins: ['prettier', 'react-hooks'],
  globals: {
    window: true,
    document: true,
    navigator: true,
  },
  env: {
    browser: true,
    es2020: true,
    node: false,
  },
  settings: {
    polyfills: ['fetch', 'promises'],
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2020, //  Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {},
}
