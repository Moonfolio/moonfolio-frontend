<template lang="html">
  <div class="container">
    <app-header></app-header>
    <transaction-register-form :selectedMnf="selectedMoonfolio"></transaction-register-form>
    <positions-list></positions-list>
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
</style>
