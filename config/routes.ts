import home from './route/home';
import blog from './route/blog';
import user from './route/user';
import system from "./route/system";

export default [
  {
    path: '/login',
    component: '@/pages/login/Login',
    wrappers: [
      '@/wrappers/loginAuth',
    ],
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: '@/pages/main/Main',
    wrappers: [
      '@/wrappers/auth',
    ],
    routes: [
      ...home,
      ...blog,
      ...user,
      ...system
    ]
  },
]
