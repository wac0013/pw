<template>
<sui-grid>
  <sui-card-group itemsPerRow=3>
    <sui-card v-for="ocorrencia in this.$root.ocorrencias" :key="ocorrencia.categoria">      
      <sui-image src="/img/sem-imagem.png" v-if="ocorrencia['imagens'][0] == undefined"/>
      <sui-image :src="ocorrencia['imagens'][0]" v-else />
      <sui-card-content>
        <sui-card-header>{{ocorrencia['categoria']}}</sui-card-header>
        <sui-card-meta>{{ocorrencia['telefone_contato']}}</sui-card-meta>
        <sui-card-description>{{ocorrencia['descricao']}}</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="money" />
        {{ocorrencia['recompensa'].toLocaleString('pt-BR')}}</sui-card-content>
    </sui-card>
  </sui-card-group>
</sui-grid>
</template>

<script>
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

