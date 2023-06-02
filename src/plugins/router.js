import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../pages/Home.vue"

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: Home
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: () => import('../pages/Contact.vue')
    }
  ]
})

export default router
