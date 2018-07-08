var express       = require('express');
var router        = express.Router();
var Ocorrencias   = require('../model/ocorrencias');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/sys/*', function(req, res) {
  res.send(req.baseUrl.substring(5, req.baseUrl.length));
})

router.post('/gravar_ocorrencia', function(req, res) {
  var nova_ocorrencia = req.body;
  nova_ocorrencia.categoria = nova_ocorrencia.categoria.substring(0, 3).toUpperCase();

  Ocorrencias.create(nova_ocorrencia, function(erro) {
    if (erro) {
      res.send({
        retorno: {
          erro: true,
          mensagem: erro
        }
      });
    }
  });
});

router.get('/get_feed', function(req, res) {
  Ocorrencias.find(function(erro, ocorrencias) {
    if (erro) {
      res.send({
        retorno: {
          erro: true,
          mensagem: erro
        }
      });
    } else {
      res.send({
        retorno: {
          erro: false,
          mensagem: erro,
          objeto: ocorrencias
        }
      });
    }
  });
});

module.exports = router;
