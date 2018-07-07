var caminte = require('caminte');
var Schema = caminte.Schema;
var bd = new Schema('mysql', {
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: 'root',
  database: 'pw',
  pool: true
});

module.exports = bd;
