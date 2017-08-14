<template lang="html">
  <div class="container">
    <a id="downloadAnchorElem" @click="downloadMoonfolio"
                               :href="dataStr"
                               :download="portfolioName">download</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return {
      portfolioName: 'moonfolio.json',
      dataStr:''
    }
  },
  methods: {
    ...mapGetters([
      'moonfolio'
    ]),
    downloadMoonfolio() {
      this.dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.moonfolio()))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
