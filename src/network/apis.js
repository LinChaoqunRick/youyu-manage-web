const ApiBase = '/plat';
const FrontApiBase = '/api';

const Api = {
  // 登录
  getLogin: ApiBase + "/login/getLogin",

  // 博客
  getBlogList: ApiBase + "/blog/list",

  // 用户
  getUserList: ApiBase + '/user/list'
}


const FrontApi = {
  getBlogNewest: FrontApiBase + "/home/newest"
}


export {Api, FrontApi}
