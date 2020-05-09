import React, { useEffect } from 'react';
import { Table, Tooltip, Avatar, Select } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { DropdownOption } from '../../components';
import { Props } from '../../types';
import { IStudent } from '../../reducers/class-manage';
import {
  getStudentListWithApproveA,
  approveStudentA,
  setSlectedClassId,
  getClassListA
} from '../../actions/class-manage-action';
import { setOpenKey, setSelectKey } from '../../actions';

const { Option } = Select;

interface IProps {
  studentApprove: IStudent[];
  selectedClassId: string;
  classIdList: any[];
}

const StudentApprove: React.FC<Props & IProps> = ({
  dispatch,
  studentApprove,
  classIdList,
  selectedClassId
}) => {
  useEffect(() => {
    dispatch(getClassListA());
    dispatch(setOpenKey('3'));
    dispatch(setSelectKey('3_2'));
  }, []);
  useEffect(() => {
    if (classIdList.length) {
      dispatch(getStudentListWithApproveA(selectedClassId));
    }
  }, [classIdList]);
  const handleClick = (key: number, record: any) => {
    const state = key === 1 ? '1' : '0';
    dispatch(approveStudentA({
      student: record.userName,
      classId: selectedClassId,
      state
    }));
  }
  const columns: ColumnProps<IStudent>[] = [
    {
      title: '头像',
      width: 60,
      dataIndex: 'stuHeadPic',
      key: 'stuHeadPic',
      render: (text: any, record: any) => (
        <Tooltip title='查看学生个人信息'>
          <Avatar size="large" src={record.stuHeadPic} icon={<UserOutlined />} />
        </Tooltip>
      )
    },
    {
      title: '姓名',
      width: 60,
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '操作',
      key: 'operation',
      width: 120,
      render: (text: any, record: any) => (
        <DropdownOption
          record={record}
          option={[{title: '同意', key: 1}, {title: '拒绝', key: 2}]}
          handleClick={handleClick}
        />
      )
    }
  ]

  return (
    <div className='student-approve' style={{padding: '5px 10px'}}>
      <div className='select_class' style={{width: 300, marginBottom: 10}}>
        <Select
          style={{width: '100%'}}
          onChange={(val: string) => {
            dispatch(getStudentListWithApproveA(val))
            dispatch(setSlectedClassId(val))
          }}
        >
          {
            classIdList.length && classIdList.map((item) => {
              const { classId, className } = item;
              return (<Option value={classId} key={classId}>{className}</Option>);
            })
          }
        </Select>
      </div>
      <Table
        bordered
        columns={columns}
        dataSource={studentApprove}
      />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    studentApprove: state.classManage.studentApprove,
    classIdList: state.classManage.classIdList,
    selectedClassId: state.classManage.selectedClassId
  };
}
const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentApprove);