/*
 * @Description: api
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-04-11 00:35:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-11 00:57:19
 */
const api: {[index: string]: string} = {
  queryRouteList: '/routes',

  queryUserInfo: '/user',
  logoutUser: '/user/logout',
  loginUser: 'POST /user/login',

  queryUser: '/user/:id',
  queryUserList: '/users',
  updateUser: 'Patch /user/:id',
  createUser: 'POST /user',
  removeUser: 'DELETE /user/:id',
  removeUserList: 'POST /users/delete',

  queryPostList: '/posts',

  queryDashboard: '/dashboard',
}

export default api;
