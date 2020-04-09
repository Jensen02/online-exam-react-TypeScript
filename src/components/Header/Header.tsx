import React from 'react';
import { Layout, Avatar, Typography, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Header.less';

const { Header } = Layout;
const { Title } = Typography;

const onClick = (e: any) => {
  console.log('e: ', e);
}

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">个人中心</Menu.Item>
    <Menu.Item key="2">退出登录</Menu.Item>
  </Menu>
);

const HeaderComponent = (props: any) => {
  return (
    <Header className='header'>
      <div className='user-name'>
        <Title level={4}>Jensen</Title>
      </div>
      <div className='user-avatar'>
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}

export default HeaderComponent;