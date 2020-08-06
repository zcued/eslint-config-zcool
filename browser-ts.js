module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'airbnb-typescript/base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2020: true,
    node: false,
  },
  settings: {
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
    },
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/prefer-default-export': [1],
    'import/no-cycle': [2, { maxDepth: 1 }],
    'no-return-assign': [0],
    'class-methods-use-this': [0],
    'react/jsx-boolean-value': [0],
    'react/destructuring-assignment': [0],
    'react/state-in-constructor': [0],
    'react/sort-comp': [0],
    'react/jsx-no-target-blank': [2, { enforceDynamicLinks: 'never' }],
    '@typescript-eslint/no-inferrable-types': [0],
    '@typescript-eslint/lines-between-class-members': [0],
    'react/static-property-placement': [
      'warn',
      'property assignment',
      {
        contextTypes: 'static public field',
        contextType: 'static public field',
        displayName: 'static public field',
        propTypes: 'static public field',
      },
    ],
  },
}
