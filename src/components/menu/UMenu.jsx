import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "./UMenu.scss";
import {Menu} from 'antd';
import {
  LeftOutlined,
} from '@ant-design/icons';

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
        <div className={'menu-title'}>{props.title}</div>
        <Menu mode="inline">
          {props.menuList.map((item, index) => {
            if (!item.hide) {
              return<Menu.Item key={index}>
                  <NavLink className={'menu-link'} to={item.path}>
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
