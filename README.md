# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.


## 项目启动
1. `yarn install`
2. `yarn dev`
3. `yarn build`
4. `yarn serve`

## 存储封装
引用：
`import { setLocalStorage, getLocalStorage,setSessionStorage,getSessionStorage } from '@/utils/auth'`
使用：
`setLocalStorage('a', [1, 23, 34, 432, 4324])`
`setLocalStorage('b', { a: 1, b: '2', c: [1, 2, '3'] })`
`setSessionStorage('c', '123')`
`setSessionStorage('d', 123)`
`console.log(getLocalStorage('a'));`
`console.log(getLocalStorage('b'));`
`console.log(getSessionStorage('c'));`
`console.log(getSessionStorage('d'));`
`

## 实现移动自适应
1. `yarn add postcss-pxtorem`
postcss.config.js文件
module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
                "last 10 versions", // 所有主流浏览器最近10版本用
            ],
            grid: true,
        },
        'postcss-pxtorem': {
            rootValue: 37.5, // 换算的基数
            propList: ['*'],
            unitPrecision: 5
        }
    }
}

2. 这里只实现了 px转rem，还要安装 amfe-flexible
`yarn add amfe-flexible`
在main.ts文件中 import 一下就好可以了
`import ‘amfe-flexible/index.js’`

：可能会出现下面情况
[vite] `Internal server error: Loading PostCSS Plugin failed: Cannot find module 'autoprefixer'`

3. 这时候尝试安装 autoprefixer就可以了
`yarn add autoprefixer`


## 按需引入组件 vant UI
1. `yarn add vant@next`

2. `vite.config.js` 
styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style`,
      },
    ],
  }),

3. `main.js`
`import { Button } from 'vant';`
`app.use(Button)`

4. `使用`
`<van-button type="primary">主要按钮</van-button>`

## `scss 安装配置使用`
1. `yarn add sass-loader node-sass sass`
2. `vite内配置css预加载 scss后面切记加分号 不然报错`
css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/variable.scss";'// 添加公共样式
      }
    }
  }

3. `创建 ./src/assets/scss/variable.scss 文件 并配置 任意变量 $l: var(--l,#64b687);`

4. `配置vite配置项`
css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/variable.scss";'// 添加公共样式
      }
    }
  }
5. `项目使用` 
`<style lang="scss" scoped>`
  `color: $l;`
`</style>`