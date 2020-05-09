/*
 * @fileheader.Author: asd
 */
import { message } from 'antd';
import store from 'store';
import {
  CREATE_CLASS_IS_VISIVLE,
  SET_CLASS_LIST_TEACHER,
  EDIT_CLASS_INFO,
  IS_EDIT_CLASS,
  SET_EXAM_LIST,
  SET_STUDENT_LIST,
  SET_STUDENT_APPROVE_LIST,
  SET_CLASS_ID_LIST,
  SET_SELECTED_CLASS_ID
} from '../constants';
import { Dispatch } from 'redux';
import { changeClassInfo } from '../utils';
import { IClassInfo } from '../reducers/class-manage';
import {
  createClass,
  getClassList,
  deleteClass,
  updateClassInfo,
  deleteStudent,
  getStudentList,
  getExamList,
  deleteExam,
  getStudentListWithApprove,
  approveStudent
} from '../service';

export const setModalVisible = (visible: boolean) => {
  return {
    type: CREATE_CLASS_IS_VISIVLE,
    payload: visible
  }
}

// 设置班级列表
export const setClassList = (classList: IClassInfo[]) => {
  return {
    type: SET_CLASS_LIST_TEACHER,
    payload: classList
  };
}

// 是否修改班级信息
export const setIsEdit = (isEdit: boolean) => {
  return {
    type: IS_EDIT_CLASS,
    payload: isEdit
  };
}

// 设置需要修改的班级信息
export const setEditClassInfo = (classInfo: any) => {
  return {
    type: EDIT_CLASS_INFO,
    payload: classInfo
  };
}

// 设置学生列表
export const setStudentList = (studentList: any) => {
  return {
    type: SET_STUDENT_LIST,
    payload: studentList
  };
}

// 设置试卷列表
export const setExamList = (examList: any) => {
  return {
    type: SET_EXAM_LIST,
    payload: examList
  };
}

// 设置申请加入班级的学生列表
export const setStudentListWithApprove = (studentList: any) => {
  return {
    type: SET_STUDENT_APPROVE_LIST,
    payload: studentList
  };
}

// 设置班级id列表
export const setSlectedClassId = (classId: string) => {
  return {
    type: SET_SELECTED_CLASS_ID,
    payload: classId
  };
}

// 设置选中的班级id
export const setClassIdList = (classIdList: any) => {
  return {
    type: SET_CLASS_ID_LIST,
    payload: classIdList
  };
}

// 获取班级列表
export const getClassListA = () => {
  return async (dispatch: Dispatch) => {
    const teacher = store.get('name') || '';
    const { data, msg, code } = await getClassList(teacher);
    dispatch(setClassList(data));
    const classIdList = changeClassInfo(data);
    dispatch(setClassIdList(classIdList));
  }
}

// 创建班级
export const createClassA = (classInfo: any) => {
  return async (dispatch: any) => {
    const { data, msg, code } = await createClass(classInfo);
    console.log('add: ', data);
    if (parseInt(code, 10) === 1) {
      message.success(msg);
      dispatch(getClassListA());
    }
  }
}

// 删除班级
export const deleteClassA = (classId: string) => {
  return async (dispatch: any) => {
    const { data, msg, code } = await deleteClass(classId);
    console.log('data: ', data);
    if (parseInt(code, 10) === 1) {
      message.success(msg);
      dispatch(getClassListA());
    }
  }
}

// 修改班级信息
export const updateClassInfoA = (classInfo: any) => {
  return async (dispatch: any) => {
    const { data, msg, code } = await updateClassInfo(classInfo);
    console.log('data: ', data);
    dispatch(getClassListA());
    dispatch(setEditClassInfo({}));
    dispatch(setIsEdit(false));
    if (parseInt(code, 10) === 1) {
      message.success(msg);
      dispatch(getClassListA());
    }
  }
}

// 获取学生列表
export const getStudentListA = (classId: string) => {
  return async (dispatch: any) => {
    const { data, msg, code } = await getStudentList(classId);
    console.log('data: ', data);
    if (parseInt(code, 10) === 1) {
      dispatch(setStudentList(data));
    }
  }
}

// 删除学生
export const deleteStudentA = (classId: string, student: string) => {
  return async (dispatch: any) => {
    const { data, msg, code } = await deleteStudent({student, classId});
    console.log('data: ', data);
    if (parseInt(code, 10) === 1) {
      message.success(msg);
      dispatch(getStudentListA(classId));
    } else {
      message.error(msg);
    }
  }
}

// 获取试卷列表
export const getExamListA = (classId: string) => {
  return async (dispatch: any) => {
    const { msg, code } = await getExamList(classId);
    if (parseInt(code, 10) === 1) {
      message.success(msg);
    } else {
      message.error(msg);
    }
  }
}

// 删除试卷
export const deleteExamA = (classId: string, examId: string) => {
  return async (dispatch: any) => {
    const { data, msg, code } = await deleteExam(examId);
    console.log('data: ', data);
    if (parseInt(code, 10) === 1) {
      message.success(msg);
      dispatch(getExamListA(classId));
    }
  }
}

// 获取申请加入班级的学生列表
export const getStudentListWithApproveA = (classId: string) => {
  return async (dispatch: any) => {
    const { data, msg, code } = await getStudentListWithApprove(classId);
    console.log('data: ', data);
    if (parseInt(code, 10) === 1) {
      message.success(msg);
      dispatch(setStudentListWithApprove(data));
    }
  }
}

// 是否同意学生加入班级
export const approveStudentA = (approveInfo: any) => {
  const { classId } = approveInfo;
  return async (dispatch: any) => {
    const { data, msg, code } = await approveStudent(approveInfo);
    console.log('data: ', data);
    dispatch(getStudentListWithApproveA(classId));
  }
}