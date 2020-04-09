import React from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MenuProp } from './types';

const { SubMenu } = Menu;

const MenuComponent: React.FC<MenuProp> = ({ menuArray }) => {
  const defaultSelectedKeys: string[] = [];
  const defaultOpenKeys: string[] = [];

  const subMenuArray = menuArray.map((item) => {
    const { children, description, key, isdefaultSelectedKey } = item;
    isdefaultSelectedKey && defaultSelectedKeys.push(key);
    const menuItems = children.map((item) => {
      item.isdefaultOpenKey && defaultOpenKeys.push(item.key);
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    });
    const subMenu = (
      <SubMenu
        key={key}
        title={
          <span>
            <UserOutlined />
            {description}
          </span>
        }
      >
        {menuItems}
      </SubMenu>
    );
    return subMenu;
  });

  return (
    <Menu
      mode="inline"
      defaultOpenKeys={defaultOpenKeys}
      defaultSelectedKeys={defaultSelectedKeys}
      style={{ height: '100%', borderRight: 0 }}
    >
      {subMenuArray}
    </Menu>
  )
}

export default React.memo(MenuComponent);