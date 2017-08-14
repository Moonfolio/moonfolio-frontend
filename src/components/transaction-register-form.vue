<template>
  <div class="transaction-register-form">
    <h2>transaction register form</h2>
    <form action="" method="get">
      <section>
        <label for="coinPair">Coin</label>
        <input type="text"
               name="coinPair"
               v-model="transaction.coin">
        <label for="select">Exchanger</label>
        <select v-model="transaction.exchanger">
          <option value="Bittrex">Bittrex</option>
          <option value="Kraken">Kraken</option>
          <option value="Generic">Generic</option>
        </select>
      </section>
      <section>
        <label for="input-text">Amount</label>
        <input type="number" name="input-text" id="input-text"
               placeholder="0" v-model="transaction.amount">
        <label for="input-text">Price</label>
        <input type="number" name="input-text" id="input-text"
               placeholder="0" v-model="transaction.price">
        <label for="input-text">Transaction value</label>
        <input type="number" name="input-text" id="input-text"
                placeholder="0" v-model="transaction.transactionValue">
        <label for="input-text">Fee</label>
        <input type="number" name="input-text" id="input-text"
               placeholder="0" v-model="transaction.fee">
      </section>
      <section>
         <label for="timestamp">date</label>
         <input type="date" name="timestamp" value="" v-model="transaction.timestamp">
      </section>
      <section>
        <input type="radio" name="radio-1" value="buy" v-model="transaction.type">
        <label for="radio-btn-1-1">buy</label>
        <input type="radio" name="radio-1" value="sell" v-model="transaction.type">
        <label for="">sell</label>
      </section>
      <button type="button" name="button" @click="updateData(transaction)">save</button>
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
      transaction:{
        id: 0,
        coin: '',
        exchanger: '',
        timestamp: '2017-08-13',
        amount: '',
        price: '',
        transactionValue: '',
        fee: '',
        type: 'buy'
      }
    }
  },
  methods: {
    ...mapActions([
      'addTransacion'
    ]),
    updateData(transaction) {
      this.$store.dispatch('addTransaction', transaction)
      this.$store.dispatch('updatePosition', transaction)
      this.$store.dispatch('updateCoinsList', transaction)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
