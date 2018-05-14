import { WrapPage } from 'common-mpvue'
import App from './index'

new WrapPage(App)

export default {
  config: {
    navigationBarTitleText: '个人中心'
    // navigationBarTextStyle: '#fff',
    // navigationBarBackgroundColor: '#fff'
  }
}
