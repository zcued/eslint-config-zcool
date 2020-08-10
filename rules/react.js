module.exports = {
  plugins: ['react'],
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-boolean-value': [0],
    'react/destructuring-assignment': [0],
    'react/state-in-constructor': [0],
    'react/sort-comp': [0],
    'react/jsx-no-target-blank': [2, { enforceDynamicLinks: 'never' }],
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
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
