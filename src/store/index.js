import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stock: [],
    datas: null
  },
  mutations: {
    addTostock (state, data) {
      state.stock.push(data)
    },
    updateData (state, parts) {
      state.datas = parts
    }
  },
  actions: {
    getStockdata ({ commit }) {

      axios.get('/api/stock?offset=10&limit=50')
        .then(result => commit('updateData', result.data))
        .catch(console.error)
    }
  }
})
