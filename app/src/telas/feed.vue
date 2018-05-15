<template>
<sui-grid>
  <sui-card-group itemsPerRow=3>
    <sui-card v-for="ocorrencia in Filtrados" :key="ocorrencia">      
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
  data() {
    return ocorrencias
  },
  created() {
    this.ocorrencias = this.$root.ocorrencias;
  },
  computed: {
    Filtrados: function () {
      return this.ocorrencias.filter(function (o) {
        return o
      })
    }
  }
}
</script>

