import React, {useState} from 'react';
import './LoginPanel.scss';
import { history } from 'umi';
import http from "../../network/https";
import {Form, Input, Button, Checkbox, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import Cookies from 'js-cookie';
import {Api} from "../../network/apis";

const toRegister = () => {
  message.info('暂不支持注册')
}

function LoginPanel(props) {
  const [loading, setLoading] = useState(false);

  async function loginSubmit(values) {
    setLoading(true);
    http.post(Api.getLogin, values).then(res => {
      if (res) {
        message.success('登录成功');
        Cookies.set("token", "666666", {expires: 7});
        history.replace('/home');
      } else {
        message.error('账号或密码错误');
        setLoading(false);
      }
    }).catch(e => {
      setLoading(false);
      console.log(e)
    })
  }

  return <div className={'login-panel-container'}>
    <div>
      <img className={'system-logo'}
           src={'https://youyu-source.oss-cn-beijing.aliyuncs.com/youyu/login/logo512.png'} alt={'system-logo'}/>
    </div>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{remember: true}}
      onFinish={loginSubmit}
    >
      <Form.Item
        name="username"
        rules={[{required: true, message: '请输入用户名!'}]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{required: true, message: '请输入密码!'}]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon"/>}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住账号</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/#">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType='submit' loading={loading}
                className="login-form-button">
          登录
        </Button>
        或者 <a href='/#' onClick={toRegister}>去注册!</a>
      </Form.Item>
    </Form>
  </div>

}

export default LoginPanel
