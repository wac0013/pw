<template>
<sui-grid>
  <sui-card-group>
    <sui-card v-for="ocorrencia in ocorrencias" :key="ocorrencia.idOcorrencia" @click="detalhar(ocorrencia)">
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
  <sui-modal v-model="show_modal" size="tiny" aligned="top" id="modal_ocorrencia" closeIcon>
    <sui-modal-header>Informações sobre o caso</sui-modal-header>
    <sui-modal-content image>
      <sui-image wrapped size="large" src="/img/sem-imagem.png" v-if="show_ocorrencia.imagem == undefined"/>
      <sui-image wrapped size="large" :src="show_ocorrencia.imagem" v-else/>
        <sui-modal-description>
          <sui-header>{{show_ocorrencia.categoria}}</sui-header>
          <p>{{show_ocorrencia.descricao}}</p>
        </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
      <div is="sui-button-group" floated="left">
        <sui-button icon="edit" color="blue"/>
        <sui-button-or/>
        <sui-button icon="trash" negative/>
      </div>
    </sui-modal-actions>
  </sui-modal>
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
      ocorrencias: [],
      show_ocorrencia: {},
      show_modal: false
    }
  },
  mounted(){
    var self = this;

    axios.get('/api/get_feed')
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
      this.show_modal = !this.show_modal;
      this.show_ocorrencia = ocorrencia;
    },
    excluir(ocorrencia){

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
