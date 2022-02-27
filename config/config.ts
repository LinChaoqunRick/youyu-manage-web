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

  fastRefresh: {},
  "sass": {}, ///配这里
});
