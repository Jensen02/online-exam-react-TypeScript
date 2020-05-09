/*
 * @Description: 用户相关的接口定义
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-09 22:36:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 17:21:42
 */
export interface IUserInfo {
  userName: string;
  school: string;
  classNo: string;
  introduce: string;
  realName: string;
  headerPic: string;
  sex?: string;
  birthday?: string;
  idNo?: string;
}

export interface IRegister {
  phone: string;
  code: string;
  password: string;
  username: string;
}

export interface IProps {
  dispatch?: any,
  history?: any,
  location?: any,
}