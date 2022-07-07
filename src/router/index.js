import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index/index.vue'
import Nav from '../views/nav/index.vue'
import User from '../views/user/index'
import Safe from '../views/safe/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home,
    children: [
      {
        path: '/user',
        name: 'User',
        component: User
      },
      {
        path: '/safe/index',
        name: 'Safe',
        component: Safe,
      }
    ]
  },
  {
    path:'/nav',
    component: Nav,
  }
]

const router = new VueRouter({
  routes
})

export default router
