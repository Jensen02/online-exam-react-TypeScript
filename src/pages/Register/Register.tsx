import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Tooltip,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  Typography
} from 'antd';
import './Register.less';

const { Option } = Select;
const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 5,
    },
  },
};

const Register: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className='login-bg'>
      <div className='info-bg register'>
        <div className='login-header'>
          <Title style={{ color: 'rbga(0, 0, 0, 0.85)' }} level={3}>注册</Title>
        </div>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: '86',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="password"
            label="输入密码"
            rules={[
              {
                required: true,
                message: '请输入初始密码!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="再次输入密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请再次输入密码!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('两次输入密码不一致！');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            hasFeedback
            name="nickname"
            label={
              <span>
                用户名&nbsp;
                <Tooltip title="请输入学号或学工号作为用户名">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[{ required: true, message: '用户名不能为空!', whitespace: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            hasFeedback
            name="phone"
            label="手机号码"
            rules={[{ required: true, pattern: /^1[3456789]\d{9}$/, message: '请输入手机号码!' }]}
          >
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="手机验证码">
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[{ required: true, pattern: /^\d{6}$/, message: '手机验证码不能为空!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button>获取验证码</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              { validator:(_, value) => value ? Promise.resolve() : Promise.reject('请勾选该选项！') },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              我同意遵守在线考试系统相关协议
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;