<template lang="html">
  <div class="container">
    <transaction-register-form></transaction-register-form>
    <transactions-list></transactions-list>
    <portfolio-save-button></portfolio-save-button>
    <portfolio-upload></portfolio-upload>
  </div>
</template>

<script>
import transactionsList from './transaction-list'
import transactionRegisterForm from './transaction-register-form'
import portfolioSaveButton from './portfolio-save-button'
import portfolioUpload from './portfolio-upload'

export default {
  components: {
    transactionsList,
    transactionRegisterForm,
    portfolioSaveButton,
    portfolioUpload
  }
}
</script>

<style lang="css">
</style>
