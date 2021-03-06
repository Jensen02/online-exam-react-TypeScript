import React, { useEffect } from 'react';
import { Tooltip, Button, Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { connect } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { DropdownOption } from '../../components';
import QueryModal from './components/QueryModal';
import AddModal from './components/AddModal';
import { Props } from '../../types';
import { IClassInfo } from '../../reducers/class-manage';
import { setOpenKey, setSelectKey } from '../../actions';
import {
  getClassListStudentA,
  setIsVisible,
  queryClassA,
  applicationAddClassA,
  exitClassA,
  setSuccess
} from '../../actions/student-action';
import './ClassList.less';

interface IClass {
  key: string;
  classNo: string;
  className: string;
  school: string;
  foundTime: string;
}
interface IProps {
  classList: IClassInfo[];
  visible: boolean;
  classInfo: any;
  querySuccess: boolean;
}

const ClassList: React.FC<Props & IProps> = ({
  dispatch,
  classList,
  visible,
  classInfo,
  querySuccess
}) => {
  useEffect(() => {
    dispatch(getClassListStudentA());
    dispatch(setOpenKey('2'));
    dispatch(setSelectKey('2_1'));
  }, []);
  const handleClick = (key: number, record: any) => {
    if (key === 1) {
      dispatch(exitClassA(record.classId));
    }
  }
  const onCreate = (classId: string) => {
    console.log('classid: ', classId)
    dispatch(applicationAddClassA(classId));
    dispatch(setSuccess(false));
  }
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
        <Tooltip title='查看该班级下的考试列表'>
          <Link
            to={`/home/teacher/exam-manage/${record.classId}`}
          >
            {text}
          </Link>
        </Tooltip>
      )
    },
    {
      title: '学校',
      dataIndex: 'school',
      key: 'school'
    },
    {
      title: '创建时间',
      dataIndex: 'foundTime',
      key: 'foundTime',
      render: (text: string) => moment(text).format('YYYY-MM-DD HH:MM:ss')
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 120,
      render: (text, record) => (
        <DropdownOption
          record={record}
          option={[{ title: '退出班级', key: 1 }]}
          handleClick={handleClick}
        />
      )
    }
  ];
  return (
    <div className='class-list'>
      <div className='add-class'>
        <Tooltip title='加入班级'>
          <Button
            type='primary'
            icon={<PlusCircleOutlined />}
            onClick={() => dispatch(setIsVisible(true))}
          >
            加入班级
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
      <QueryModal
        visible={visible}
        onCancel={() => dispatch(setIsVisible(false))}
        // onCreate={onCreate}
        onQuery={(queryInfo: any) => {
          dispatch(queryClassA(queryInfo))
          dispatch(setIsVisible(false))
        }}
      />
      <AddModal 
        visible={querySuccess}
        classInfo={classInfo}
        onOk={onCreate}
        onCancel={() => dispatch(setSuccess(false))}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    visible: state.student.visible,
    classList: state.student.classList,
    classInfo: state.student.classInfo,
    querySuccess: state.student.querySuccess
  };
}
const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassList);