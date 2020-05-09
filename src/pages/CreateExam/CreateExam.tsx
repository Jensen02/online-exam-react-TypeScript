import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import {Form, Select, InputNumber, Button, Input, TimePicker, DatePicker} from 'antd';
import { TopicCard } from '../../components';
import { Props } from '../../types';
import './CreateExam.less';
import { IProps } from 'src/types/user-type';
import { createExamA } from '../../actions/exam-action';

const { Option } = Select;

interface IPoprs {};

const CreateExam: React.FC<Props & IProps> = ({
  dispatch
}) => {
  const { id } = useParams();
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const onFinish = (values: any) => {
    console.log('values: ', values);
    const {admin, examName, examSubject, difficulty, testDuration, begin, redio, short, fill, judge } = values;
    
    const exam = {
      classId: id,
      examInfo: {
        admin,
        examName,
        examSubject,
        difficulty,
        visibility: 'public',
        examType: '试卷',
        testDuration: testDuration.format('HH:mm:ss'),
        begin: begin.format('YYYY-MM-DD HH:mm:ss')
      },
      hashMap: {
        选择: redio,
        填空: fill,
        判断: judge,
        简答: short
      }
    };
    console.log('val: ', exam);
    dispatch(createExamA(exam));
  };
  return (
    <div className='create-exam'>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Form.Item
          name="admin"
          label="老师"
          hasFeedback
          rules={[{ required: true, message: '请输入老师姓名!' }]}
        >
          <Input placeholder="老师姓名" />
        </Form.Item>
        <Form.Item
          name="examName"
          label="考试名称"
          hasFeedback
          rules={[{ required: true, message: '请输入考试名称!' }]}
        >
          <Input placeholder="考试名称" />
        </Form.Item>
        <Form.Item
          name="examSubject"
          label="试卷所属科目"
          rules={[{ required: true, message: '请选择试卷所属科目!' }]}
        >
          <Select placeholder="选择试卷所属科目">
            <Option value="java">java</Option>
            <Option value="python">python</Option>
            <Option value="javascript">javascript</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="difficulty"
          label="试卷难度"
          rules={[{ required: true, message: '请选择试卷难度!' }]}
        >
          <Select placeholder="选择试卷难度">
            <Option value="简单">简单</Option>
            <Option value="中等">中等</Option>
            <Option value="困难">困难</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="testDuration"
          label="考试时长"
          rules={[{ type: 'object', required: true, message: '请选择考试时长!' }]}
        >
          <TimePicker style={{width: '100%'}} placeholder='考试时长' />
        </Form.Item>
        <Form.Item
          name="begin"
          label="考试开始时间"
          rules={[{ type: 'object', required: true, message: '请选择考试开始时间!' }]}
          >
          <DatePicker
            style={{width: '100%'}}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            placeholder='考试开始时间'
          />
        </Form.Item>

        <Form.Item label="选择题">
          <Form.Item name="redio" noStyle rules={[{ required: true, message: '请输入选择题数量!' }]}>
            <InputNumber style={{width: '100%'}} min={0} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="填空题">
          <Form.Item name="fill" noStyle rules={[{ required: true, message: '请输入填空题数量!' }]}>
            <InputNumber style={{width: '100%'}} min={0} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="判断题">
          <Form.Item name="judge" noStyle rules={[{ required: true, message: '请输入判断题数量!' }]}>
            <InputNumber style={{width: '100%'}} min={0} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="简答题">
          <Form.Item name="short" noStyle rules={[{ required: true, message: '请输入简答题数量!' }]}>
            <InputNumber style={{width: '100%'}} min={0} />
          </Form.Item>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            组卷
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {};
}
const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateExam);