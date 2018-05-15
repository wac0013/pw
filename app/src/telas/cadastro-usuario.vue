<template lang="html">
  <sui-form>
    <sui-form-field>
      <label>Nome</label>
      <input placeholder="Ex: João Victor" >
    </sui-form-field>
    
    <sui-form-field>
      <label>Sobrenome</label>
      <input placeholder="Ex: Dias de Lima Brandão" >
    </sui-form-field>
    
    <sui-form-field>
      <label>E-mail</label>
      <input placeholder="Ex: user123@hotmail.com" >
    </sui-form-field>
    
    <sui-form-field>
      <label>Telefone</label>
      <input placeholder="Ex: (##)9####-####" >
    </sui-form-field>
    
    <sui-form-field>
      <label>Bairro</label>
      <input>
    </sui-form-field>
    
    <sui-form-field>
      <label>Cidade</label>
      <input>
    </sui-form-field>
    
    
    <sui-form-field>
      <label>Estado</label>
      <input placeholder="Ex: GO, SP, DF" >
    </sui-form-field>
    
    <sui-form-field>
      <label>Logradouro</label>
      <input>
    </sui-form-field>
    
    <sui-form-field>
      <label>Número</label>
      <input>
    </sui-form-field>
    
    <sui-form-field>
      <label>Complemento</label>
      <input placeholder="Ex: Quadra, Lote" >
    </sui-form-field>
    
    <sui-form-field>
      <label>Digite sua senha</label>
      <input placeholder="Ex: A senha deve conter ao menos 6 dígitos" >
    </sui-form-field>
    
    <sui-form-field>
      <label>Digite novamente sua senha</label>
      <input>
    </sui-form-field>
    
    <sui-button animated="vertical">
      <sui-button-content hidden>Salvar</sui-button-content>
      <sui-button-content visible>
        <sui-icon name="check" />
      </sui-button-content>
    </sui-button>
  </sui-form>
</template>

<script>
export default {
  name: 'cadastro-usuario',
};
</script>
