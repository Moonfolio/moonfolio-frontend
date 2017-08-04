import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import transaction from '@/components/transaction-register-form'
import tx_list from '@/components/transaction-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
