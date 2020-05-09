import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { UserOutlined, FileDoneOutlined, DesktopOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import store from 'store';
import { MenuProp } from './types';
import { Props } from '../../types';
import { setOpenKey, setSelectKey } from '../../actions';

const { SubMenu } = Menu;

interface MProps {
  defaultOpenKeys?: string[];
  defaultSelectedKeys?: string[];
}

const MenuComponent: React.FC<MenuProp & MProps & Props> = ({
  dispatch,
  menuArray,
  defaultOpenKeys,
  defaultSelectedKeys
}) => {
  // const defaultSelectedKeys: string[] = [];
  // const defaultOpenKeys: string[] = [];
  // useEffect(() => {
  //   console.log('keys: ', defaultOpenKeys, defaultSelectedKeys);
  // }, []);
  // useEffect(() => {
  //   console.log('keys: ', defaultOpenKeys, defaultSelectedKeys);
  // }, [defaultOpenKeys, defaultSelectedKeys]);

  const handleSelect = (e: any) => {
    dispatch(setSelectKey(e.key));
  }
  const handleChange = (keys: any) => {
    if (keys.length > 0) {
      const key = keys.pop();
      dispatch(setOpenKey(key));
      return;
    }
    if (keys.length === 0) {
      let key = defaultOpenKeys ? defaultOpenKeys[0] : '';
      dispatch(setOpenKey(''));
      return;
    }
  }
  const createSubArray = () => {
    const subMenuArray = [];
    for (const item of menuArray) {
      const { children, description, key, isdefaultOpenKey, role, icon } = item;
      const userRole = store.get('role') || 'student';
      if (userRole !== role) {
        continue;
      }
      const Icon = `<${icon} />`;

      // isdefaultOpenKey && defaultOpenKeys.push(key);
      const menuItems = children.map((item) => {
        // item.isdefaultSelectedKey && defaultSelectedKeys.push(item.key);
        return <Menu.Item key={item.key}><Link to={item.path}>{item.title}</Link></Menu.Item>
      });
      const subMenu = (
        <SubMenu
          key={key}
          title={
            <span>
              {/* <UserOutlined /> */}
              <FileDoneOutlined />
              {description}
            </span>
          }
        >
          {menuItems}
        </SubMenu>
      );
      subMenuArray.push(subMenu);
    }
    return subMenuArray;
  }

  return (
    <Menu
      mode="inline"
      // defaultOpenKeys={defaultOpenKeys}
      // defaultSelectedKeys={defaultSelectedKeys}
      // multiple
      openKeys={defaultOpenKeys}
      selectedKeys={defaultSelectedKeys}
      style={{ height: '100%', borderRight: 0 }}
      onOpenChange={handleChange}
      onSelect={handleSelect}
    >
      {createSubArray()}
    </Menu>
  )
}

const mapStateToProps = (state: any) => {
  return {
    defaultOpenKeys: state.user.defaultOpenKeys,
    defaultSelectedKeys: state.user.defaultSelectedKeys
  }
}
export const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);