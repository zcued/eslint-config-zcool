module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json'],
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.ts', '.mjs'],
  },
  rules: {
    '@typescript-eslint/no-inferrable-types': [0],
    '@typescript-eslint/lines-between-class-members': [0],
    '@typescript-eslint/no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    '@typescript-eslint/no-use-before-define': [1],
    '@typescript-eslint/naming-convention': [1],
  },
}
