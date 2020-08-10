module.exports = {
  rules: {
    camelcase: [1, { allow: ['^UNSAFE_'] }],
    'class-methods-use-this': [0],
    'consistent-return': [1],
    'lines-between-class-members': [0],
    'no-return-assign': [0],
    'no-nested-ternary': [1],
    'no-underscore-dangle': [1],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'no-param-reassign': [2, { props: true, ignorePropertyModificationsForRegex: ['^draft'] }],
    'prefer-destructuring': [
      1,
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },
}
