/*
 * @Description: 用户相关的reducer
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-09 21:57:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-09 23:26:20
 */
import { SET_USER_INFO, SET_USER_ROLE } from '../constants';
import { UserInfo, Action } from '../types';

interface IUserInitData {
  userInfo: UserInfo;
  role: string;
}

const USER_INIT_DATA: IUserInitData = {
  role: '',
  userInfo: {
    userName: '',
    school: '',
    classNo: '',
    introduce: '',
    realName: '',
    headerPic: '',
    sex: '',
    birthday: '',
    idNo: ''
  }
}

export const userReducer = (state = USER_INIT_DATA, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_INFO:
      return { ...state, userInfo: payload };
    case SET_USER_ROLE:
      return { ...state, role: payload };
    default:
      return { ...state };
  }
}