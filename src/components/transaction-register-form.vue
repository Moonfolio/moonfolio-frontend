<template>
  <div class="transaction-register-form">
    <h2>transaction register form</h2>
    <form action="" method="get">
      <section>
        <label for="coinPair">Coin</label>
        <input type="text"
               name="coinPair"
               v-model="tx.coinPair[0]">
        <label for="select">Exchanger</label>
        <select v-model="tx.exchanger">
          <option value="Bittrex">Bittrex</option>
          <option value="Kraken">Kraken</option>
          <option value="Generic">Generic</option>
        </select>
      </section>
      <section>
        <label for="input-text">Amount</label>
        <input type="text" name="input-text" id="input-text"
               placeholder="0">
        <label for="input-text">Price</label>
        <input type="text" name="input-text" id="input-text"
               placeholder="0">
        <label for="input-text">Transaction value</label>
        <input type="text" name="input-text" id="input-text"
                placeholder="0">
        <label for="input-text">Fee</label>
        <input type="text" name="input-text" id="input-text"
               placeholder="0">
      </section>
      <section>
         <label for="timestamp">date</label>
         <input type="date" name="timestamp" value="" v-model="tx.timestamp">
      </section>
      <section>
        <input type="radio" name="radio-1" value="buy" v-model="tx.type">
        <label for="radio-btn-1-1">buy</label>
        <input type="radio" name="radio-1" value="sell" v-model="tx.type">
        <label for="">sell</label>
      </section>
      <button type="button" name="button" @click="saveTransaction">save</button>
    </form>
  </div>
</template>

<script>
import {transactions} from '../transactionsStore.js'
export default {
  data () {
    return {
      tx: {
        "coinPair": ['','BTC'],
        "exchanger": '',
        "timestamp": 0,
        "amount": 0,
        "price": 0,
        "transactionValue": 0,
        "fee": 0,
        "type": 'buy'
      }
    }
  },
  // computed: {
  //   getTransactionsList() {
  //     return transactions.list
  //   }
  // },
  methods: {
    saveTransaction() {
      console.log(transactions.list)
      transactions.list.push(this.tx)
      console.log(transactions.list)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
