import React from 'react';
import './ExamList.less';

const ExamList: React.FC = () => {
  return (
    <div className='exam-list'>
      <div className='exam-state'>
        <div className='state exam-state-finished'>
          <span className='title'>已完成的考试</span>
          <span className='number'>1234</span>
        </div>
        <div className='state exam-state-progress'>
          <span className='title'>正在进行的考试</span>
          <span className='number'>1234</span>
        </div>
        <div className='state exam-state-will'>
          <span className='title'>即将开始的考试</span>
          <span className='number'>1234</span>
        </div>
      </div>
      <div className='exam-info'></div>
    </div>
  );
};

export default ExamList;