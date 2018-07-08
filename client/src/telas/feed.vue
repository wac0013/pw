<template>
<sui-grid>
  <sui-card-group>
    <sui-card v-for="ocorrencia in ocorrencias" :key="ocorrencia.idOcorrencia ">
      <sui-image src="/img/sem-imagem.png" v-if="ocorrencia.imagem == undefined" @click="detalhar(ocorrencia)"/>
      <sui-image :src="ocorrencia.imagem" v-else  @click="detalhar(ocorrencia)"/>
      <sui-card-content>
        <sui-card-header>{{ocorrencia.categoria}}</sui-card-header>
        <sui-card-meta>{{ocorrencia.telefone}}</sui-card-meta>
        <sui-card-description>{{ocorrencia.descricao}}</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="money" />
        {{ocorrencia.recompensa.toLocaleString('pt-BR')}}</sui-card-content>
    </sui-card>
  </sui-card-group>
</sui-grid>
</template>

<script>
import axios from 'axios';

export default {
  name: 'feed',
  props: {
    filtro: {
      type: String,
      validator(v) {
        return ['veículos', 'animais', 'pessoas', 'objetos', 'todos'].indexOf(v) !== -1
      },
      default: 'todos'
    }
  },
  data(){
    return {
      ocorrencias: []
    }
  },
  mounted(){
    var self = this;

    axios.get('/get_feed')
      .then(response => {
        var retorno = response.data.retorno;
        if (retorno.erro) {
          alert('Ocorreu algum erro: ' + retorno.erro);
        } else {
          self.ocorrencias = retorno.objeto;
        }
      })
      .catch(e => {
        alert('Ocorreu algum erro: ' + retorno.erro);
      });
  },
  methods:{
    detalhar(ocorrencia){

    }
  }/*,
  computed: {
    Filtrados: function () {
      return this.$root.ocorrencias.filter(function (o) {
        if (this.filtro != 'todos') {
          return o['categoria'] == filtro;
        } else {
          return o;
        }
      })
    }
  }*/
}
</script>
