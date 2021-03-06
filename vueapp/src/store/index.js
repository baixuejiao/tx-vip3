import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:"red",
    title:"电影",
    photoData:[]
  },
  mutations: {
    change(state,obj){
      state.color = obj.color;
      state.title = obj.title;
    },
    addPhoto(state,arr){
      state.photoData = arr;
    }
  },
  actions: {
  },
  modules: {
  }
})
