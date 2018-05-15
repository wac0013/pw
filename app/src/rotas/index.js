import Router from 'vue-router'
import Vue from 'vue'
import login from '@/telas/login'
import dashboard from '@/telas/dashboard'
import index from '@/site/index'
import ocorrencia from '@/telas/ocorrencia'
import atualizarPerfil from '@/telas/atualizarPerfil'
import casoDetalhado from '@/telas/caso-detalhado'
import feed from '@/telas/feed'

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
      component: dashboard,
      children: [
        {
          path: '/atualizar-perfil',
          name: 'atualizarPerfil',
          component: atualizarPerfil
        },
        {
          path: '/feed',
          name: 'feed',
          component: feed
        },
        {
          path: '/ocorrencias',
          name: 'Ocorrencias',
          component: ocorrencia
        },
        {
          path: '/sys/caso-detalhado',
          name: 'CasoDetalhado',
          component: casoDetalhado
        }
      ]
    },
    {
      path: '/sys/atualizar-perfil',
      name: 'atualizarPerfil',
      component: atualizarPerfil
    },
  ]
})
