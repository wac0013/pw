var express = require('express');
var router = express.Router();
var caminte = require('caminte');

/* GET users listing. */
router.get('/usuarios/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
