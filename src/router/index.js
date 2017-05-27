import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
        path: '/Detail', component: require('@/components/Detail.vue')
    },
    {
        path: '/login', component: require('@/components/Login.vue')
    },
    {
        path: '/Author', component: require('@/components/Author.vue')
    },
    {
        path: '/Collections', component: require('@/components/Collections.vue')
    }
  ]
})