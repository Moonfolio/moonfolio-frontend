<template lang="html">
  <div class="home-container">
    <app-header></app-header>
    <positions-list></positions-list>
    <transaction-register-form :selectedMnf="selectedMoonfolio"></transaction-register-form>
  </div>
</template>

<script>
import positionsList from '../components/positions-list'
import transactionRegisterForm from '../components/transaction-register-form'
import appHeader from '../components/header'

export default {
  components: {
    appHeader,
    positionsList,
    transactionRegisterForm
  },
  computed: {
    selectedMoonfolio() {
      let mnfList = this.$store.state.moonfolio
      let mnfName = this.$store.state.selectedMoonfolio
      let selectedMoonfolio;
      for (var i = 0; i < mnfList.length; i++) {
        if(mnfList[i].name === mnfName) {
          selectedMoonfolio = mnfList[i]
        }
      }
      return selectedMoonfolio
    }
  }
}
</script>

<style lang="css" scoped>
.home-container {
  height: 100%;
  background-color: #E8E8E8;
}
</style>
