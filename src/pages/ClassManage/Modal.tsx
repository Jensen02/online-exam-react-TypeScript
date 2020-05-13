import React, { useEffect } from 'react';
import { Button, Modal, Form, Input, Radio, Switch, Tooltip } from 'antd';
import moment from 'moment';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface CollectionCreateFormProps {
  visible: boolean;
  classInfo: any;
  isEdit: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
}

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  },
};

const CreateClassModal: React.FC<CollectionCreateFormProps> = ({
  visible,
  onCreate,
  onCancel,
  classInfo,
  isEdit
}) => {
  const [form] = Form.useForm();
  useEffect(() => form.resetFields(), [classInfo]);
  return (
    <Modal
      visible={visible}
      title={isEdit ? '更新班级信息' : '创建班级'}
      okText="确定"
      cancelText="取消"
      onCancel={() => {
        onCancel();
        // form.resetFields();
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            // form.resetFields();
            console.log('values: ', values);
            const foundTime = moment().format('YYYY-MM-DD');
            const value = !isEdit
              ? Object.assign(values, {foundTime})
              : Object.assign(classInfo, values, { foundTime });
              console.log('value: ', value);
            onCreate(value);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        {...formItemLayout}
        initialValues={{inspect: false, ...classInfo}}
        form={form}
        name="form_in_modal"
        
      >
        <Form.Item
          name="school"
          label="学校"
          rules={[{ required: true, message: '请输入学校名称!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="teacher"
          label="老师"
          rules={[{ required: true, message: '请输入老师姓名!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="className"
          label="班级名称"
          rules={[{ required: true, message: '请输入班级名称!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="inspect"
          label={
            <span>
            班级验证&nbsp;
            <Tooltip title="是否开启班级验证，默认关闭，开启后，学生加入班级时，需要班级管理者审批通过后方可加入!">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
          }
          required
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateClassModal;