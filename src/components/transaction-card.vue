<template lang="html">
  <div class="transaction-container">
    <label for="">amount</label>
    <span class="amount">{{transaction.amount}}</span>
    <label for="">price</label>
    <span class="price">{{transaction.price}}<span class="currency"> BTC</span></span>
    <span class="exchanger">Exchanger: {{transaction.exchanger}}</span>
  </div>
</template>

<script>
export default {
  props: {
    transaction: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.transaction-container {
  width: 15rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  margin: 1rem;
}
.price,
.amount{
  font-family: 'Lato', sans-serif;
  font-size: 2.3rem;
}
.currency {
  font-family: 'Roboto Mono', monospace;
  font-size: .8rem;
}
.exchanger {
  font-size: .8rem;
}
</style>
