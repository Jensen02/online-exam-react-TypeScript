import { Action,  } from '../types';
import {
  SET_ANSWER
} from '../constants';

interface IAnswer {
  examId: string;
  questionId: string;
  userName: string;
  stuAnswer: string;
}
interface IExam {
  answer: IAnswer[];
}

const INIT_STATE: IExam = {
  answer: []
}

export const examReducer = (state: any, action: Action) => {
  const { type, payload } = action;
  switch(type) {
    case SET_ANSWER:
      return { ...state, answer: payload };
    default:
      return { ...state };
  }
}