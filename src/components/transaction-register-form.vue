<template>
  <div class="transaction-register-form">
    <h1>{{componentName}}</h1>
    <form action="" method="get">
      <section>
        <label for="coinPair">Coin</label>
        <input type="text"
               name="coinPair"
               v-model="coinPair[0]">
        <label for="select">Exchanger</label>
        <select v-model="exchanger">
          <option value="Bittrex">Bittrex</option>
          <option value="Kraken">Kraken</option>
          <option value="Generic">Generic</option>
        </select>
      </section>
      <section>
        <label for="input-text">Amount</label>
        <input type="text" name="input-text" id="input-text"
               placeholder="0">
        <label for="input-text">Price</label>
        <input type="text" name="input-text" id="input-text"
               placeholder="0">
        <label for="input-text">Transaction value</label>
        <input type="text" name="input-text" id="input-text"
                placeholder="0">
        <label for="input-text">Fee</label>
        <input type="text" name="input-text" id="input-text"
               placeholder="0">
      </section>
      <section>
         <label for="timestamp">date</label>
         <input type="date" name="timestamp" value="" v-model="timestamp">
      </section>
      <section>
        <input type="radio" name="radio-1" value="buy" v-model="type">
        <label for="radio-btn-1-1">buy</label>
        <input type="radio" name="radio-1" value="sell" v-model="type">
        <label for="">sell</label>
      </section>
    </form>
    <hr>
    <div>coinPair: {{coinPair}}</div>
    <div>exchanger: {{exchanger}}</div>
    <div>timestamp: {{new Date(timestamp)}}</div>
    <div>type: {{type}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      componentName: 'transaction',
      coinPair: ['','BTC'],
      exchanger: '',
      timestamp: 0,
      amount: 0,
      price: 0,
      transactionValue: 0,
      fee: 0,
      type: 'buy'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
