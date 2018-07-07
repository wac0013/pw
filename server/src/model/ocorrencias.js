var bd = require('../../database');

var Ocorrencias = bd.define('Ocorrencias', {
  id: {type: bd.NUMBER, unique: true},
  categoria: {type: bd.String,  limit: 3},
  local: {type: bd.String,  limit: 255},
  descricao: {type: bd.String,  limit: 255},
  telefone: {type: bd.String,  limit: 255},
  imagem: {type: bd.String,  limit: 255},
  status: {type: bd.String,  limit: 255},
  recompensa: {type: bd.NUMBER,  limit: 255}
}, {
  primaryKeys: ['id']
});

module.exports = Ocorrencias;
