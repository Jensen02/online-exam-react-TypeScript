import React, { useEffect } from 'react';
import { Table, Avatar, Tooltip } from 'antd';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ColumnProps } from 'antd/es/table';
import { UserOutlined } from '@ant-design/icons';
import { DropdownOption } from '../../components';
import { Props } from '../../types';
import { IStudent } from '../../reducers/class-manage';
import { deleteStudentA, getStudentListA } from '../../actions/class-manage-action';
import './StudentList.less';

interface IProps {
  studentList: IStudent[]
}

const StudentList: React.FC<IProps & Props> = ({
  dispatch,
  studentList
}) => {
  const { id } = useParams();
  // useEffect(() => dispatch(getStudentListA(id)), []);
  const onClick = (record: any) => {
    console.log('push: ', record);
  }
  const handleClick = (key: number, record: any) => {
    console.log('key: ', key, 'record: ', record);
    dispatch(deleteStudentA(id, record.userName));
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
          option={[{title: '删除', key: 1}]}
          handleClick={handleClick}
        />
      )
    }
  ]

  return (
    <div className='student-list'>
      <Table
        bordered
        columns={columns}
        dataSource={studentList}
      />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    studentList: state.classManage.studentList
  };
}
const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);