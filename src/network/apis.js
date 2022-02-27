const ApiBase = '/plat';
const FrontApiBase = '/api';

const Api = {
  getLogin: ApiBase + "/login/getLogin",

  // 博客
  getBlogList: ApiBase + "/blog/list"
}


const FrontApi = {
  getBlogNewest: FrontApiBase + "/home/newest"
}


export {Api, FrontApi}
