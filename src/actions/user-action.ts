/*
 * @Description: 用户相关的actions
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-09 21:55:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-09 23:34:39
 */
import { SET_USER_INFO, SET_USER_ROLE } from '../constants';
import { UserInfo } from '../types';

export const setUserRole = (role: string) => {
  return {
    type: SET_USER_ROLE,
    payload: role
  };
}

export const setUserInfo = (userInfo: UserInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo
  };
}