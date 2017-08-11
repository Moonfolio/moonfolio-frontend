<template lang="html">
  <div class="container">
    <h2>transactions list</h2>
    <table>
      <thead>
          <tr>
              <th>Coin</th>
              <th>Exchanger</th>
              <th>Amount</th>
              <th>Type</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="tx in tx_list">
              <td>{{tx.coinPair[0]}}</td>
              <td>{{tx.exchanger}}</td>
              <td>{{tx.amount}}</td>
              <td>{{tx.type}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {transactions} from '../transactionsStore.js'
export default {
  data() {
    return {
      tx_list: transactions.list
    }
  }
}
</script>

<style lang="css">
</style>
