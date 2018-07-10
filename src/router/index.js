import Vue from 'vue'
import Router from 'vue-router'
import Cover from '@/components/cover/cover'
import One from '@/components/one/one'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cover',
      component: Cover
    },
    {
      path: '/one',
      name: 'One',
      component: One
    }
  ]
})
