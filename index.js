module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-console": 0,

    // unify brace style
    // https://eslint.org/docs/rules/brace-style
    "brace-style": ["error", "1tbs"],

    // https://eslint.org/docs/rules/prefer-const
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false,
    }],

    // https://eslint.org/docs/rules/array-callback-return
    "array-callback-return": "error",

    // https://eslint.org/docs/rules/no-else-return
    "no-else-return": ["error", {
      "allowElseIf": true,
    }],

    // https://eslint.org/docs/rules/no-multi-spaces
    "no-multi-spaces": ["error", {
      "ignoreEOLComments": true,
    }],

    // https://eslint.org/docs/rules/no-trailing-spaces
    "no-trailing-spaces": "error",

    // https://eslint.org/docs/rules/rest-spread-spacing
    "rest-spread-spacing": ["error"],

    // https://eslint.org/docs/rules/prefer-spread
    "prefer-spread": "error",

    // https://eslint.org/docs/rules/prefer-template
    "prefer-template": "error",

    // https://eslint.org/docs/rules/template-curly-spacing
    "template-curly-spacing": ["error", "never"],

    // https://eslint.org/docs/rules/eol-last
    "eol-last": ["error", "always"],

    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/self-closing-comp": "error",

    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    "react/sort-comp": ["error", {
      "order": [
        "static-methods",
        "instance-variables",
        "lifecycle",          // 生命周期
        "/^init.+$/",         // 初始化工作
        "/^fetch.+$/",        // API请求
        "/^handle.+$/",       // React事件绑定，onClick之类的事件绑定，一般以handle**开始
        "instance-methods",   // 其他自定义函数
        "everything-else",
        "getters",
        "setters",
        "rendering",
      ],
      "groups": {
        "lifecycle": [
          "displayName",
          "propTypes",
          "statics",
          "defaultProps",
          "constructor",
          "state",
          "getDerivedStateFromProps",   // new lifecycle method after react 16.3
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "getSnapshotBeforeUpdate",    // new lifecycle method after react 16.3
          "componentDidUpdate",
          "componentDidCatch",          // new lifecycle method after react 16
          "componentWillUnmount",
        ],
        "fetch": [
          "/^fetch.+$/",
        ],
        "rendering": [
          "/^render.+$/",
          "/^_render.+$/",
          "render"
        ],
      },
    }],
  }
}
