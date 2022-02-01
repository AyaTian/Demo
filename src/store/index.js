import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    order:[]
  },
  mutations: {
    addItem(state,selectedProduct){
      state.order.push(selectedProduct)
    },
    deleteItem(state,index){
      state.order.splice(index,1)
    },
  },
  actions: {
  },
  modules: {
  }
})
