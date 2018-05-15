import Vue from 'vue'
import router from './rotas'
import semantic from 'semantic-ui-vue'
import login from '@/telas/login'

Vue.component('login', login);
Vue.use(semantic);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  created() {
    this._router.push('/sys/login');
  },
  components: login
})
