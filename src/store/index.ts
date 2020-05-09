/*
 * @Description: store
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-26 23:36:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-15 21:47:20
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, thunkMiddleware))
);

export default store;