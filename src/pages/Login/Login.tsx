import React from 'react';
// import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox, Radio, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.less';

const { Title } = Typography;
const formItemWrapper = {
  wrapperCol: { span: 12, offset: 0 }
}

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='login-bg'>
      <div className='info-bg login'>
        <div className='login-header'>
          <Title style={{ color: 'rbga(0, 0, 0, 0.85)' }} level={3}>在线考试系统</Title>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            hasFeedback
            name="username"
            className='form-item-layout'
            rules={[{ required: true, message: '用户名为空或用户名错误' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号 / 学号 / 学工号" />
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
          <Form.Item
            { ...formItemWrapper }
          >
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住账号</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type='link'>忘记密码？</Button>
            <Button type='link'>注册账号</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;