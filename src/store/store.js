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
    addTransaction: ({ commit }, payload) => {
      commit('addTransaction', payload)
    },
    updateCoinsList: ({ commit }, payload) => {
      commit('updateCoinsList', payload)
    },
    addPosition: ({ commit }, payload) => {
      commit('addPosition', payload)
    },
    updatePosition: ({ commit }, payload) => {
      commit('updatePosition', payload)
    }
  },
  mutations: {
    initMoonfolio: (state,payload)=> {
      state.moonfolio = payload
    },
    addTransaction: (state,payload) => {
      const currentMnfl = state.moonfolio.find(element=>{
         return element.name === state.selectedMoonfolio
       })
      currentMnfl.data.transactions.push(payload)
    },
    updateCoinsList: (state, payload) => {
      const currentMnfl = state.moonfolio.find(element=>{
         return element.name === state.selectedMoonfolio
       })
       if (!currentMnfl.data.coins.includes(payload.coin)) {
         currentMnfl.data.coins.push(payload.coin)
       }
    },
    // addPosition: (state, payload) => {
    //   const currentMnfl = state.moonfolio.find(element=>{
    //      return element.name === state.selectedMoonfolio
    //    })
    //    currentMnfl.data.positions.push({
    //      transactionNumber: 1,
    //      coin: payload.coin,
    //      totalInvestment: payload.price,
    //      quantity: payload.amount
    //    })
    // },
    updatePosition: (state,payload) => {
      const currentMnfl = state.moonfolio.find(element=>{
         return element.name === state.selectedMoonfolio
       })
       if (!currentMnfl.data.coins.includes(payload.coin)) {
         currentMnfl.data.positions.push({
           transactionNumber: 1,
           coin: payload.coin,
           totalInvestment: payload.price,
           quantity: payload.amount
         })
       } else {
         currentMnfl.data.positions
         .filter((position)=>{
           return position.coin === payload.coin
         })
         .map((position)=>{
           position.transactionNumber += 1
           position.totalInvestment += payload.price
           position.quantity += payload.amount
         })
       }
    }
  }
})
