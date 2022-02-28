export default [
  {
    path: '/user',
    title: "用户",
    redirect: '/user/overview'
  },
  {
    path: '/user',
    title: "用户",
    component: '@/pages/user/User',
    routes: [
      {
        path: 'overview',
        title: "用户总览",
        component: '@/pages/user/userOverview/userOverview'
      },
      {
        path: 'list',
        title: "用户列表",
        component: '@/pages/user/userList/UserList'
      },
      {
        path: "*",
        title: "用户",
        hide: true,
        redirect: '/user'
      }
    ]
  },
]
