module.exports = {
  extends: 'standard',
  rules: {
    semi: [2, 'always'],
    'no-extra-semi': 2,
    'lines-between-class-members': 0,
    noInlineConfig: 0,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
}
