var express       = require('express');
var router        = express.Router();
var Ocorrencias   = require('../model/ocorrencias');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post('/gravar_ocorrencia', function(req, res) {
  var nova_ocorrencia = {};

  nova_ocorrencia.descricao = req.body;
  Ocorrencias.create(nova_ocorrencia, function(erro) {
    if (erro) res.status(500).send({erro: erro});
  });
});

router.get('/get_feed', function(req, res) {
  Ocorrencias.find(function(erro, ocorrencias) {
    if (erro) {
      res.send({erro: erro});
    } else {
      res.send(ocorrencias);
    }
  });
});

module.exports = router;
