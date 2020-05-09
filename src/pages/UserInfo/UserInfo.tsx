import React from 'react';
import { Form, Input, Button, Upload } from 'antd';
import store from 'store';
import { connect } from 'react-redux';
import './UserInfo.less';
import { UploadOutlined } from '@ant-design/icons';
import { Props } from '../../types';
import { addUserInfoA } from '../../actions/user-action';

const UserInfo: React.FC<Props> = ({ dispatch }) => {
  let file: File;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    file = e.file;
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const onFinish = (values: any) => {
    console.log('values: ', values);
    const userName = store.get('name');
    const { teacherRealname, school, major, idNo, introduce } = values;
    const userInfo = new FormData();
    userInfo.append('asdad', 'asdasd');
    userInfo.append('introduce', introduce);
    userInfo.append('file', file);
    userInfo.append('teacherRealname', teacherRealname);
    userInfo.append('school', school);
    userInfo.append('major', major);
    userInfo.append('idNo', idNo);
    userInfo.append('userName', userName);
    dispatch(addUserInfoA(userInfo));
  };
  return (
    <div className='user-info'>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Form.Item
          name="teacherRealname"
          label="姓名"
          hasFeedback
          rules={[{ required: true, message: '请输入姓名!' }]}
        >
          <Input placeholder="姓名" />
        </Form.Item>
        <Form.Item
          name="school"
          label="学校"
          hasFeedback
          rules={[{ required: true, message: '请输入学校!' }]}
        >
          <Input placeholder="学校" />
        </Form.Item>
        <Form.Item
          name="major"
          label="专业"
          hasFeedback
          rules={[{ required: true, message: '请输入专业!' }]}
        >
          <Input placeholder="专业" />
        </Form.Item>
        <Form.Item
          name="idNo"
          label="身份证号码"
          hasFeedback
          rules={[{
            required: true,
            pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,
            message: '请输入合适的身份证号码!' }]}
        >
          <Input placeholder="身份证号码" />
        </Form.Item>
        <Form.Item
          name="file"
          label="头像上传"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{required: true, message: '请上传个人头像'}]}
        >
          <Upload name="logo" style={{width: '100%'}} beforeUpload={() => {return false;}} listType="picture">
            <Button>
              <UploadOutlined />上传个人头像
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="introduce"
          label="个人简介"
          hasFeedback
          rules={[{ required: true, message: '请输入个人简介!' }]}
        >
          <Input placeholder="个人简介" type='text' />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(null, mapDispatchToProps)(UserInfo);