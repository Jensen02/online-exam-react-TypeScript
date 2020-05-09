/*
 * @fileheader.Author: asd
 */
/*
 * @fileheader.Author: asd
 */
import {
  CREATE_CLASS_IS_VISIVLE,
  SET_CLASS_LIST_TEACHER,
  EDIT_CLASS_INFO,
  IS_EDIT_CLASS,
  SET_STUDENT_LIST,
  SET_EXAM_LIST,
  SET_STUDENT_APPROVE_LIST,
  SET_CLASS_ID_LIST,
  SET_SELECTED_CLASS_ID
} from '../constants';
import { Action } from '../types';

export interface IClassInfo {
  key: string;
  classId?: string;
  teacher: string;
  classNo: string;
  className: string;
  school: string;
  foundTime: string;
  inspect?: boolean;
}

export interface IStudent {
  key: string;
  stuHeadPic: string;
  userName: string;
  stuRealname?: any;
  sex: any;
  school: any;
  major: any;
  classNo: any;
  birthday: any;
  introduce: any;
}

export interface IExam {
  examId: string;
  admin: string;
  examSubject: string;
  examName: string;
  testDuration: string;
  questionCount: string;
  begin: string;
  visibility: string;
  examType: string;
  difficulty: any;
}

interface IClassManage {
  visible: boolean;
  classList: IClassInfo[];
  editClass: any;
  isEdit: boolean;
  studentList: any[];
  examList: IExam[];
  studentApprove: IStudent[];
  classIdList: any[];
  selectedClassId: string;
}

const INIT_DATA: IClassManage = {
  visible: false,
  editClass: {},
  isEdit: false,
  selectedClassId: '',
  classIdList: [{
    className: '注册V中心asdsad',
    classId: 'asdasfasfdferfd'
  },{
    className: 'asdsad',
    classId: 'asdasfasfdferfd12'
  }],
  classList: [{
    key: '1',
    classId: "56278165-0337-49d5-8e5a-e30bfc617c1c",
    teacher: "zss",
    classNo: "125364",
    className: "java培训",
    school: "北京邮电大学",
    foundTime: "2020-04-20T00:00:00.000+0000",
    inspect: true
  },
  {
    key: '2',
    classId: "657e7d9b-dbc4-4fff-b7ce-ffa26eef0ee2",
    teacher: "zss",
    classNo: "760372",
    className: "java培训",
    school: "西安邮电大学",
    foundTime: "2020-04-20T00:00:00.000+0000",
    inspect: true
  }],
  studentList: [{
    key: '1',
    userName: 'fengqilin',
    stuRealname: null,
    stuHeadPic: 'http://101.133.211.70:8080/3956a8c3-eb37-4e1f-93d8-a26b70e32190.png',
    sex: null,
    school: null,
    major: null,
    classNo: null,
    birthday: null,
    introduce: null
  },{
    key: '2',
    userName: 'fengqilin',
    stuRealname: null,
    stuHeadPic: 'http://101.133.211.70:8080/3956a8c3-eb37-4e1f-93d8-a26b70e32190.png',
    sex: null,
    school: null,
    major: null,
    classNo: null,
    birthday: null,
    introduce: null
  }],
  examList: [{
    examId: '4da051f4-9df2-447b-9ae0-8091170095de',
    admin: 'zss',
    examSubject: 'java',
    examName: 'java基础',
    testDuration: '02:00:00',
    questionCount: '8',
    begin: '2020-04-20 20:00:00',
    visibility: 'public',
    examType: '试卷',
    difficulty: null
  },{
    examId: '4da051f4-9df2-447b-9ae0-8091170095de',
    admin: 'zss',
    examSubject: 'java',
    examName: 'java基础java基础java基础java基础java基础java基础',
    testDuration: '02:00:00',
    questionCount: '82',
    begin: '2020-04-20 20:00:00',
    visibility: 'public',
    examType: '试卷',
    difficulty: null
  }],
  studentApprove: []
};

export const classMangeReducer = (state = INIT_DATA, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CLASS_IS_VISIVLE:
      return { ...state, visible: payload };
    case SET_CLASS_LIST_TEACHER:
      return { ...state, classList: payload };
    case EDIT_CLASS_INFO:
      return { ...state, editClass: payload };
    case IS_EDIT_CLASS:
      return { ...state, isEdit: payload };
    case SET_STUDENT_LIST:
      return { ...state, studentList: payload };
    case SET_EXAM_LIST:
      return { ...state, examList: payload };
    case SET_STUDENT_APPROVE_LIST:
      return { ...state, studentApprove: payload };
    case SET_SELECTED_CLASS_ID:
      return { ...state, selectedClassId: payload };
    case SET_CLASS_ID_LIST:
      return { ...state, classIdList: payload };
    default:
      return { ...state };
  }
}