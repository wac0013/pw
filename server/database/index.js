var caminte = require('caminte');
var Schema = caminte.Schema;
var bd = new Schema('mysql', {
  host: 'localhost',
  port: '3306',
  username: 'test',
  password: 'test',
  database: 'test',
  pool: true
});

module.exports = bd;
