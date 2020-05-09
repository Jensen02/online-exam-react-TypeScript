import { message } from 'antd';
import store from 'store';
import { SET_ANSWER } from '../constants';
import {
  submitAnswer,
  createExam
} from '../service';

export const setAnswer = (answer: any) => {
  return (dispatch: any, getState: any) => {
    const { exam } = getState();
  }
}

export const createExamA = (exam: any) => {
  return async () => {
    const {code, msg, data} = await createExam(exam);
    if (parseInt(code, 10) === 1) {
      message.success(msg);
    } 
  }
}

