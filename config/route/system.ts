export default [
  {
    path: '/system',
    title: "系统",
    redirect: '/system/overview'
  },
  {
    path: '/system',
    title: "系统",
    component: '@/pages/system/System',
    routes: [
      {
        path: 'overview',
        title: "系统总览",
        component: '@/pages/system/systemOverview/SystemOverview'
      },
      {
        path: 'notice',
        title: "公告",
        component: '@/pages/system/notice/Notice'
      },
      {
        path: 'updateLog',
        title: "更新日志",
        component: '@/pages/system/updateLog/UpdateLog'
      },
      {
        path: 'carousel',
        title: "走马灯",
        component: '@/pages/system/carousel/Carousel'
      },
      {
        path: "*",
        title: "系统",
        hide: true,
        redirect: '/system'
      }
    ]
  },
]
