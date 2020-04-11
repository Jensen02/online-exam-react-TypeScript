/*
 * @Description: 配置request
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-10 17:58:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-11 00:30:05
 */
import axios from 'axios';
import { cloneDeep } from 'lodash';
import store from 'store';
import { message } from 'antd';

axios.defaults.baseURL = '/api/v1';
axios.interceptors.request.use((config) => {
  const token = store.get('token');
  token && (config.headers['Authorization'] = token);
  return config;
}, (error: any) => {
  message.error(`Error: ${error}`);
  return;
});

axios.interceptors.response.use((response) => {
  if (response.status !== 200) {
    message.error(response.statusText);
    return Promise.reject(response);
  }
  return Promise.resolve(response);
}, (error: any) => {
  message.error(`Error: ${error}`);
  return;
});

export default function request(options: any) {
  let { data } = options
  const cloneData = cloneDeep(data)

  options.params = cloneData

  return axios(options)
    .then(response => {
      const { statusText, status, data } = response

      // let result = {}
      // if (typeof data === 'object') {
      //   result = data
      //   if (Array.isArray(data)) {
      //     result.list = data
      //   }
      // } else {
      //   result.data = data
      // }

      return Promise.resolve({
        success: true,
        message: statusText,
        statusCode: status,
        data,
      })
    })
    .catch(error => {
      const { response } = error

      let msg
      let statusCode

      if (response && response instanceof Object) {
        const { data, statusText } = response
        statusCode = response.status
        msg = data.message || statusText
      } else {
        statusCode = 600
        msg = error.message || 'Network Error'
      }

      /* eslint-disable */
      return Promise.reject({
        success: false,
        statusCode,
        message: msg,
      });
    });
}