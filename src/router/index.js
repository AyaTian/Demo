import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/products/posters',
    name: 'Posters',
    component: () => import(/* webpackChunkName: "poster" */ '../views/Posters.vue')
  },
  {
    path: '/products/flyers',
    name: 'Flyers',
    component: () => import(/* webpackChunkName: "folder" */ '../views/Flyers.vue')
  },
  {
    path: '/products/businessCards',
    name: 'BusinessCards',
    component: () => import(/* webpackChunkName: "businessCards" */ '../views/BusinessCards.vue')
  },
  {
    path: '/products/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
