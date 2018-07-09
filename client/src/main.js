import Vue from 'vue'
import router from './rotas'
import semantic from 'semantic-ui-vue'
import login from '@/telas/login'
import toastr from 'toastr';

toastr.options = {
  'closeButton': true,
  'debug': false,
  'newestOnTop': false,
  'progressBar': false,
  'positionClass': 'toast-top-right',
  'preventDuplicates': false,
  'onclick': null,
  'showDuration': '300',
  'hideDuration': '1000',
  'timeOut': '5000',
  'extendedTimeOut': '1000',
  'showEasing': 'swing',
  'hideEasing': 'linear',
  'showMethod': 'fadeIn',
  'hideMethod': 'fadeOut'
}

Vue.use(semantic);
var ocorrencias = require('./ocorrencias.json');

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  data() {
    return {
      ocorrencias: ocorrencias,
      usuario: {},
      notificacao: toastr
    }
  },
  router,
  mounted() {
    this._router.push('/sys/login');
  },
  components: {login}
})
