import React from 'react';
import { Modal, Result } from 'antd';
import { userInfo } from 'os';

interface IProps {
  visible: boolean;
  classInfo: any;
  onCancel: () => void;
  onOk: (classId: string) => void;
}

const AddModal: React.FC<IProps> = ({
  visible,
  classInfo,
  onCancel,
  onOk
}) => {
  return (
    <Modal
      title='加入班级'
      okText='加入'
      cancelText='取消'
      visible={visible}
      bodyStyle={{paddingTop: 0}}
      onCancel={onCancel}
      onOk={() => onOk(classInfo.classId)}
    >
      <Result
        status="success"
        title="查询成功!"
        style={{padding: '22px 32px'}}
      >
      </Result>
    </Modal>
  );
}

export default AddModal;