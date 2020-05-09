/*
 * @Description: api
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-11 00:34:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-09 15:48:28
 */
import request from './request'
import { ResponnseData } from '../types';

export const getCode = async (tel: string, userName: string) => {
  const { data } = await request({
    url: '/api/v1/user/sendSMS',
    data: {
      tel,
      userName
    },
    method: 'POST'
  });
  return data;
}

// 注册
export const userRegistry = async (code: string, user: any) => {
  const { data } = await request({
    url: '/api/v1/user/register',
    data: {
      code,
      user
    },
    method: 'POST'
  });
  return data;
}

// 登录
export const login = async (psw: string, tel: string, identity: string) => {
  const { data } = await request({
    url: '/api/v1/user/login',
    data: {
      psw,
      tel,
      identity
    },
    method: 'POST'
  });
  return data;
}

/******************** 老师端 *******************/

// 创建班级
export const createClass = async (classInfo: any) => {
  const { data } = await request({
    url: '/api/v1/classes/insertClass',
    data: {
      ...classInfo
    },
    method: 'POST'
  });
  return data;
}

// 获取班级列表
export const getClassList = async (teacher: string) => {
  const { data } = await request({
    url: '/api/v1/classes/selectClass',
    data: {
      teacher
    },
    method: 'GET'
  });
  return data;
}

// 删除班级
export const deleteClass = async (classId: string) => {
  const { data } = await request({
    url: '/api/v1/classes/deleteClass',
    data: {
      classId
    },
    method: 'GET'
  });
  return data;
}

// 修改班级信息
export const updateClassInfo = async (classInfo: any) => {
  const { data } = await request({
    url: '/api/v1/classes/updateClass',
    data: {
      ...classInfo
    },
    method: 'POST'
  });
  return data;
}

// 获取学生列表
export const getStudentList = async (classId: string) => {
  const { data } = await request({
    url: '/api/v1/classes/selectStudentByClassId',
    data: {
      classId
    },
    method: 'POST'
  });
  return data;
}

// 删除学生
export const deleteStudent = async (student: any) => {
  const { data } = await request({
    url: '/api/v1/classes/deleteStudent',
    data: {
      ...student
    },
    method: 'POST'
  });
  return data;
}

// 获取所有试卷列表
export const getExamList = async (classId: string) => {
  const { data } = await request({
    url: '/api/v1/classes/entryClasses',
    data: {
      classId
    },
    method: 'GET'
  });
  return data;
}

// 获取申请加入班级的学生
export const getStudentListWithApprove = async (classId: string) => {
  const { data } = await request({
    url: '/api/v1/classes/selectStudentRequestByClassId',
    data: {
      classId
    },
    method: 'GET'
  });
  return data;
}

// 老师审批学生是否可以加入班级
export const approveStudent = async (approveInfo: any) => {
  const { data } = await request({
    url: '/api/v1/classes/approvalRequest',
    data: {
      ...approveInfo
    },
    method: 'POST'
  });
  return data;
}

// 删除试卷
export const deleteExam = async (examId: string) => {
  const { data } = await request({
    url: '/api/v1/exam/deleteExam',
    data: {
      examId
    },
    method: 'POST'
  });
  return data;
}

// 组卷
export const createExam = async (exam: any) => {
  const { data } = await request({
    url: '/api/v1/exam/insertExam',
    data: {
      ...exam
    },
    method: 'POST'
  });
  return data;
}

/******************** 学生端 *******************/

// 获取已加入的班级
export const getClassListStudent = async (student: string) => {
  const { data } = await request({
    url: '/api/v1/classes/selectClassByStudent',
    data: {
      student
    },
    method: 'POST'
  });
  return data;
}

// 退出班级
export const exitClass = async (classId: string, student: string) => {
  const { data } = await request({
    url: '/api/v1/student/quitClass',
    data: {
      classId,
      student
    },
    method: 'POST'
  });
  return data;
}

// 通过班级号和学校名称查询班级
export const queryClass = async (classNo: string, school: string) => {
  const { data } = await request({
    url: '/api/v1/classes/selectClassByClassNo',
    data: {
      classNo,
      school
    },
    method: 'POST'
  });
  return data;
}

// 申请加入班级
export const applicationAddClass = async (classId: string, student: string) => {
  const { data } = await request({
    url: '/api/v1/student/joinClass',
    data: {
      classId,
      student
    },
    method: 'POST'
  });
  return data;
}

// 提交答案
export const submitAnswer = async (answer: any) => {
  const { data } = await request({
    url: '/api/v1/answer/insertAnswer',
    data: {
      answer
    },
    method: 'POST'
  });
  return data;
}

// 添加个人信息
export const addUserInfo = async (userInfo: any) => {
  const { data } = await request({
    url: '/api/v1/teacher/insertInfo',
    data: userInfo,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return data;
}

// 获取个人信息
export const getUserInfo = async (userName: string) => {
  const { data } = await request({
    url: '/api/v1/teacher/select',
    data: {
      userName
    },
    method: 'POST'
  });
  return data;
}