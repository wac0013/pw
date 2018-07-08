Projeto da disciplina Programação Web
=========================
Descrição
-------------------------
Projeto destinado a disciplina de programação para web

Instruções / Tutoriais
---------------------
#### Clonar projeto

Utilizando a IDE/editor de sua preferência realize o clone do repositório

#### Intalando dependências

Para iniciar o desenvolvimento é necessário instalar as dependências necessárias para executar o projeto. Para isso execute o comando no terminal:

```sh
npm install
```
Após executar o comando acima, será criada o diretório __node_module__ com o código das dependências. Este diretório não é sincronizado com repositório git, pois está presente no arquivo .gitignore.

#### Rodando o projeto em desenvolvimento

Com as dependências devidamente instaladas, para executar o projeto em modo de desenvolvimento basta usar o seguinte comando:

```sh
npm run dev
```
Ao executar o comando acima, o projeto será executado de forma a criar um servidor que fornecerá a página
web http://localhost:3000/ Nessa página web serão adicionados todos os arquivos js e css gerados pelo projeto.

#### Rodando o projeto

Para executar o projeto em modo de produção basta usar o seguinte comando:

```sh
npm run pro
```
