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
   yarn -D add @zcool/eslint-config
   ```

4. 添加`.eslintrc.js`文件，并集成不同的配置

   1. 如果当前项目环境为`React + JavaScript`，添加以下内容：
   ```js
     module.exports = {
       extends: '@zcool/eslint-config/browser'
     }
   ```

   2. 如果当前项目环境为`React + TypeScript`，添加以下内容：
   ```js
     module.exports = {
       extends: '@zcool/eslint-config/browser-ts'
     }
   ```

   3. 如果当前项目环境为`Node.js + CommonJS`，添加以下内容：
   ```js
     module.exports = {
       extends: '@zcool/eslint-config/node'
     }
   ```

   4. 如果当前项目环境为`Node.js + TypeScript`，添加以下内容：
   ```js
     module.exports = {
       extends: '@zcool/eslint-config/node-ts'
     }
   ```

## TODO
- separate this package into multiple packages managed by lerna
  - [ ] @zcool/eslint-config-browser
  - [ ] @zcool/eslint-config-browser-ts
  - [ ] @zcool/eslint-config-node
  - [ ] @zcool/eslint-config-node-ts
- migrate [babel-eslint](https://github.com/babel/babel-eslint) to [@babel/eslint-parser](https://github.com/babel/babel/tree/master/eslint/babel-eslint-parser) when it's ready
