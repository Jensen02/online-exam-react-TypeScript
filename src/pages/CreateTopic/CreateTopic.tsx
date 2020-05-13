import React, { useEffect, useState } from 'react';
import { Form, Input, Select, InputNumber, Button } from 'antd';
import { connect } from 'react-redux';
import { Props } from '../../types';
import { setOpenKey, setSelectKey } from '../../actions/user-action';
import './CreateTopic.less';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 }
  }
};

const CreateTopic: React.FC<Props> = ({
  dispatch
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    dispatch(setOpenKey('4'));
    dispatch(setSelectKey('4_1'));
  }, []);
  const [radio, setRadio] = useState(false);          // 选择题
  const [judge, setJudge] = useState(false);          // 判断题
  const [answer, setAnswer] = useState(false);        // 简答题
  const handleChangeType = (type: string) => {
    // switch(type) {
    //   case '选择': setRadio(true);
    //   case '应用': setAnswer(true);
    //   case '填空': setFill(true);
    //   case '判断': setJudge(true);
    // }
    if (type === '判断') {
      setRadio(false);
      setAnswer(false);
      setJudge(true);
    }
    if (type === '选择') {
      setJudge(false);
      setAnswer(false);
      setRadio(true);
    }
    if (type === '填空' || type === '应用') {
      setRadio(false);
      setJudge(false);
      setAnswer(true);
    }
    // setJudge(true); 
    console.log('as: ', type, radio, judge);
  }
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className='create-topic'>
      <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="subject"
        label="科目"
        hasFeedback
        rules={[{ required: true, message: '请选择题目所属科目!' }]}
      >
        <Select placeholder="选择科目" style={{textAlign:'left'}}>
          <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="type"
        label="题型"
        hasFeedback
        rules={[{ required: true, message: '请选择题目类型!' }]}
      >
        <Select
          placeholder="题目类型"
          onSelect={(val: any) => handleChangeType(val)}
          style={{textAlign:'left'}}
        >
          <Option value="选择">选择</Option>
          <Option value="判断">判断</Option>
          <Option value='填空'>填空</Option>
          <Option value='简答'>简答</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="difficulty"
        label="难易度"
        hasFeedback
        rules={[{ required: true, message: '请选择题目难易程度!' }]}
      >
        <Select placeholder="题目难易程度" style={{textAlign: 'left'}}>
          <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </Form.Item>
      <Form.Item label='分数' >
        <Form.Item
          name="scoreValue"
          noStyle
          hasFeedback
          rules={[{ required: true, message: '请输入题目分数!' }]}
        >
          <InputNumber style={{width: '100%'}} min={1} placeholder='分数' />
        </Form.Item>
      </Form.Item>
      <Form.Item
        hasFeedback
        name="question"
        label="问题"
        rules={[{ required: true, message: '请输入问题!' },
        ]}
      >
        <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} placeholder='题目问题' />
      </Form.Item>
      {
        (radio || judge) && (
          <React.Fragment>
            <Form.Item
              hasFeedback
              name="option1"
              label="选项一"
              rules={[{ required: true, message: '请输入选项一!' }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="option2"
              label="选项二"
              rules={[{ required: true, message: '请输入选项二!' },
              ]}
            >
              <Input />
            </Form.Item>
          </React.Fragment>
        )
      }
      {
        radio && (
          <React.Fragment>
            <Form.Item
              hasFeedback
              name="option3"
              label="选项三"
              rules={[{ required: true, message: '请输入选项三!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="option4"
              label="选项四"
              rules={[{ required: true, message: '请输入选项四!' },
              ]}
            >
              <Input />
            </Form.Item>
          </React.Fragment>
        )
      }
      {
        answer && (
          <Form.Item
            hasFeedback
            name="solution"
            label="答案"
            rules={[{ required: true, message: '请输入答案!' },
            ]}
          >
            <Input.TextArea autoSize={{ minRows: 1, maxRows: 6 }} placeholder='题目答案' />
          </Form.Item>
        )
      }

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          添加
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateTopic);