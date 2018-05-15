<template lang="html">
<div>
  <div is="sui-container">
    <sui-image src="static/img/profiles/masculino_vazio.jpg" size="standard" />
    <sui-image src="static/img/profiles/feminino_vazio.jpg" size="standard" />
    <sui-image src="static/img/controller.png" size="standard" />
  </div>
  <sui-form>
    <sui-form-field>
      <label>Data de publicação: </label>
      <input placeholder="data"/>
    </sui-form-field>
    <sui-form-field>
      <label>Local onde foi perdido</label>
      <input placeholder="local" >
    </sui-form-field>
    <sui-form-field>
      <label>Descrição do caso</label>
      <input placeholder = "Detalhes do caso." >
    </sui-form-field>
  </sui-form>
    <div>
    <sui-card>
      <sui-image src="static/img/profiles/masculino_vazio.jpg" />
      <sui-card-content>
        <sui-card-header>João Victor</sui-card-header>
        <sui-card-meta>Data de ingresso no aplicativo</sui-card-meta>
        <sui-card-description>Detalhes do usuário</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="mail" />
        10 Casos registrados</sui-card-content>
    </sui-card>
  </div>
  </div>
</template>

<script>
export default {
  name: 'caso-detalhado'
};
</script>
