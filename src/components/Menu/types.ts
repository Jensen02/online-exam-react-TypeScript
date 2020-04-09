/*
 * @Description: Menu组件的相关的接口
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-09 16:06:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-09 17:16:57
 */
export interface IMenuItem {
  key: string;
  parentKey: string;
  title: string;
  isdefaultOpenKey: boolean;
}

export interface ISubMenuItem {
  key: string;
  description: string;
  role: string;
  isdefaultSelectedKey: boolean;
  children: IMenuItem[];
}

export type MenuProp = { menuArray: ISubMenuItem[] };