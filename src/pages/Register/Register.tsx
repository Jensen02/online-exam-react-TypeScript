import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
  Typography,
  Radio,
  message
} from 'antd';
import {
  setIsModal,
  sendCode,
} from '../../actions';
import { userRegistryA } from '../../actions/user-action';
import { Props } from '../../types';
import './Register.less';

const { Option } = Select;
const { Title } = Typography;

interface RProps{
  visible: boolean;
  school: string;
}

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

const Register: React.FC<Props & RProps> = ({ dispatch, visible, school }) => {
  const [form] = Form.useForm();
  const [isClick, setIsClick] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count > 0) {
        setCount((c: number) => c - 1);
      } else {
        setIsClick(true)
      }
    }, 1000);
  }, [count]);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    const {password, nickname, role, captcha, phone} = values;
    const user = {
      userName: nickname,
      tel: phone,
      psw: password,
      identity: role
    };
    dispatch(userRegistryA(captcha, user));
  };

  const handleClick = () => {
    const userName: string = form.getFieldValue('nickname');
    const tel: string = form.getFieldValue('phone');
    if (!userName || !tel) {
      message.error('请输入用户名和手机号码');
      return;
    }
    dispatch(sendCode(tel, userName));
    setIsClick(false);
    setCount(60);
  }

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setIsModal(false);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  const onCurrencyChange = (newCurrency: any) => {
    console.log('val: ', newCurrency);
  };

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
            label='用户名'
            rules={[{ required: true, message: '用户名不能为空!', whitespace: true }]}
          >
            <Input placeholder='用户名' />
          </Form.Item>
          <Form.Item
            name="role"
            label="角色"
            hasFeedback
            rules={[{ required: true, message: '请选择用户角色' }]}
          >
            <Row>
              <Col>
                <Radio.Group>
                  <Radio value="学生">学生</Radio>
                  <Radio value="老师">老师</Radio>
                </Radio.Group>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            hasFeedback
            name="phone"
            label="手机号码"
            rules={[{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入手机号码!' }]}
          >
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="手机验证码">
            <Row gutter={8} justify='space-between'>
              <Col span={12}>
                <Form.Item
                  hasFeedback
                  name="captcha"
                  noStyle
                  rules={[{ required: true, pattern: /^\d{4}$/, message: '手机验证码不能为空!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Button disabled={!isClick} type='primary' style={{ width: '115px' }} onClick={handleClick}>
                  {
                    isClick
                    ? '获取验证码'
                    : `${count >= 10 ? count : `0${count}`} s重新获取`
                  }
                </Button>
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

const mapStateToProps = (state: any) => {
  return {
    visible: state.user.isModal,
    school: state.user.school
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);