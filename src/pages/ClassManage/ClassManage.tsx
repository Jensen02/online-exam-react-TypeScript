import React, { useEffect } from 'react';
import { Button, Tooltip, Table } from 'antd';
import { connect } from 'react-redux';
import { ColumnProps } from 'antd/es/table';
import { cloneDeep } from 'lodash';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { DropdownOption } from '../../components';
import CreateClassModal from './Modal';
import { Props } from '../../types';
import { setOpenKey, setSelectKey } from '../../actions';
import {
  setModalVisible,
  createClassA,
  setEditClassInfo,
  setIsEdit,
  updateClassInfoA,
  getClassListA
} from '../../actions/class-manage-action';
import './ClassManage.less';
import { Link } from 'react-router-dom';

interface IClass {
  key: number;
  classNo: string;
  className: string;
  school: string;
  foundTime: string;
}
interface IProps {
  visible: boolean;
  classList: any[];
  editClass: any;
  isEdit: boolean;
}

const ClassManage: React.FC<Props & IProps> = ({
  dispatch,
  visible,
  classList,
  editClass,
  isEdit
}) => {
  const history = useHistory();
  useEffect(() => {
    dispatch(setOpenKey('3'));
    dispatch(setSelectKey('3_1'));
    dispatch(getClassListA())
    console.log(visible);
  }, []);
  const onCreate = (value: any) => {
    console.log('create: ', value);
    dispatch(setModalVisible(false));
    !isEdit ? dispatch(createClassA(value)) : dispatch(updateClassInfoA(value));
  }
  const handleClick = (key: number, record: any) => {
    console.log('key: ', key, 'record: ', record);
    if (key === 2) {
      dispatch(setIsEdit(true));
      dispatch(setEditClassInfo(record));
      dispatch(setModalVisible(true));
    }
    if (key === 3) {
      history.push(`/home/teacher/create-exam/${record.classId}`)
    }
  }
  // const onClick = (record: any) => {
  //   console.log('push: ', record);
  // }
  
  const columns: ColumnProps<IClass>[] = [
    {
      title: '班级号',
      width: 120,
      dataIndex: 'classNo',
      key: 'classNo'
    },
    {
      title: '班级名称',
      dataIndex: 'className',
      key: 'className',
      render: (text, record: any) => (
        <Tooltip title='查看该班级下的学生信息列表'>
          <Link
            to={`/home/teacher/student-list/${record.classId}`}
          >
            {text}
          </Link>
        </Tooltip>
      )
    },
    { title: '学校',
      dataIndex: 'school',
      key: 'school'
    },
    { title: '创建时间',
      dataIndex: 'foundTime',
      key: 'foundTime'
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 120,
      render: (text, record) => (
        <DropdownOption
          record={record}
          option={[{title: '删除', key: 1}, {title: '编辑', key: 2}, {title: '组卷', key: 3}]}
          handleClick={handleClick}
        />
      )
    }
  ];

  return (
    <div className='class-manage'>
      <div className='create-manage-class'>
        <Tooltip title='创建班级'>
          <Button
            type='primary'
            icon={<PlusCircleOutlined />}
            onClick={() => dispatch(setModalVisible(true))}
          >
            创建班级
          </Button>
        </Tooltip>
      </div>
      <div className='class-manage-list'>
        <Table
          bordered
          columns={columns}
          dataSource={classList}
        />
      </div>
      <CreateClassModal
        visible={visible}
        onCancel={() => {
          dispatch(setModalVisible(false))
          dispatch(setIsEdit(false))
          dispatch(setEditClassInfo({}))
        }}
        onCreate={onCreate}
        isEdit={isEdit}
        classInfo={cloneDeep(editClass)}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    visible: state.classManage.visible,
    classList: state.classManage.classList,
    editClass: state.classManage.editClass,
    isEdit: state.classManage.isEdit
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassManage);