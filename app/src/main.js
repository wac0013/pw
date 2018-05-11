import Vue from 'vue'
import principal from './telas/principal'
import router from './rotas'
import semantic from 'semantic-ui-vue'

Vue.component('principal', principal);
Vue.use(semantic);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: principal
})
