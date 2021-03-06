import React from 'react';
import { Modal, Form, Input, Button, Typography  } from 'antd';

const { Title } = Typography;

interface IProps {
  visible: boolean;
  onCancel: () => void;
  // onCreate: (classId: string) => void;
  onQuery: (querv: any) => void;
}

const QueryModal: React.FC<IProps> = ({
  visible,
  onCancel,
  // onCreate,
  onQuery
}) => {
  const [form] = Form.useForm();
  // const onOk = () => {
  //   if (!isSuccess) {
  //     console.log('id: ', classInfo[0].classId, classInfo);
  //     onCreate(classInfo[0].classId);
  //   }
  // }
  // const queryClass = () => {
  //   form
  //     .validateFields()
  //     .then(values => {
  //       form.resetFields();
  //       console.log('val: ', values);
  //       onQuery(values);
  //     })
  //     .catch(info => {
  //       console.log('Validate Failed:', info);
  //     });
  // }
  return (
    <Modal
      visible={visible}
      title='查询班级'
      okText='查询'
      cancelText='取消'
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            console.log('val: ', values);
            onQuery(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
      onCancel={onCancel}
      // footer={[
      //   <Button key="back" onClick={onCancel}>
      //     取消
      //   </Button>,
      //   <Button key="submit" type="primary" disabled={isSuccess} onClick={onOk}>
      //     确定
      //   </Button>
      // ]}
    >
      <Form
        form={form}
        name="form_in_modal"
        labelCol={{span: 6}}
        wrapperCol={{span: 16}}
      >
        <Form.Item
          name="school"
          label='学校名称'
          rules={[{ required: true, message: '请输入学校名称!' }]}
        >
          <Input placeholder='学校名称' />
        </Form.Item>
        <Form.Item
          name="classNo"
          label='班级号'
          rules={[{ required: true, message: '请输入6为数字班级号', pattern: /\d{6}/, max: 6 }]}
        >
          <Input placeholder='班级号' />
        </Form.Item>
          {/* <Button
            type="primary"
            style={{position: 'absolute', top: 0, right: 0}}
            onClick={queryClass}
          >
            查询
          </Button> */}
      </Form>
      {/* <Title level={4} style={{position: 'relative', top: -10}}>{classInfo.className}</Title> */}
    </Modal>
  );
}

export default QueryModal;