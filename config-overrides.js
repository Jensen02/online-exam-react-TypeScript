/*
 * @Description: 修改默认配置
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-26 22:21:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-10 21:14:00
 */
// const path = require('path');
const {
  override,
  fixBabelImports,
  addLessLoader,
  // addWebpackAlias,
  // addDecoratorsLegacy
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  // addWebpackAlias({
  //   "@": path.resolve(__dirname, 'src')
  // }),
  // addDecoratorsLegacy(),
);