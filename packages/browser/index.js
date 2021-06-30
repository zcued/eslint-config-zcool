module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier', 'react', 'react-hooks'],
  extends: ['airbnb-base', 'prettier', '@zcool/eslint-config-public/base', '@zcool/eslint-config-public/react', '@zcool/eslint-config-public/import'],
  globals: {
    window: true,
    document: true,
    navigator: true,
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
    es6: true,
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
