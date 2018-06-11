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
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/self-closing-comp": "error",

    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    "react/sort-comp": ["error", {
      order: [
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
      groups: {
        lifecycle: [
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
        fetch: [
          "/^fetch.+$/",
        ],
        rendering: [
          "/^render.+$/",
          "/^_render.+$/",
          "render"
        ],
      },
    }],
  }
}
