/*
 * @Description: 用户相关的接口定义
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-09 22:36:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-09 23:19:25
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