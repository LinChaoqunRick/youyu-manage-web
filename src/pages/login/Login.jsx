import React from 'react'
import LoginPanel from "../../components/login/LoginPanel";
import './Login.scss';
import Footer from "../../components/footer/footer";
import {BrowserRouter} from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className={'login-container'}>
        <div className={'system-name'}>有语 · 管理系统</div>
        <div className={'login-panel'}>
          <LoginPanel/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Login
