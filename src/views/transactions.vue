<template lang="html">
  <div class="transactions-container">
    <app-header></app-header>
    <position-extended :coin="coin"></position-extended>
    <p class="transactions-list-title">{{coin}} transactions</p>
    <div class="transactions-cards">
      <transaction-card  v-for="transaction in filterdList(coin)"
                         :transaction="transaction">
      </transaction-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import appHeader from '../components/header'
import positionExtended from '../components/position-extended'
import transactionCard from '../components/transaction-card'

export default {
  components: {
    appHeader,
    positionExtended,
    transactionCard
  },
  props: {
    coin: {
      type: String,
      required: true
    }
  },
  methods: {
    filterdList(coin) {
      return this.transactionsList.filter(transaction=>{
        console.log(transaction.amount);
        return transaction.coin === coin
      })
    }
  },
  computed: {
    ...mapGetters([
      'transactionsList'
    ])
  }
}
</script>

<style lang="css" scoped>
.transactions-container {
  height: 100%;
  background-color: #E8E8E8;
}
.transactions-list-title {
  padding-left: 1rem;
  font-size: 1.4rem;
}
.transactions-cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
