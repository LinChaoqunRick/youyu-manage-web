import {defineConfig} from 'umi';
import route from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: route,
  // 代理
  proxy: {
    // 此项目后端配置
    '/plat': {
      'target': 'http://localhost:8090',
      'changeOrigin': true,
      'pathRewrite': {
        '^/plat': ''
      },
    },
    // 有语前台接口地址
    '/api': {
      'target': 'https://www.youyul.com/api',
      'changeOrigin': true,
      'pathRewrite': {
        '^/api': ''
      },
    },
  },
  // 插件
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  // 配置 external
  externals: {
    // 'react': 'window.React',
    // 'react-dom': 'window.ReactDOM',
    // 'antd': 'window.Antd',
    // 'axios': 'window.Axios',
    // 'echart': 'window.Echart'
  },

  // 引入被 external 库的 scripts
  // 区分 development 和 production，使用不同的产物
  scripts: process.env.NODE_ENV === 'development' ? [
    'https://cdn.jsdelivr.net/npm/react@17.0.0/index.js',
    'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/index.js',
    'https://cdn.jsdelivr.net/npm/antd@4.18.8/lib/index.min.js',
    'https://cdn.jsdelivr.net/npm/axios@0.26.0/index.js',
    'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.3.0/echarts.min.js'
  ] : [
    'https://cdn.jsdelivr.net/npm/react@17.0.0/index.min.js',
    'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/index.min.js',
    'https://cdn.jsdelivr.net/npm/antd@4.18.8/lib/index.min.js',
    'https://cdn.jsdelivr.net/npm/axios@0.26.0/dist/axios.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.3.0/echarts.min.js'
  ],
  dynamicImport: {},
  fastRefresh: {},
  "sass": {}, ///配这里
});
