import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../Header/Header';
import SiderComponent from '../Sider/Sider';
import { MenuProp } from '../Menu/types';
import './Layout.less';

const { Content } = Layout;

const LayoutComponent: React.FC<MenuProp> = ({ menuArray, children }) => {
  return (
    <Layout>
      <HeaderComponent />
      <Layout>
        <SiderComponent menuArray={menuArray} />
        <Layout
          style={{
            padding: '0 24px 24px',
            overflowY: 'auto',
            // height: '100vh'
          }}
        >
          {/* <Breadcrumb style={{ margin: '16px 0', textAlign: 'left' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              margin: 0,
              minHeight: 280,
            }}
          >
            { children }
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent;