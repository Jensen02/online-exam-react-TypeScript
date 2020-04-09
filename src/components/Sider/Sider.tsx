import React from 'react';
import { Layout } from 'antd';
import MenuComponent from '../Menu/Menu';
import { MenuProp } from '../Menu/types';
import './Sider.less';

const { Sider } = Layout;

const SiderComponent: React.FC<MenuProp> = ({ menuArray }) => {
  return (
    <Sider
      style={{
        width: '200px',
        overflowY: 'auto',
        height: '100vh',
      }}
      className='site-layout-background'
    >
      <MenuComponent
        menuArray={menuArray}
      />
    </Sider>
  )
}

export default React.memo(SiderComponent);