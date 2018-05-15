import Router from 'vue-router'
import Vue from 'vue'
import login from '@/telas/login'
import dashboard from '@/telas/dashboard'
import atualizarPerfil from '@/telas/atualizar-perfil'
import casoDetalhado from '@/telas/caso-detalhado'
import index from '@/site/index'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/sys/login',
      name: 'Login',
      component: login
    },
    {
      path: '/sys/dashboard',
      name: 'Dashboard',
      component: dashboard
    },
    {
      path: '/sys/atualizar-perfil',
      name: 'atualizarPerfil',
      component: atualizarPerfil
    },
    {
      path: '/sys/caso-detalhado',
      name: 'CasoDetalhado',
      component: casoDetalhado
    }
  ]
})
