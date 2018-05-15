<template>
  <sui-card class="centered raised blue separador">
    <carregar-pagina/>
    <sui-card-content>
      <sui-card-header >Bem Vindo</sui-card-header>
      <sui-card-meta>Projeto Programação Web</sui-card-meta>
      <sui-card-description >
        <sui-form v-on:submit.prevent="logar" ref="form">
          <sui-form-field>
            <label>Nome de usuário</label>
            <sui-input placeholder="User name" autocomplete="off" icon="user" icon-position="left" required v-model="usuario.login"/>
          </sui-form-field>
          <div class="ui right aligned">
            <router-link to="/sys/recuperar-senha" tabindex="-1">Esqueceu sua senha</router-link>
          </div>
          <sui-form-field>
            <label>Senha</label>
            <sui-input type="password" icon="lock" autocomplete="off" icon-position="left" required v-model="usuario.senha"/>
          </sui-form-field>
          <div class="g-recaptcha centered" data-sitekey="6Ldf4TAUAAAAAFCwBf00intpyw8FyZse_PoNUbCm"></div>
            <div>
              <button id="logar" class="fluid ui primary button" type="submit">Login
                <i v-if="carregando" class="spinner loading icon right aligned"></i>
              </button>
            </div>
        </sui-form>
      </sui-card-description>
    </sui-card-content>
  </sui-card>
</template>

<script>
import carregarPagina from '@/components/carregarPagina'

export default {
  name: "login",
  components: {
    carregarPagina
  },
  data(){
    return {
      usuario:{
        login: '',
        senha: ''
      },
      carregando: false
    }
  },
  methods: {
    logar: function (){
      var self = this;
      $(self.$refs["form"].$el).addClass('loading');

      setTimeout(function () {
        $(self.$refs["form"].$el).removeClass('loading');
        if (self.usuario.login != '' && self.usuario.senha != '') {
          self.$root.$router.push('/feed');
        }
      }, 1000);
    }
  }
}
</script>

<style>
  .ui.card.separador{
    margin-top: 3em
  }
</style>

