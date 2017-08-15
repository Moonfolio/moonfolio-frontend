<template lang="html">
  <div>
    <h2>positions list</h2>
    <table>
      <thead>
          <tr>
              <th>Coin// </th>
              <th>quantity// </th>
              <th>price avg.// </th>
              <th>Investment BTC//</th>
              <th>Current Price// </th>
              <th>Achievable BTC// </th>
              <th>Achievable USD//</th>
              <th>profit-loss % //</th>
              <th>profit-loss BTC//</th>
              <th>profit-loss USD</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="position in positionsList" @click="gotToTransactions(position.coin)">
              <td>{{position.coin}}</td>
              <td>{{position.quantity}}</td>
              <td>---</td>
              <td>{{position.totalInvestment}}</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    gotToTransactions(coin) {
      this.$router.push({name: 'transactions', params: {coin}})
    }
  },
  computed: {
    ...mapGetters([
      'positionsList'
    ])
  }
}
</script>

<style lang="css">
</style>
