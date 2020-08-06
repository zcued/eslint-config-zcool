# @zcool/eslint-config
> eslint config for zcool

## Usage
1.
```shell
yarn add eslint babel-eslint -D
```
2.
```shell
yarn add @zcool/eslint-config -D
```

3.
add file `.eslintrc.js`

- 如果当前项目环境为`React + JavaScript`，添加以下内容：

```js
  module.exports = {
    extends: '@zcool/eslint-config/browser'
  }
```

- 如果当前项目环境为`React + TypeScript`，添加以下内容：
```js
  module.exports = {
    extends: '@zcool/eslint-config/browser-ts'
  }
```

- 如果当前项目环境为`Node.js + CommonJS`，添加以下内容：
```js
  module.exports = {
    extends: '@zcool/eslint-config/node'
  }
```

- 如果当前项目环境为`Node.js + TypeScript`，添加以下内容：
```js
  module.exports = {
    extends: '@zcool/eslint-config/node-ts'
  }
```
