import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import server from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    flights: []
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    async submitLogin (context, payload) {
      try {
        const response = await server.post('/login', payload)
        localStorage.setItem('access_token', response.data.access_token)
        context.commit('SET_ISLOGIN', true)
        router.push('/')
      } catch (err) {
        console.log(err)
      }
    },
    async submitRegister (context, payload) {
      try {
        await server.post('/register', payload)
        router.push('/login')
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  }
})
