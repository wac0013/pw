<template lang="html" >
  <sui-form v-on:submit.prevent class="container" style="width: 40%;margin:0 auto;">
    <sui-form-field>
      <label>Categoria</label>
      <input placeholder="Digite aqui..." >
    </sui-form-field>
    <sui-form-field>
      <label>Local onde foi perdido</label>
      <input placeholder="Digite aqui..." >
    </sui-form-field>
    <sui-form-field>
      <label>Descrição</label>
      <input placeholder="Digite aqui..." >
    </sui-form-field>
    <sui-form-fields inline>
      <label>Oferece recompensa?</label>
      <sui-form-field>
        <sui-checkbox
          label="Sim"
          radio
          value="1"
          v-model="value"
        />
        </sui-form-field>
        <sui-form-field>
          <sui-checkbox
            label="Não"
            radio
            value="2"
            v-model="value"
          />
        </sui-form-field>
    </sui-form-fields>
    <sui-form-field>
      <label>Telefone para contato</label>
      <input type="number" placeholder="(99) 99999-9999" >
    </sui-form-field>

    <sui-form-fields inline>
      <label>Deseja enviar uma imagem?</label>
      <sui-form-field>
        <sui-checkbox
          label="Sim"
          radio
          value='true'
          v-model="enviarImagem"
        />
        </sui-form-field>
        <sui-form-field>
          <sui-checkbox
            label="Não"
            radio
            value='false'
            v-model="enviarImagem"
            v-on:click="enviarImagem=false"
          />
        </sui-form-field>
    </sui-form-fields>

    <template v-if="enviarImagem">
      <sui-form-field>
        <input type="file">
      </sui-form-field>
    </template>

    <router-link to="/feed"><sui-button fluid primary type="submit">Salvar ocorrência</sui-button></router-link>

  </sui-form>
</template>

<script>
  export default {
    name: 'ocorrencia',
    data: function() {
      return { 
        value: '1',
        enviarImagem: false
      }
    }
  };
</script>

<style scoped>

</style>
