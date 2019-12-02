import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursong:{},
    songlist:{},
    status:false
  },
  mutations: {
    setcursong(state,song){
      state.cursong = song;
      state.status = true
    },
    setlist(state,list){
      state.songlist = list;
      state.status = true
    },
    setstatus(state,flag){
      state.status = flag
    }
  },
  actions: {
  },
  modules: {
  }
})
