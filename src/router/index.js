import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/product'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/wall',
      name: 'wall',
      component: () => import('../views/Wall.vue')
    },
    {
      path: '/shower/:id',
      name: 'shower',
      component: () => import('../views/ShowerProduct.vue')
    },
  ]
})

export default router
