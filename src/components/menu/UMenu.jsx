import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "./UMenu.scss";
import {Menu, Button} from 'antd';
import {
  AppstoreOutlined,
  LeftOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const {SubMenu} = Menu;

function UMenu(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={['u-menu-container', collapsed ? 'u-menu-collapse' : ''].join(' ')}>
      <div className={['u-menu']}>
        {/*<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>*/}
        {/*  {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}*/}
        {/*</Button>*/}
        <div className={'collapse-button'} onClick={toggleCollapsed}>
          <LeftOutlined/>
        </div>
        <div className={'menu-title'}>博客</div>
        <Menu mode="inline">
          {props.menuList.map((item, index) => {
            if (item.path !== '*') {
              return<Menu.Item key={index}>
                  <NavLink to={item.path}>
                  {item.title}
                  </NavLink>
                </Menu.Item>
            }
          })}
        </Menu>
      </div>
    </div>
  );
}

export default UMenu;
