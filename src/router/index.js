import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '~/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quests',
    name: 'quests',
    component: () => import(/* webpackChunkName: "about" */ '~/views/Quests.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "about" */ '~/views/Users.vue')
  },
  {
    path: '/black-lists',
    name: 'black-lists',
    component: () => import(/* webpackChunkName: "about" */ '~/views/BlackList.vue')
  },
  {
    path: '/call-center',
    name: 'call-center',
    component: () => import(/* webpackChunkName: "about" */ '~/views/CallCenter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
