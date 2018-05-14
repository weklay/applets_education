import { PersistStore } from 'common-mpvue'
import { user } from '../api'

const userStore = new PersistStore('userStatus', {
  state: {
    userStatus: {
      id: 0, //用户id
    }
  },
  getters: {
    getUserId (state) {
      return state.userStatus.id
    }
  },
  mutations: {
    setUserStatus (state, userStatus) {
      state.userStatus.id = userStatus.id
    }
  },
  actions: {
    userStatus (store) {
      wx.login({
        success: res => {
          user.getUserInfo({
            code: res.code
          }).then(res => {
            store.commit('setUserStatus', res.data)
          })
        }
      })
    }
  }
})

export default userStore
