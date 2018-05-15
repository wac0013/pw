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
          v-model="ofereceRecompensa"
        />
        </sui-form-field>
        <sui-form-field>
          <sui-checkbox
            label="Não"
            radio
            value="2"
            v-model="ofereceRecompensa"
          />
        </sui-form-field>
    </sui-form-fields>

    <sui-form-field v-if="ofereceRecompensa==1">
      <label>Valor da recompensa:</label>
      <input type="number" placeholder="100,00">
    </sui-form-field>

    <sui-form-field>
      <label>Telefone para contato</label>
      <the-mask :mask="['(##) ####-####', '(##) #####-####']" placeholder="(99) 99999-9999"/>
    </sui-form-field>

    <sui-form-fields inline>
      <label>Deseja enviar uma imagem?</label>
      <sui-form-field>
        <sui-checkbox
          label="Sim"
          radio
          value='1'
          v-model="enviarImagem"
        />
        </sui-form-field>
        <sui-form-field>
          <sui-checkbox
            label="Não"
            radio
            value='2'
            v-model="enviarImagem"
          />
        </sui-form-field>
    </sui-form-fields>

    <template v-if="enviarImagem==1">
      <sui-form-field>
        <input type="file">
      </sui-form-field>
    </template>

    <router-link to="/feed"><sui-button fluid primary type="submit">Salvar ocorrência</sui-button></router-link>

  </sui-form>
</template>

<script>
  import {TheMask} from 'vue-the-mask';

  export default {
    name: 'ocorrencia',
    components: {
      TheMask
    },
    data() {
      return {
        enviarImagem: 0,
        ofereceRecompensa: 0
      }
    }
  };
</script>

<style scoped>

</style>
