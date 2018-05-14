import { wrap } from 'common-mpvue'
import App from './App'

wrap(App, {
  name: 'U选教育',
  version: 'v1.0.0',
  pkgName: 'applets_education',
  env: 'development',//'production'
  domain: 'http://127.0.0.1'
})

export default {
  config: {
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
    // tabBar: {
    //   list: [
    //     {
    //       pagePath: 'pages/my/main',
    //       text: '个人中心',
    //       iconPath: 'static/img/nav/my.png',
    //       selectedIconPath: 'static/img/nav/my-s.png'
    //     }
    //   ]
    // }
  }
}
