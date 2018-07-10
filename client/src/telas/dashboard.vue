<template>
<div id="dashboard">
  <sui-sidebar animation="push" class="inverted vertical menu" id="sidebar">
    <sui-menu-item link>
      <router-link to="/atualizar-perfil">
        <sui-image shape="circular" size="tiny" src="/img/wellington.jpg"/> {{this.$root.usuario.nome}}
      </router-link>
    </sui-menu-item>
    <router-link to="/sys/feed">
      <sui-menu-item @click="hideSideBar" link>
        Início<sui-icon name="home"/>
      </sui-menu-item>
    </router-link>
    <sui-menu-item @click="hideSideBar">
      <sui-menu-header>Cadastro</sui-menu-header>
      <router-link to="/sys/cadastro">
        <sui-menu-item @click="hideSideBar" link>
          Usuário<sui-icon name="user"/>
        </sui-menu-item>
      </router-link>
      <router-link to="/sys/ocorrencias">
        <sui-menu-item @click="hideSideBar" link>
          Ocorrências<sui-icon name="edit"/>
        </sui-menu-item>
      </router-link>
    </sui-menu-item>
    <sui-menu-item link @click="hideSideBar(); showModalSobre()">
      Sobre<sui-icon name="info circle"/>
    </sui-menu-item>
    <router-link to="/sys/login">
      <sui-menu-item @click="hideSideBar" link>
        Sair
      <sui-icon name="sign out alternate icon"/></sui-menu-item>
    </router-link>
  </sui-sidebar>

  <sui-menu fixed="left" inverted vertical class="tablet or lower hidden" id="menu_lateral" >
    <sui-menu-item link>
      <router-link to="/atualizar-perfil">
        <sui-image shape="circular" size="tiny" src="/img/wellington.jpg"/> {{this.$root.usuario.nome}}
      </router-link>
    </sui-menu-item>
    <router-link to="/sys/feed">
      <sui-menu-item @click="hideSideBar" link>
        Início<sui-icon name="home"/>
      </sui-menu-item>
    </router-link>
    <sui-menu-item @click="hideSideBar">
      <sui-menu-header>Cadastro</sui-menu-header>
      <router-link to="/sys/cadastro">
        <sui-menu-item @click="hideSideBar" link>
          Usuário<sui-icon name="user"/>
        </sui-menu-item>
      </router-link>
      <router-link to="/sys/ocorrencias">
        <sui-menu-item @click="hideSideBar" link>
          Ocorrências<sui-icon name="edit"/>
        </sui-menu-item>
      </router-link>
    </sui-menu-item>
    <sui-menu-item link @click="hideSideBar(); showModalSobre()">
      Sobre<sui-icon name="info circle"/>
    </sui-menu-item>
    <router-link to="/sys/login">
      <sui-menu-item @click="hideSideBar" link>
        Sair
      <sui-icon name="sign out alternate icon"/></sui-menu-item>
    </router-link>
  </sui-menu>

  <sui-menu fixed="top" inverted secundary id="top-menu" class="esquerda">
    <div class="ui container">
        <sui-menu-item icon=bars link position="left" onclick="$('#sidebar').sidebar('show')" class="tablet mobile only"></sui-menu-item>
        <sui-menu-item link>
          Objetos
        </sui-menu-item>
        <sui-menu-item link>
          Veículos
        </sui-menu-item>
        <sui-menu-item link>
          Pessoas
        </sui-menu-item>
        <sui-menu-item link>
          Animais
        </sui-menu-item>
      <sui-menu-menu position="right" class="mobile hidden">
        <sui-menu-item>
          <sui-input inverted icon="search" placeholder="Pesquisar..." />
        </sui-menu-item>
      </sui-menu-menu>
    </div>
    <div class="ui container mobile only">
      <sui-menu-item>
        <sui-input inverted icon="search" placeholder="Pesquisar..." />
      </sui-menu-item>
    </div>
  </sui-menu>

  <sui-container id="conteudo" class="esquerda">
    <router-view>
      <div class="ui message visible">
        <i class="close icon"></i>
        <div class="header">
          Welcome back!
        </div>
        <p>This is a special notification which you can dismiss if you're bored with it.</p>
      </div>
    </router-view>
  </sui-container>

  <sui-modal v-model="modal_sobre" size="tiny" aligned="top" id="modal" closeIcon>
    <sui-modal-header>Informações sobre o sistema</sui-modal-header>
      <sui-modal-content>
        <sui-modal-description>
          <p><b>Versão</b> 1.0.0</p>
          <p>
            <b>Integrantes:</b>
            <ul>
              <li><a href="https://github.com/wac0013"><sui-image avatar wrapped shape="circular" size="mini" src="/img/wellington.jpg"/></a>Wellington Alves</li>
              <li><a href="https://github.com/paulohg6"><sui-image avatar wrapped shape="circular" size="mini" src="/img/paulo.png"/></a>Paulo</li>
              <li><a href="https://github.com/kogzera"><sui-image avatar wrapped shape="circular" size="mini" src="/img/joao.jpg"/></a>João Victor</li>
              <li><a href="https://github.com/valchaqui"><sui-image avatar wrapped shape="circular" size="mini" src="/img/karoline.jpg"/></a>Karoline Walczak</li>
            </ul>
          </p>
          <p>
            <b>Tecnologias:</b>
            <sui-image-group size="mini">
              <a href="https://gulpjs.com"><sui-image spaced="left" wrapped size="mini" src="/img/gulp.png"/></a>
              <a href="https://vuejs.org/"><sui-image spaced="left" wrapped size="mini" src="/img/Vue.png"/></a>
              <a href="https://semantic-ui.com/"><sui-image spaced="left" wrapped size="mini" src="/img/semantic.png"/></a>
              <a href="https://semantic-ui-vue.github.io"><sui-image spaced="left" wrapped size="mini" src="/img/semantic-ui-vue.png"/></a>
              <a href="https://webpack.js.org"><sui-image spaced="left" wrapped size="mini" src="/img/webpack.png"/></a>
              <a href="https://www.w3schools.com/html/html5_intro.asp"><sui-image spaced="left" wrapped size="mini" src="/img/html.png"/></a>
              <a href="https://www.w3schools.com/css/"><sui-image spaced="left" wrapped size="mini" src="/img/css.png"/></a>
              <a href="https://www.javascript.com/"><sui-image spaced="left" wrapped size="mini" src="/img/js.png"/></a>
              <a href="https://nodejs.org/"><sui-image spaced="left" wrapped size="mini" src="/img/nodejs.png"/></a>
            </sui-image-group>0
        </p>
        </sui-modal-description>
      </sui-modal-content>
  </sui-modal>
</div>
</template>

<script>
  $(window).resize(function() {
    if ($(window).width() > 992) {
      $("#conteudo").css("margin-left",$("menu_lateral").width());
      $("#top-menu").css("margin-left",$("menu_lateral").width());
    }
  });
  if ($(window).width() > 992) {
    $("#conteudo").css("margin-left",$("menu_lateral").width());
    $("#top-menu").css("margin-left",$("menu_lateral").width());
  }
  export default {
    data(){
      return {
        modal_sobre: false
      }
    },
    mounted(){
      $('#conteudo').css("margin-top", "5em");
      // $('#menu_lateral').css("margin-top", $('#top-menu').height());
      // $('#conteudo').css("margin-left", $('#menu_lateral').height());
    },
    methods: {
      showModalSobre(){
        this.modal_sobre = !this.modal_sobre;
      },
      hideSideBar(){
        $('#sidebar').sidebar('hide')
      }
    }
  };
</script>

<style lang="css">
  .ui.modal{
    top: 20% !important
  }
@media only screen and (max-width: 767px) {
  [class*="mobile hidden"],
  [class*="tablet only"]:not(.mobile),
  [class*="computer only"]:not(.mobile),
  [class*="large screen only"]:not(.mobile),
  [class*="widescreen only"]:not(.mobile),
  [class*="or lower hidden"] {
    display: none !important;
  }
}
/* Tablet / iPad Portrait */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  [class*="mobile only"]:not(.tablet),
  [class*="tablet hidden"],
  [class*="computer only"]:not(.tablet),
  [class*="large screen only"]:not(.tablet),
  [class*="widescreen only"]:not(.tablet),
  [class*="or lower hidden"]:not(.mobile) {
    display: none !important;
  }
}
/* Computer / Desktop / iPad Landscape */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  [class*="mobile only"]:not(.computer),
  [class*="tablet only"]:not(.computer),
  [class*="computer hidden"],
  [class*="large screen only"]:not(.computer),
  [class*="widescreen only"]:not(.computer),
  [class*="or lower hidden"]:not(.tablet):not(.mobile) {
    display: none !important;
  }
}
/* Large Monitor */
@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  [class*="mobile only"]:not([class*="large screen"]),
  [class*="tablet only"]:not([class*="large screen"]),
  [class*="computer only"]:not([class*="large screen"]),
  [class*="large screen hidden"],
  [class*="widescreen only"]:not([class*="large screen"]),
  [class*="or lower hidden"]:not(.computer):not(.tablet):not(.mobile) {
    display: none !important;
  }
}
/* Widescreen Monitor */
@media only screen and (min-width: 1920px) {
  [class*="mobile only"]:not([class*="widescreen"]),
  [class*="tablet only"]:not([class*="widescreen"]),
  [class*="computer only"]:not([class*="widescreen"]),
  [class*="large screen only"]:not([class*="widescreen"]),
  [class*="widescreen hidden"],
  [class*="widescreen or lower hidden"] {
    display: none !important;
  }
}

@media only screen and (min-width: 992px){
  .esquerda#top-menu{
    margin-left: 15rem
  }
  .esquerda.ui.container{
    margin-left: 16rem !important;
    max-width: 90% !important
  }
}
</style>
