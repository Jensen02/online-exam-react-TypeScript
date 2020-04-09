/*
 * @Description: reducer
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-26 23:37:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-09 23:28:17
 */
import { combineReducers } from 'redux';
import { userReducer } from './user-reducer';

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;