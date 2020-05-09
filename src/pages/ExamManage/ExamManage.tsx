import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Table, Tooltip } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { DropdownOption } from '../../components';
import { Props } from '../../types';
import { getExamListA, deleteExamA } from '../../actions/class-manage-action';
import { IExam } from '../../reducers/class-manage';
import './ExamManage.less';

interface IProps {
  examList: IExam[]
}

const ExamManage: React.FC<Props & IProps> = ({
  dispatch,
  examList
}) => {
  const { id } = useParams();
  useEffect(() => {
    dispatch(getExamListA(id));
  }, []);
  const handleClick = (key: number, record: any) => {
    if (key === 1) {
      dispatch(deleteExamA(id, record.examId));
    }
  }
  const columns: ColumnProps<IExam>[] = [
    {
      title: '试卷科目',
      ellipsis: true,
      dataIndex: 'examSubject',
      key: 'examSubject',
    },
    {
      title: '试卷名称',
      ellipsis: true,
      dataIndex: 'examName',
      key: 'examName',
    },
    {
      title: '考试时长',
      dataIndex: 'testDuration',
      key: 'testDuration',
    },
    {
      title: '题目数量',
      width: 100,
      dataIndex: 'questionCount',
      key: 'questionCount',
    },
    {
      title: '开始时间',
      ellipsis: true,
      dataIndex: 'begin',
      key: 'begin',
    },
    {
      title: '操作',
      key: 'operation',
      width: 120,
      fixed: 'right',
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
    <div className='exam-manage'>
      <Table
        bordered
        columns={columns}
        dataSource={examList}
      />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    examList: state.classManage.examList
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamManage);