import Vue from 'vue'
import Router from 'vue-router'
import Report from '@/components/report.vue'
import Mobile from '@/components/report_mobile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'reprot',
      component: Report
    },
    {
      path: '/index_mobile',
      name: 'mobile',
      component: Mobile
    }

  ]
})
