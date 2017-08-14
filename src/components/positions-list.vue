<template lang="html">
  <div class="container">
    <h2>positions list</h2>
    <table>
      <thead>
          <tr>
              <th>Coin</th>
              <th>purchase price avg.</th>
              <th>Investment</th>
              <th>Price</th>
              <th>Profits</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="tx in positionsList">
              <td>{{tx.coinPair[0]}}</td>
              <td>{{tx.amount}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
      ...mapGetters([
      'positionsList'
    ])
  }
}
</script>

<style lang="css">
</style>
