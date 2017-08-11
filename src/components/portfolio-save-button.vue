<template lang="html">
  <div class="container">
    <a id="downloadAnchorElem" @click="downloadPortfolio"
                               :href="dataStr"
                               :download="portfolioName">download</a>
  </div>
</template>

<script>
import {transactions} from '../transactionsStore.js'

export default {
  data(){
    return {
      portfolio: transactions.list,
      portfolioName: 'my_first.moonfolio.json',
      dataStr:''
    }
  },
  methods: {
    downloadPortfolio() {
      console.log(this.portfolio)
      this.dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.portfolio))
    }
  }
}
</script>

<style lang="css">
</style>
