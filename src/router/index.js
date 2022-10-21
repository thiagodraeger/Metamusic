import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Blank'),
    children: [
      {
        path: '/',
        name: 'Login',
        component: Login
      },
      {
        path: '/cadastro',
        name: 'Cadastro',
        component: () => import('../views/Cadastro.vue')
      },
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Default'),
    meta:{
      requiresAuth: false,
    },
    children: [
      {
        path: '/perfil',
        name: 'Perfil',
        component: () => import('../views/Perfil.vue')
      },
      {
        path: '/bandas',
        name: 'Bandas',
        component: () => import('@/views/Bandas.vue')
      },
      {
        path: '/artistas/:id',
        name: 'ArtistaDetail',
        component: () => import('@/views/Base.vue')
      },
      {
        path: '/Shaman',
        name: 'Shaman',
        component: () => import('@/views/Shaman.vue')
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/noticias/n1',
        name: 'n1',
        component: () => import('@/views/noticias/n1.vue')
      },
      {
        path: '/noticias/n2',
        name: 'n2',
        component: () => import('@/views/noticias/n2.vue')
      },
      {
        path: '/noticias/n3',
        name: 'n3',
        component: () => import('@/views/noticias/n3.vue')
      },
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router

