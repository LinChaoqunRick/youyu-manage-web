import {useNavigate, useLocation} from "react-router-dom";
import {Outlet} from 'react-router-dom';
import {checkRouterAuth} from './index';
import React, {useEffect} from 'react';
import Cookie from 'js-cookie';

const RouterBeforeEach = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    let obj = checkRouterAuth(location.pathname)
    let token = Cookie.get("token");
    if (!token) {
      document.title = "登录";
      navigate('/login');
    } else {
      if (obj && obj.auth) {
        if (obj.path === '/') {
          navigate('/home');
        }
        obj.title && (document.title = obj.title);
      } else {
        navigate('/home');
      }
    }
  }, )
  return <Outlet/>
}

export default RouterBeforeEach
