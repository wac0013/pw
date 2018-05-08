<template>
<div id="principal"> 
  <!--<carregar-pagina/> -->
  <div>
    <router-view></router-view>
  </div> 
</div>
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
      this.$root
    }
  };
</script>

