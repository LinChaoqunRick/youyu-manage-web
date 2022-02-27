import home from './route/home';
import blog from './route/blog';

export default [
  {path: '/login', component: '@/pages/login/Login'},
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: '@/pages/main/Main',
    routes: [...home, ...blog]
  },
]
