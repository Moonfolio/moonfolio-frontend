<template lang="html">
  <div class="container">
    <h2>positions list</h2>
    <table>
      <thead>
          <tr>
              <th>Coin // </th>
              <th>transactions number // </th>
              <th>quantity // </th>
              <th>price avg. // </th>
              <th>Investment //</th>
              <th>Actual Price // </th>
              <th>Profits</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="position in positionsList">
              <td>{{position.coin}}</td>
              <td>{{position.transactionNumber}}</td>
              <td>{{position.quantity}}</td>
              <td>---</td>
              <td>{{position.totalInvestment}}</td>
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
  computed: {
      ...mapGetters([
      'positionsList'
    ])
  }
}
</script>

<style lang="css">
</style>
