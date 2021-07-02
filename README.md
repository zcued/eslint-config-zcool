# @zcool/eslint-config
> eslint config for zcool

## Usage
1. 安装`eslint`
   ```shell
   yarn add eslint -D
   ```

2. 如果不同的`parser`
   1. 如果项目为`JavaScript`项目，安装`babel-eslint`
   2. 如果项目为`TypeScript`项目，安装`@typescript-eslint/parser`

3. 安装`@zcool/eslint-config`
   ```shell
   yarn -D add @zcool/eslint-config-browser
   yarn -D add @zcool/eslint-config-browser-ts
   yarn -D add @zcool/eslint-config-node
   yarn -D add @zcool/eslint-config-node-ts
   ```

4. 添加`.eslintrc.js`文件，并集成不同的配置

   1. 如果当前项目环境为`React + JavaScript`，添加以下内容：
   ```js
     module.exports = {
       extends: '@zcool/eslint-config-browser'
     }
   ```

   2. 如果当前项目环境为`React + TypeScript`，添加以下内容：
   ```js
     module.exports = {
       extends: '@zcool/eslint-config-browser-ts'
     }
   ```

   3. 如果当前项目环境为`Node.js + CommonJS`，添加以下内容：
   ```js
     module.exports = {
       extends: '@zcool/eslint-config-node'
     }
   ```

   4. 如果当前项目环境为`Node.js + TypeScript`，添加以下内容：
   ```js
     module.exports = {
       extends: '@zcool/eslint-config-node-ts'
     }
   ```

5. 如果开发环境为[vscode](https://github.com/Microsoft/vscode)，可以安装[vscode-eslint](https://github.com/Microsoft/vscode-eslint)插件以获取更好的按开发体验。

## 使用lerna的多包管理方案
发布时需要先执行脚本文件整合在npm scirpt里，执行以下语句
```shell
  npm run publish
```
其他相关 [lerna官网](https://lerna.js.org/)

## TODO
- separate this package into multiple packages managed by lerna
  - [ ] @zcool/eslint-config-browser
  - [ ] @zcool/eslint-config-browser-ts
  - [ ] @zcool/eslint-config-node
  - [ ] @zcool/eslint-config-node-ts
- migrate [babel-eslint](https://github.com/babel/babel-eslint) to [@babel/eslint-parser](https://github.com/babel/babel/tree/master/eslint/babel-eslint-parser) when it's ready
