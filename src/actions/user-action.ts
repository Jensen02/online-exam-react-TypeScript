/*
 * @Description: 用户相关的actions
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-09 21:55:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-09 21:09:19
 */
import { message } from 'antd';
import {
  SET_USER_INFO,
  SET_USER_ROLE,
  SET_REGISTER,
  SET_IS_MODAL,
  SET_SCHOOL_LIST,
  SET_CITY_LIST,
  SET_PROVINCE_LIST,
  SET_OPEN_KEY,
  SET_SELECT_KEY,
  SET_IS_LOGIN
} from '../constants';
import { UserInfo, Register } from '../types';
import {
  getCode,
  userRegistry,
  login,
  addUserInfo
} from '../service';
import request from '../service/request';
import { Dispatch } from 'redux';
import axios from 'axios';
import store from 'store';

// 设置用户登录权限
export const setUserRole = (role: string) => {
  return {
    type: SET_USER_ROLE,
    payload: role
  };
}

export const setIsLogin = (isLogin: boolean) => {
  return {
    type: SET_IS_LOGIN,
    payload: isLogin
  };
}

// 设置用户个人信息
export const setUserInfo = (userInfo: UserInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo
  };
}

// 设置用户注册信息
export const setRegister = (register: Register) => {
  return {
    type: SET_REGISTER,
    patload: register
  };
}

// 发送验证码
export const sendCode = (tel: string, userName: string) => {
  return async (dispatch: any) => {
    const { code, msg } = await getCode(tel, userName);
    parseInt(code, 10) === 1 && message.success(msg);
  }
}

// 控制modal显示或隐藏
export const setIsModal = (isModal: boolean) => {
  return {
    type: SET_IS_MODAL,
    payload: isModal
  };
}

export const setOpenKey = (key: string) => {
  const openKey = [];
  key.length && openKey.push(key);
  return {
    type: SET_OPEN_KEY,
    payload: openKey
  };
}

export const setSelectKey = (key: string) => {
  const selectKey = [];
  selectKey.push(key);
  return {
    type: SET_SELECT_KEY,
    payload: selectKey
  }
}

// 设置学校列表
export const setSchoolList = (schoolList: any[]) => {
  return {
    type: SET_SCHOOL_LIST,
    payload: schoolList
  };
}

// 设置城市列表
export const setCityList = (cityList: any[]) => {
  return {
    type: SET_CITY_LIST,
    payload: cityList
  };
}

// 设置省份列表
export const setProvinceList = (provinceList: any[]) => {
  return {
    type: SET_PROVINCE_LIST,
    payload: provinceList
  };
}

// 获取省份列表
export const getProvinceList = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await axios.get('/area/province?appkey=7faffa1769eb4a47');
    const { status, result } = data;
    status === 0 && dispatch(setProvinceList(result));
  }
}

// 获取城市列表
export const getCityList = (parentId: number) => {
  return async (dispatch: Dispatch) => {
    const { data } = await request({
      url: '/area/city',
      data: {
        parentid: 2,
        appkey: '7faffa1769eb4a47'
      }
    });
    const { status, result } = data;
    status === 0 && dispatch(setCityList(result));
  }
}

// 获取学校列表
export const getSchoolList = (name: string) => {
  return async (dispatch: Dispatch) => {
    const { data } = await request({
      url: '/apis/dst/collegeInfoQuery/collegeInfoQuery',
      data: {
        name
      },
      method: 'GET'
    });
    console.log('school: ', data);
  }
}

// 注册
export const userRegistryA = (codes: string, user: any) => {
  return async (dispatch: any) => {
    const { code, msg } = await userRegistry(codes, user);
    parseInt(code, 10) && message.success(msg);
  }
}

// 登录
export const loginA = (psw: string, tel: string, role: string) => {
  const identity = role === 'student' ? '学生' : '老师';
  return async (dispatch: any) => {
    const { code, data, msg } = await login(psw, tel, identity);
    console.log('data: ', data);
    if (parseInt(code, 10) === 1) {
      store.set('name', data[0]);
      store.set('token', data[1]);
      dispatch(setUserRole(role));
      dispatch(setIsLogin(true));
    } else {
      message.error(msg);
    }
  }
}

export const addUserInfoA = (userInfo: any) => {
  return async (dispatch: any) => {
    const { code, msg, data } = await addUserInfo(userInfo);
    if (parseInt(code, 10) === 1) {
      message.success(msg);
    }
  }
}