<template lang="html">
  <div class="btn-container">
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
.btn-container {
  font-size: .8rem;
  text-align: center;
  background-color: #F05C5C;
  padding: .3rem;
  border-radius: 30px;
  align-self: flex-end;
}
#downloadAnchorElem {
  color: #e8e8e8;
  font-weight: bold;
}
</style>
