module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    './public/base',
    './public/react',
    './public/import',
    './public/ts',
  ],
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
