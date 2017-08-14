import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import LoadData from '@/views/load-data'
import BackSelection from '@/views/back-selection'
import WorkInProgress from '@/views/work-in-progress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BackSelection
    },
    {
      path: '/privacy-info',
      component: WorkInProgress
    },
    {
      path: '/dropbox',
      component: WorkInProgress
    },
    {
      path: '/local',
      component: LoadData
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
