<template lang="html">
    <div id="cadastro">
        <sui-form>
            <sui-form-field>
                <label>Nome</label>
                <input>
            </sui-form-field>
            <sui-form-field>
                <label>Sobrenome</label>
                <input>
            </sui-form-field>
            <sui-form-field>
                <label>E-mail</label>
                <input>
            </sui-form-field>
            <sui-form-field>
                <label>Telefone</label>
                <input placeholder="DD XXXX-XXXX" >
            </sui-form-field>
            <sui-form-field>
                <label>Endereço</label>
                <input placeholder="Endereço Completo" >
            </sui-form-field>
            <sui-form-field>
                <label>Senha</label>
                <input type="password">
            </sui-form-field>
            <sui-form-field>
                <label>Digite a Senha Novamente</label>
                <input type="password" >
            </sui-form-field>
            <sui-form-field>
                <sui-checkbox label="Concordo com os termos de uso" />
            </sui-form-field>

            </sui-form-field>
                <sui-button type="submit">Criar Cadastro</sui-button>
            </sui-form-field>
        </sui-form>
    </div>

</template>

<script>
export default {
};
</script>