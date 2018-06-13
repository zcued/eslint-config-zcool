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
    "prefer-object-spread",
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

    // https://eslint.org/docs/3.0.0/rules/no-var#when-not-to-use-it
    "no-var": "error",

    // https://eslint.org/docs/rules/no-multi-str
    "no-multi-str": "error",

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

    // https://eslint.org/docs/rules/padded-blocks
    "padded-blocks": ["error", "never"],

    // https://eslint.org/docs/rules/padding-line-between-statements
    "padding-line-between-statements": [
      "error", {
        "blankLine": "always",
        "prev": "*",
        "next": "return",
      }, {
        "blankLine": "any",
        "prev": ["const", "let", "var"],
        "next": ["const", "let", "var"],
      }, {
        "blankLine": "any",
        "prev": "directive",
        "next": "directive",
      }
    ],

    // https://eslint.org/docs/rules/prefer-object-spread
    "prefer-object-spread/prefer-object-spread": "error",

    // https://eslint.org/docs/rules/no-useless-constructor
    "no-useless-constructor": "error",

    // https://eslint.org/docs/rules/keyword-spacing
    "keyword-spacing": "error",

    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/self-closing-comp": "error",

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": ["error", {
      "ignorePureComponents": true
    }],

    // Prevent usage of setState in componentWillUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    "react/no-will-update-set-state": "error",

    // Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    // this is necessary for server-rendering
    "react/no-did-mount-set-state": "off",

    // Prevent usage of setState in componentDidUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    "react/no-did-update-set-state": "error",

    // Require that the first prop in a JSX element be on a new line when the element is multiline
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],

    // Enforce spacing around jsx equals signs
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    "react/jsx-equals-spacing": ["error", "never"],

    // only .jsx files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ["error", {
      "extensions": [".jsx"]
    }],

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-curly-spacing": ["error", "never", {
      "allowMultiline": true
    }],

    // Validate closing bracket location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],

    // Prevent duplicate props in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    "react/jsx-no-duplicate-props": ["error", {
      "ignoreCase": true
    }],

    // Limit maximum of props on a single line in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    "react/jsx-max-props-per-line": ["error", {
      "maximum": 1,
      "when": "multiline"
    }],

    // Validate whitespace in and around the JSX opening and closing brackets
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
    "react/jsx-tag-spacing": ["error", {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never",
    }],

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
