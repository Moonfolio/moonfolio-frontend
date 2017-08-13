import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedMoonfolio:'',
    moonfolio:[{
      id:'',
      name:'',
      coins:[],
      value:0,
      transactions: [{
        coinPair: ['','BTC'],
        exchanger: '',
        timestamp: 0,
        amount: 0,
        price: 0,
        transactionValue: 0,
        fee: 0,
        type: 'buy'
      }]
    }]
  }
})
