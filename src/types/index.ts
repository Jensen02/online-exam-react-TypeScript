/*
 * @Description: 统一导出所有的接口定义
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-09 22:37:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-06 14:28:15
 */
import { IUserInfo, IRegister, IProps } from './user-type';

interface IAction {
  type: string;
  payload: any;
}
export interface ResponnseData {
  success: boolean;
  message: string;
  statusCode: number;
  data: any;
}

export type Action = IAction;
export type UserInfo = IUserInfo;
export type Register = IRegister;
export type Props = IProps;