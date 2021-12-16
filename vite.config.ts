import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 按需引入组件 vant
import styleImport from 'vite-plugin-style-import';


export default defineConfig({
  plugins: [vue(),
  styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style`,
      },
    ],
  }),
  ],
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  /**
  * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
  * @default 'dist'
  */
  // build: {
  //   outDir: 'bale'
  // },
  server: {
    host: '0.0.0.0',
    port: 3001,
    open: false,// 是否自动在浏览器打开
    https: false,// 是否开启 https
    // ssr: false, // 服务端渲染
    proxy: {
      '/api': {
        target: 'https://api.apiopen.top/',
        changeOrigin: true,
        rewrite: (pathStr) => pathStr.replace(/^\/api/, '')
      },
    },
  },
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      views: path.resolve(__dirname, './src/views'),
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      less: path.resolve(__dirname, "./src/less"),
      assets: path.resolve(__dirname, "./src/assets"),
      com: path.resolve(__dirname, "./src/components"),
      store: path.resolve(__dirname, "./src/store"),
      mixins: path.resolve(__dirname, "./src/mixins")
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/assets/scss/reset.scss";
        @import "./src/assets/scss/mixin.scss";
        @import "./src/assets/scss/variable.scss";
        `// 添加公共样式
      }
    }
  }
})
