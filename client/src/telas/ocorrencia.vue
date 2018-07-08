<template lang="html" >
  <sui-form @submit.prevent="gravar_ocorrencia" class="container" style="width: 40%;margin:0 auto;">
    <sui-form-fields inline>
      <label>Tipo de ocorrencia</label>
      <sui-form-field required>
        <sui-checkbox
          label="Perdeu"
          radio
          value="P"
          v-model="perdido"
        />
        </sui-form-field>
        <sui-form-field>
          <sui-checkbox
            label="Encontrou"
            radio
            value="E"
            v-model="perdido"
          />
        </sui-form-field>
    </sui-form-fields>
    <sui-form-field>
      <label>Categoria</label>
      <input placeholder="Digite aqui..." v-model="ocorrencia.categoria">
    </sui-form-field>
    <sui-form-field>
      <label>Local onde foi perdido/encontrado</label>
      <input placeholder="Digite aqui..." v-model="ocorrencia.local">
    </sui-form-field>
    <sui-form-field>
      <label>Descrição</label>
      <input placeholder="Digite aqui..." v-model="ocorrencia.descricao">
    </sui-form-field>
    <sui-form-fields inline v-if="perdido==1">
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

    <sui-form-field v-if="ofereceRecompensa==1 && perdido=='P'">
      <label>Valor da recompensa:</label>
      <input type="number" placeholder="100,00" v-model="ocorrencia.recompensa">
    </sui-form-field>

    <sui-form-field>
      <label>Telefone para contato</label>
      <the-mask :mask="['(##) ####-####', '(##) #####-####']" placeholder="(99) 99999-9999" v-model="ocorrencia.telefone" />
    </sui-form-field>

    <sui-form-fields inline v-if="perdido=='P'">
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

    <template v-if="enviarImagem==1 && perdido=='P'">
      <sui-form-field>
        <input type="file" >
      </sui-form-field>
    </template>

    <sui-button fluid primary type="submit">Salvar ocorrência</sui-button>

  </sui-form>
</template>

<script>
  import {TheMask} from 'vue-the-mask';
  import axios from 'axios';

  export default {
    name: 'ocorrencia',
    components: {
      TheMask
    },
    data() {
      return {
        enviarImagem: 0,
        ofereceRecompensa: 0,
        perdido: 'P',
        ocorrencia: {
          descricao: '',
          categoria: '',
          local: '',
          recompensa: 0,
          telefone: '',
          statusPerdido: this.perdido,
          imagem: null
        }
      }
    },
    methods: {
      gravar_ocorrencia: function(e){
        if (e) e.preventDefault();
        var self = this;
        self.ocorrencia.statusPerdido = self.perdido;

        axios.post('/gravar_ocorrencia', self.ocorrencia)
          .then(resposne => {
            var retorno = response.data.retorno;
            if (status != 200 || retorno.erro) {
              alert('Ocorrecu algum erro: ' + erro);
            } else {
              this.$root.router.push('/feed');
            }
          })
          .catch(erro => {
            alert('Ocorrecu algum erro: ' + erro);
          });
      }
    }
  };
</script>

<style scoped>

</style>
