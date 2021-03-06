import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat/:userId',
    name: 'Chat',
    component: () =>import('@/views/chat/Chat.vue')
  },
  {
    path: '/friend',
    name: 'Friend',
    component: () =>import('@/views/Friend.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () =>import('@/views/Me.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>import('@/views/Login.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
