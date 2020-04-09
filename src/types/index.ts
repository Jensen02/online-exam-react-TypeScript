/*
 * @Description: 统一导出所有的接口定义
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-09 22:37:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-09 23:19:42
 */
import { IUserInfo } from './user-type';

interface IAction {
  type: string;
  payload: any;
}

export type Action = IAction;
export type UserInfo = IUserInfo;