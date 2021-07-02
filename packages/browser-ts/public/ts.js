module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs'],
  },
  rules: {
    '@typescript-eslint/no-inferrable-types': [0],
    '@typescript-eslint/lines-between-class-members': [0],
    '@typescript-eslint/no-unused-vars': [2],
    '@typescript-eslint/no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    '@typescript-eslint/no-use-before-define': [1],
    '@typescript-eslint/naming-convention': [1],
  },
}
