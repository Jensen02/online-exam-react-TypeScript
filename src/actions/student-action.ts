/*
 * @fileheader.Author: asd
 */
/*
 * @fileheader.Author: asd
 */
import { message } from 'antd';
import store from 'store';
import {
  SET_CLASS_LIST_STUDENT,
  ADD_CLASS,
  SET_CLASS_INFO,
  QUERY_SUCCCESS
} from '../constants';
import {
  getClassListStudent,
  exitClass,
  queryClass,
  applicationAddClass
} from '../service';

// 设置班级列表
export const setClassList = (classList: any) => {
  return {
    type: SET_CLASS_LIST_STUDENT,
    payload: classList
  };
}

// 设置modal
export const setIsVisible = (isVisible: boolean) => {
  return {
    type: ADD_CLASS,
    payload: isVisible
  };
}

// 设置查询到的班级信息
export const setClassInfo = (classInfo: any) => {
  return {
    type: SET_CLASS_INFO,
    payload: classInfo
  };
}

// 设置查询是否成功
export const setSuccess = (isSuccess: boolean) => {
  return {
    type: QUERY_SUCCCESS,
    payload: isSuccess
  };
}

// 获取学生已加入的班级列表
export const getClassListStudentA = () => {
  const student = store.get('name') || '';
  return async (dispatch: any) => {
    const res = await getClassListStudent(student);
    const { data } = res;
    dispatch(setClassList(data));
  }
}

// 退出班级
export const exitClassA = (classId: string) => {
  const student = store.get('name');
  return async (dispatch: any) => {
    const { data, code, msg } = await exitClass(classId, student);
    if (parseInt(code, 10) === 1) {
      message.success(msg);
      dispatch(getClassListStudentA());
    }
  }
}

// 查询班级信息
export const queryClassA = (queryInfo: any) => {
  const { classNo, school } = queryInfo;
  return async (dispatch: any) => {
    const { data, code, msg } = await queryClass(classNo, school);
    if (parseInt(code, 10) === 1) {
      dispatch(setClassInfo(data[0]));
      setTimeout(() => dispatch(setSuccess(true)), 800);
    } else {
      message.error(msg);
    }
  }
}

// 申请加入班级
export const applicationAddClassA = (classId: string) => {
  const student = store.get('name') || '';
  return async (dispatch: any) => {
    const {data, code, msg} = await applicationAddClass(classId, student);
    if (parseInt(code, 10) === 1) {
      message.success(msg);
      dispatch(getClassListStudentA());
    }
  }
}