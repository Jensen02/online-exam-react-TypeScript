/*
 * @Description: reducer
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-26 23:37:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 22:51:25
 */
import { combineReducers } from 'redux';
import { userReducer } from './user-reducer';
import { classMangeReducer } from './class-manage';
import { studentReducer } from './student-reducer';
import { examReducer } from './exam-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  classManage: classMangeReducer,
  student: studentReducer,
  exam: examReducer
});

export default rootReducer;