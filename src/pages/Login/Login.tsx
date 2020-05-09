import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Radio, Typography } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import store from 'store';
import { Props } from '../../types';
import { loginA } from '../../actions/user-action';
import './Login.less';
import { IProps } from 'src/types/user-type';

const { Title } = Typography;
const formItemWrapper = {
  wrapperCol: { span: 12, offset: 0 }
}

interface IIProps {
  isLogin: boolean;
  role: string;
}

const Login: React.FC<Props & IIProps> = ({ dispatch, isLogin, role }) => {
  const history = useHistory();
  const onFinish = (values: any) => {
    const {username, password, role} = values;
    dispatch(loginA(password, username, role));
  };
  useEffect(() => {
    if (isLogin) {
      store.set('role', role)
      if (role === 'teacher') {
        history.replace('/home/teacher/class-manage');
      }
      if (role === 'student') {
        history.replace('/home/student/class-list');
      }
    }
  }, [isLogin]);

  return (
    <div className='login-bg'>
      <div className='info-bg login'>
        <div className='login-header'>
          <Title style={{ color: 'rbga(0, 0, 0, 0.85)' }} level={3}>在线考试系统</Title>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ role: 'student' }}
          onFinish={onFinish}
        >
          <Form.Item
            hasFeedback
            name="username"
            className='form-item-layout'
            rules={[{ required: true, message: '用户名为空或用户名错误' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            hasFeedback
            name="password"
            className='form-item-layout'
            rules={[{ required: true, message: '密码不能为空！' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            name='role'
            rules={[{ required: true, message: '请选择用户登录权限' }]}
          >
            <Radio.Group>
              <Radio checked value='student'>学生</Radio>
              <Radio value='teacher'>老师</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type='link'>忘记密码？</Button>
            <Button type='link'><Link to='/registry'>注册账号</Link></Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLogin: state.user.isLogin,
    role: state.user.role
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);