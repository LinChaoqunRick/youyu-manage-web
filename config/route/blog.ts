export default [
  {
    path: '/blog',
    title: "博客",
    redirect: '/blog/list'
  },
  {
    path: '/blog',
    title: "博客",
    component: '@/pages/blog/Blog',
    routes: [
      {
        path: 'overview',
        title: "博客总览",
        component: '@/pages/blog/blogOverview/blogOverview'
      },
      {
        path: 'list',
        title: "博客列表",
        component: '@/pages/blog/blogList/BlogList'
      },
      {
        path: "*",
        title: "博客",
        redirect: '/blog'
      }
    ]
  },
]
