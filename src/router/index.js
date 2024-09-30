import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('../views/market/market.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/info/info.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/mine/mine.vue')
    }
  ]
})

export default router
