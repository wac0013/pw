<template lang="html">
  <sui-form>
    <sui-form-field>
      <label>Nome</label>
         <input placeholder="Nome" >
    </sui-form-field>
    <sui-form-field>
      <label>Bairro</label>
         <input placeholder="Bairro" >
    </sui-form-field>
    <sui-form-field>
      <label>Cidade</label>
         <input placeholder="Cidade" >
    </sui-form-field>
    <sui-form-field>
      <label>Estado</label>
         <input placeholder="Estado" >
    </sui-form-field>
    <sui-form-field>
      <label>Telefone</label>
        <the-mask :mask="['(##) ####-####', '(##) #####-####']" placeholder="(99) 99999-9999"/>
    </sui-form-field>
    <sui-form-field>
      <label>Detalhes importantes</label>
      <input placeholder="Descrição..." >
    </sui-form-field>
    <sui-button type="submit">Salvar</sui-button>
  </sui-form>
</template>

<script>
import {TheMask} from 'vue-the-mask'

export default {
  name: 'atualizar-perfil',
  components: {
    TheMask
  }
};
</script>
