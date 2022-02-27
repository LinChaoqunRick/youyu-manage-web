import {useRoutes, Navigate} from "react-router-dom";
import React, {Suspense, lazy} from 'react'

const routes = [
  {
    path: '/',
    auth: true,
    component: lazy(() => import('./../../views/layout/Layout')),
    children: [
      {
        path: '/',
        auth: true,
        component: lazy(() => import('./../../views/main/Main')),
        children: [
          {
            path: '/home',
            title: "首页",
            auth: true,
            component: lazy(() => import('./../../views/home/Home'))
          },
          {
            path: '/blog',
            title: "博客",
            auth: true,
            component: lazy(() => import('./../../views/blog/Blog')),
            children: [
              {
                path: '/blog/overview',
                title: "博客总览",
                auth: true,
                component: lazy(() => import('./../../views/blog/blogOverview/BlogOverview'))
              },
              {
                path: '/blog/*',
                auth: true,
                render: () => (
                  <Navigate to="/blog/overview"/>
                )
              }
            ]
          },
          {
            path: '/user',
            title: "用户",
            auth: true,
            component: lazy(() => import('./../../views/user/User'))
          },
        ]
      },
      {
        path: '/login',
        title: "登录",
        auth: false,
        component: lazy(() => import('./../../views/login/Login'))
      },
      {
        path: '/*',
        auth: false,
        component: lazy(() => import('./../../views/login/Login'))
      }
    ]
  },

]

//根据路径获取路由
const checkAuth = (routers: any, path: String) => {
  for (const data of routers) {
    if (data.path === path) return data
    if (data.children) {
      const res: any = checkAuth(data.children, path)
      if (res) return res
    }
  }
  return null
}

// 路由处理方式
const generateRouter = (routers: any) => {
  return routers.map((item: any) => {
    if (item.children) {
      item.children = generateRouter(item.children)
    }
    item.element = <Suspense fallback={
      <div>
        {/*加载中...*/}
      </div>
    }>
      {/* 把懒加载的异步路由变成组件装载进去 */}
      <item.component/>
    </Suspense>
    return item
  })
}

const Router = () => useRoutes(generateRouter(routes))
const checkRouterAuth = (path: String) => {
  let auth = null
  auth = checkAuth(routes, path)
  return auth
}
export {Router, checkRouterAuth}
