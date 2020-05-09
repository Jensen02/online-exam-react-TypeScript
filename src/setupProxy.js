/*
 * @Description: proxy
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-16 22:22:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-09 15:52:17
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // app.use(createProxyMiddleware(
  //   '/api/v1', {
  //   target: 'http://101.133.211.70/',
  //   changeOrigin: true
  // },
  //   '/area', {
  //   target: 'https://api.jisuapi.com/',
  //   changeOrigin: true
  // },
  //   '/apis', {
  //   target: 'http://api.yonyoucloud.com/',
  //   changeOrigin: true
  // }
  // ));
};