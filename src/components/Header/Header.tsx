import React from 'react';
import { Layout, Avatar, Typography, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import store from 'store';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Props } from '../../types';
import { setIsLogin } from '../../actions/user-action';
import './Header.less';

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent: React.FC<Props> = ({ dispatch }) => {
  const history = useHistory();
  const onClick = (e: any) => {
    dispatch(setIsLogin(false));
    // console.log('e: ', e);
    store.set('name', '');
    store.set('token', '');
    store.set('role', '');
    history.replace('/login');
  }
  
  const menu = (
    <Menu >
      <Menu.Item key="1"><Link to='/home/user-info'>个人中心</Link></Menu.Item>
      <Menu.Item key="2" onClick={onClick}>退出登录</Menu.Item>
    </Menu>
  );
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

const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(null, mapDispatchToProps)(HeaderComponent);