import React, { useEffect } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import moment from 'moment';

// interface Values {
//   school: string;
//   teacher: string;
//   className: string;
// }

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
            form.resetFields();
            const foundTime = moment().format('YYYY-MM-DD');
            const value = !isEdit
              ? Object.assign(values, {foundTime, inspect: false})
              : Object.assign(values, classInfo);
            onCreate(value);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        {...formItemLayout}
        initialValues={classInfo}
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
      </Form>
    </Modal>
  );
};

export default CreateClassModal;