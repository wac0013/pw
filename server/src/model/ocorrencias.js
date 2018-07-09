var bd = require('../../database');

var Ocorrencias = bd.define('Ocorrencias', {
  idOcorrencia: {type: bd.Integer, unique: true},
  categoria: {type: bd.String,  limit: 3},
  local: {type: bd.String,  limit: 255},
  descricao: {type: bd.String,  limit: 255},
  telefone: {type: bd.String,  limit: 255},
  imagem: {type: bd.String, limit: 255, default: '/img/sem-imagem.png', 'null': false},
  statusPerdido: {type: bd.String,  limit: 1},
  recompensa: {type: bd.Integer,  limit: 255, default: 0, 'null': false}
}, {
  primaryKeys: ['idOcorrencia']
});

module.exports = Ocorrencias;
