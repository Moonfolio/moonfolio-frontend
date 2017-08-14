import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedMoonfolio:'first',
    moonfolio:[{
      name:'first',
      data:{
        coins:[],
        value:0,
        transactions: [],
        positions: []
      }
    }]
  },
  getters: {
    moonfolio: state => {
      return state.moonfolio
    },
    moonfolioName: state => {
      return state.selectedMoonfolio
    },
    coinsList: state => {
      const currentMnfl = state.moonfolio.find(element=>{
         return element.name === state.selectedMoonfolio
       })
       return currentMnfl.data.coins
    },
    transactionsList: state => {
      const currentMnfl = state.moonfolio.find(element=>{
         return element.name === state.selectedMoonfolio
       })
       return currentMnfl.data.transactions
    },
    positionsList: state => {
      const currentMnfl = state.moonfolio.find(element=>{
         return element.name === state.selectedMoonfolio
       })
       return currentMnfl.data.positions
    }
  },
  actions: {
    initMoonfolio: ({commit}, payload) => {
      commit('initMoonfolio', payload)
    },
    addTransacion: ({ commit }, payload) => {
      commit('addTransacion', payload)
    }
  },
  mutations: {
    initMoonfolio: (state,payload)=> {
      state.moonfolio = payload
    },
    addTransacion: (state,payload) => {
      const currentMnfl = state.moonfolio.find(element=>{
         return element.name === state.selectedMoonfolio
       })
      currentMnfl.data.transactions.push(payload)
    }
  }
})
