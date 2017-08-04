<template lang="html">
  <div class="container">
    <h2>transactions list</h2>
    {{this.tx_list}}
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
