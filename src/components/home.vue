<template lang="html">
  <div class="container">
    <transaction-register-form></transaction-register-form>
    <transactions-list></transactions-list>
  </div>
</template>

<script>
import transactionsList from './transaction-list'
import transactionRegisterForm from './transaction-register-form'
export default {
  components: {
    transactionsList,
    transactionRegisterForm
  }
}
</script>

<style lang="css">
</style>
