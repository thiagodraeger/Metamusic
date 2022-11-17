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
        path: '/bandas/:id',
        name: 'BandaDetail',
        component: () => import('@/views/Base.vue')
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/noticias/:id',
        name: 'NoticiaDetail',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/noticias/n1',
        name: 'n1',
        component: () => import('@/views/noticias/n1.vue')
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

