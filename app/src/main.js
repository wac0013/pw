import Vue from 'vue'
import router from './rotas'
import semantic from 'semantic-ui-vue'
import login from '@/telas/login'

Vue.use(semantic);
var ocorrencias = require('./ocorrencias.json');

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  data() {
    return {
      ocorrencias: ocorrencias,
      usuario: {}
    }
  },
  router,
  mounted() {
    this._router.push('/sys/login');
  },
  components: {login}
})
