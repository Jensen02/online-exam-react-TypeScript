import { Action } from '../types';
import {
  SET_CLASS_LIST_STUDENT,
  ADD_CLASS,
  SET_CLASS_INFO,
  QUERY_SUCCCESS
} from '../constants';
import { IClassInfo } from './class-manage';

interface IClassList {
  classList: IClassInfo[];
  visible: boolean;
  classInfo: any;
  querySuccess: boolean;
}

const INIT_DATA: IClassList = {
  visible: false,
  querySuccess: false,
  classList: [{
    key: '1',
    classId: "56278165-0337-49d5-8e5a-e30bfc617c1c",
    teacher: "zss",
    classNo: "125364",
    className: "java培训",
    school: "北京邮电大学",
    foundTime: "2020-04-20T00:00:00.000+0000",
    inspect: true
  }],
  classInfo: {
    classId: "657e7d9b-dbc4-4fff-b7ce-ffa26eef0ee2",
    teacher: "zss",
    classNo: "760372",
    className: "java培训",
    school: "西安邮电大学",
    foundTime: "2020-04-20T00:00:00.000+0000",
    inspect: true
  }
};

export const studentReducer = (state = INIT_DATA, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CLASS_LIST_STUDENT:
      return { ...state, classList: payload };
    case ADD_CLASS:
      return { ...state, visible: payload };
    case SET_CLASS_INFO:
      return { ...state, classInfo: payload };
    case QUERY_SUCCCESS:
      return { ...state, querySuccess: payload };
    default:
      return { ...state };
  }
}