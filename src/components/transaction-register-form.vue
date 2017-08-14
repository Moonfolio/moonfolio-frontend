<template>
  <div class="transaction-register-form">
    <h2>transaction register form</h2>
    <form action="" method="get">
      <section>
        <label for="coinPair">Coin</label>
        <input type="text"
               name="coinPair"
               v-model="order.coin">
        <label for="select">Exchanger</label>
        <select v-model="order.exchanger">
          <option value="Bittrex">Bittrex</option>
          <option value="Kraken">Kraken</option>
          <option value="Generic">Generic</option>
        </select>
      </section>
      <section>
        <label for="input-text">Amount</label>
        <input type="number" name="input-text" id="input-text"
               placeholder="0" v-model="order.amount">
        <label for="input-text">Price</label>
        <input type="number" name="input-text" id="input-text"
               placeholder="0" v-model="order.price">
        <label for="input-text">Transaction value</label>
        <input type="number" name="input-text" id="input-text"
                placeholder="0" v-model="order.transactionValue">
        <label for="input-text">Fee</label>
        <input type="number" name="input-text" id="input-text"
               placeholder="0" v-model="order.fee">
      </section>
      <section>
         <label for="timestamp">date</label>
         <input type="date" name="timestamp" value="" v-model="order.timestamp">
      </section>
      <section>
        <input type="radio" name="radio-1" value="buy" v-model="order.type">
        <label for="radio-btn-1-1">buy</label>
        <input type="radio" name="radio-1" value="sell" v-model="order.type">
        <label for="">sell</label>
      </section>
      <button type="button" name="button" @click="addTransacion(order)">save</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    selectedMnf: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      order:{
        id: 0,
        coin: '',
        exchanger: '',
        timestamp: '2017-08-13',
        amount: 0,
        price: 0,
        transactionValue: 0,
        fee: 0,
        type: 'buy'
      }
    }
  },
  methods: {
    ...mapActions([
      'addTransacion'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
