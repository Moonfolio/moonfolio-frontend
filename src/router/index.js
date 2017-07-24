import Vue from 'vue'
import Router from 'vue-router'
import transaction from '@/components/transaction-register-form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'transaction-register-form',
      component: transaction
    }
  ]
})
