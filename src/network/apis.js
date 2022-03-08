const ApiBase = '/plat';
const FrontApiBase = '/api';

const Api = {
  // 登录
  getLogin: ApiBase + "/login/getLogin",

  // 博客
  getBlogList: ApiBase + "/blog/list",

  // 用户
  getUserList: ApiBase + '/user/list',

  // 系统
  getUpdateLog: ApiBase + '/system/getUpdateLog',
  setUpdateLog: ApiBase + '/system/setUpdateLog'
}


const FrontApi = {
  getBlogNewest: FrontApiBase + "/home/newest",
  getUpdateLog: FrontApiBase + '/message/getUpdateLog'
}


export {Api, FrontApi}
