var express       = require('express');
var router        = express.Router();
var Ocorrencias   = require('../model/ocorrencias');
var fs            = require('fs');
var path          = require('path');

router.post('/api/gravar_ocorrencia', function(req, res) {
  try {
    var nova_ocorrencia = req.body;
    nova_ocorrencia.categoria = nova_ocorrencia.categoria.substring(0, 3).toUpperCase();
  } catch (error) {
    res.send({
      retorno: {
        erro: true,
        mensagem: error
      }
    });
    res.end();
  }

  /*
  var
    old_path = files.file.path,
    file_size = files.file.size,
    file_ext = files.file.name.split('.').pop(),
    index = old_path.lastIndexOf('/') + 1,
    file_name = old_path.substr(index),
    new_path = path.join(process.env.PWD, '/uploads/', file_name + '.' + file_ext);

  fs.readFile(old_path, function(err, data) {
    if (err) {
      res.send({
        retorno: {
          erro: true,
          mensagem: err
        }
      });
    }
    fs.writeFile(new_path, data, function(err) {
      if (err) {
        res.send({
          retorno: {
            erro: true,
            mensagem: err
          }
        });
      }
      fs.unlink(old_path, function(err) {
        if (err) {
          res.send({
            retorno: {
              erro: true,
              mensagem: err
            }
          });
        } else {
          res.status(200);
          res.json({'success': true});
        }
      });
    });
  });
*/
  Ocorrencias.create(nova_ocorrencia, function(erro) {
    if (erro) {
      res.send({
        retorno: {
          erro: true,
          mensagem: erro.message
        }
      });
    } else {
      res.send({
        retorno: {
          erro: false,
          mensagem: 'Salvo com sucesso'
        }
      });
    }
  });
});

router.get('/api/get_feed', function(req, res) {
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

router.post('/api/excluir', function(req, res) {
  var id = req.body.id || 0;
  Ocorrencias.remove({where: {idOcorrencia: id}}, function(erro) {
    if (erro) {
      res.send({
        retorno: {
          erro: true,
          mensagem: erro,
          objeto: {}
        }
      });
    } else {
      res.send({
        retorno: {
          erro: false,
          mensagem: 'Ocorrência excluída',
          objeto: {}
        }
      });
    }
  })
});

router.post('/api/atualizar', function(req, res) {
  try {
    var nova_ocorrencia = req.body;
    var id = nova_ocorrencia.idOcorrencia;
    if (id < 1) {
      throw new Error('Ocorrencia não encontrada com código ' + id);
    }
    nova_ocorrencia.categoria = nova_ocorrencia.categoria.substring(0, 3).toUpperCase();
  } catch (error) {
    res.send({
      retorno: {
        erro: true,
        mensagem: error
      }
    });
  }
  Ocorrencias.update({where: {idOcorrencia: id}}, function(erro) {
    if (erro) {
      res.send({
        retorno: {
          erro: true,
          mensagem: erro,
          objeto: {}
        }
      });
    } else {
      res.send({
        retorno: {
          erro: false,
          mensagem: 'Ocorrência excluída',
          objeto: {}
        }
      });
    }
  })
});
module.exports = router;
