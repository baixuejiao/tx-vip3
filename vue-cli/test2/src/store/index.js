import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存储状态
  state: {
    num:20,
    count:100
  },
  // 修改状态
  mutations: {
    add(state,x){
      // state.num++;
      state.num += x;
    },
    reduce(state,y){
      state.num -= y;
    }
  },
  // 相当于计算属性
  getters:{
    xx:function(state){
      return state.num + state.count;
    }
  },
  actions: {
    // 
    addAction({commit}){
      setTimeout(()=>{
        commit('add',20)
      },1000)
    }
  },
  modules: {
  }
})
