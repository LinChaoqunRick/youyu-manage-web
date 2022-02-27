import React from 'react';
import {NavLink, Link} from "react-router-dom";
import {Menu, Dropdown} from 'antd';
import {CaretDownOutlined} from '@ant-design/icons';
import './navigation.scss';

import ThemeSwitch from "../utils/ThemeSwitch";

const system = (
  <Menu className={'system-menu'}>
    <Menu.Item>
      <div>
        更新日志
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        公告
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        走马灯
      </div>
    </Menu.Item>
  </Menu>
);

const personal = (
  <Menu className={'personal-menu'}>
    <Menu.Item>
      <div>
        我的信息
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        账号设置
      </div>
    </Menu.Item>
    <Menu.Item className={'separator'}>
      <div>
        修改密码
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        帮助
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        退出
      </div>
    </Menu.Item>
  </Menu>
);

class Navigation extends React.Component {

  render() {

    return (
      <div className={'header-container'}>
        <div className={'header-body'}>
          <div className={'system-name'}><Link to='/home'>有语 · 管理系统</Link></div>
          <div className={'menu'}>
            <NavLink to='/home' className={'menu-item'}>
              <div className={'item-content'}>首页</div>
            </NavLink>
            <NavLink to='/blog' className={'menu-item'}>
              <div className={'item-content'}>博客</div>
            </NavLink>
            <NavLink to='/user' className={'menu-item'}>
              <div className={'item-content'}>用户</div>
            </NavLink>
            <div className={'menu-item'}>
              <div className={'item-content'}>问答</div>
            </div>
            <div className={'menu-item'}>
              <div className={'item-content'}>资源</div>
            </div>
            <div className={'menu-item'}>
              <Dropdown overlay={system} className={'item-content'} placement="bottomCenter">
                <div><span>系统</span><CaretDownOutlined/></div>
              </Dropdown>
            </div>
          </div>
          <div className={'system-theme'}>
            <ThemeSwitch/>
          </div>
          <div className={'user-container'}>
            <img className={'avatar'}
                 src='https://youyu-source.oss-cn-beijing.aliyuncs.com/avatar/10000/20210203110431mario.jpg'
                 alt="avatar"/>
            <Dropdown overlay={personal} placement="bottomCenter">
              <div className={'nickname'}>奇妙能力</div>
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
