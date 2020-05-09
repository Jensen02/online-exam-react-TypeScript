import React from 'react';
import { Dropdown, Menu } from 'antd'
import {DownOutlined} from '@ant-design/icons';

interface Item {
  title: string;
  key: number;
}

interface IProps {
  record: any;
  option: Item[];
  handleClick: (key: number, record: any) => void;
}

const DropdownOption: React.FC<IProps> = ({ record, option, handleClick }) => {
  const menuItems = option.map((item) => {
    const { title, key } = item;
    return (<Menu.Item key={key} onClick={() => handleClick(key, record)}>{ title }</Menu.Item>)
  });
  const menu = (
    <Menu> {menuItems} </Menu>
  );
  return (
    <Dropdown overlay={menu}><a>操作选项 <DownOutlined /></a></Dropdown>
  )
}

export default DropdownOption;