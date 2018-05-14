import { wx } from 'common-mpvue'

export default {
  //获取用户
  getUserInfo (param) {
    return wx.httpRequest.httpJsonPost('/user/getUserInfo', param)
  }
}
