import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OfertaView from '@/views/OfertaView.vue'
import ProdutoView from '@/views/ProdutoView.vue'
import AdmView from '@/views/AdmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/oferta',
      name: 'oferta',
      component: OfertaView,
    },
    {
      path: '/contato',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
      {
    path: '/inspecionar/:id',
    name: 'inspecionar',
    component: ProdutoView,
    props: true
  },
      {
    path: '/adm',
    name: 'adm',
    component: AdmView,
    props: true
  }
  ],
})

export default router
