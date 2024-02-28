import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Fastcal from '../views/Fastcal.vue'
import Formula from '../views/Formula.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/formula',
      name: 'formula',
      component: Formula
    },
    {
      path: '/typing',
      name: 'typing',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Typing.vue')
    },
    {
      path: '/cal',
      name: 'cal',
      component: Fastcal
    },
  ]
})

export default router
