<template lang="html">
  <div class="container">
    <transaction-register-form></transaction-register-form>
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
  }
}
</script>

<style lang="css">
</style>
