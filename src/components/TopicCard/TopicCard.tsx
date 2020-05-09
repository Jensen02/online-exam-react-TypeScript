import React from 'react';
import { Card, Radio } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import './TopicCard.less';

interface IProps {
  isEdit: boolean;
  type: 'string';
  isLook: boolean;
  title: string;
  option?: any;
}

const TopicCard: React.FC = () => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  return (
    <Card
      hoverable
      className='topic-card'
      title="Default size card"
      headStyle={{textAlign: 'left'}}
      bodyStyle={{
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'flex-start'
      }}
      extra={<span><CloseCircleOutlined /></span>}
      // style={{ width: 300 }}
    >
      <Radio.Group onChange={(e) => {console.log('e:', e)}}>
        <Radio style={radioStyle} value={1}>
          Option A
        </Radio>
        <Radio style={radioStyle} value={2}>
          Option B
        </Radio>
        <Radio style={radioStyle} value={3}>
          Option C
        </Radio>
        <Radio style={radioStyle} value={4}>
          Option C
        </Radio>
      </Radio.Group>
    </Card>
  );
}

export default TopicCard;