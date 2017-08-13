<template lang="html">
  <div class="container">
    <transaction-register-form :selectedMnf="selectedMoonfolio"></transaction-register-form>
    <transactions-list></transactions-list>
    <portfolio-save-button></portfolio-save-button>
  </div>
</template>

<script>
import transactionsList from '../components/transaction-list'
import transactionRegisterForm from '../components/transaction-register-form'
import portfolioSaveButton from '../components/portfolio-save-button'

export default {
  components: {
    transactionsList,
    transactionRegisterForm,
    portfolioSaveButton
  },
  computed: {
    selectedMoonfolio() {
      // return this.$store.state.moonfolio.filter(function(mnf){
      //   return mnf.name === this.$store.state.selectedMoonfolio
      // })
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

<style lang="css">
</style>
