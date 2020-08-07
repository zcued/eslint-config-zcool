module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },

  rules: {
    'import/extensions': [0],
    'import/prefer-default-export': [1],
    'import/no-cycle': [2, { maxDepth: 1 }],
  },
}
