/*
 * @Description: api
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-11 00:34:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-11 00:58:31
 */
import request from './request'

import api from './api'

const gen = (params: string) => {
  let url = params
  let method = 'GET'

  const paramsArray = params.split(' ')
  if (paramsArray.length === 2) {
    method = paramsArray[0]
    url = paramsArray[1]
  }

  return function(data: any) {
    return request({
      url,
      data,
      method,
    })
  }
}

const APIFunction: {[index: string]: any} = {}
for (const key in api) {
  APIFunction[key] = gen(api[key])
  
}

// APIFunction.queryWeather = params => {
//   params.key = 'i7sau1babuzwhycn'
//   return request({
//     url: `${apiPrefix}/weather/now.json`,
//     data: params,
//   })
// }

export default APIFunction;
