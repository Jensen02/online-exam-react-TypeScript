/*
 * @Description: 用户相关的reducer
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-09 21:57:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-09 15:03:07
 */
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
  SET_CODE,
  SET_IS_LOGIN
} from '../constants';
import { Action, Register } from '../types';

interface IUserInitData {
  userInfo: any;
  role: string;
  register: Register;
  isModal: boolean;
  school: string;
  schoolList: any[];
  provinceList: any[];
  cityList: any[];
  defaultOpenKeys: string[];
  defaultSelectedKeys: string[];
  code: string;
  isLogin: boolean;
  isSucc: boolean;
}

const USER_INIT_DATA: IUserInitData = {
  role: '',
  code: '',
  isLogin: false,
  userInfo: {},
  isSucc: false,
  register: {
    username: '',
    code: '',
    password: '',
    phone: ''
  },
  isModal: false,
  school: '',
  schoolList: [],
  provinceList: [],
  cityList: [],
  defaultSelectedKeys: ['3_1'],
  defaultOpenKeys: ['3']
}

export const userReducer = (state = USER_INIT_DATA, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_INFO:
      return { ...state, userInfo: payload };
    case SET_USER_ROLE:
      return { ...state, role: payload };
    case SET_REGISTER:
      return { ...state, register: payload };
    case SET_IS_MODAL:
      return { ...state, isModal: payload };
    case SET_SCHOOL_LIST:
      return { ...state, schoolList: payload };
    case SET_CITY_LIST:
      return { ...state, cityList: payload };
    case SET_PROVINCE_LIST:
      return { ...state, provinceList: payload };
    case SET_SELECT_KEY:
      return { ...state, defaultSelectedKeys: payload };
    case SET_OPEN_KEY:
      return { ...state, defaultOpenKeys: payload };
    case SET_CODE:
      return { ...state, code: payload };
    case SET_IS_LOGIN:
      return { ...state, isLogin: payload };
    default:
      return { ...state };
  }
}