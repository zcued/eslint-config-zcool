module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:react-hooks/recommended'],
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
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': [0],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
  },
}
