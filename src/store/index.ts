/*
 * @Description: store
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-26 23:36:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-26 23:46:29
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

