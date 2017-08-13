import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import LoadData from '@/views/load-data'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LoadData
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
