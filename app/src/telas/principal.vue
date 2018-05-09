<template>
<sui-container text-align="left" id="principal"> 
  <!--<carregar-pagina/> -->
  <sui-grid >
    <router-view></router-view>
  </sui-grid>
</sui-container>
</template>
<script>
  import login from './login';
  import dashboard from './dashboard';  
  import carregar_pagina from '@/components/carregar-pagina';
  import * as c from '@/utils/constantes';

  export default {
    components: {carregar_pagina, login, dashboard},
    data () {
      return {
      }
    },
    created() {
      this.$root._router.push('/sys/login');
    }
  };
</script>

