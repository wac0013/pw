/**
 * Module dependencies.
 */

var app = require('../src');
var debug = require('debug')('src:server');
var http = require('http');

/**
 * Recebe a porta do ambiente e armazena no Express,
 * caso não seja informado porta no ambiente utiliza a porta 3000
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Criando servidor Http.
 */

var server = http.createServer(app);

/**
 * Iniciando o servidor, escutando na porta fonecida, em todas interfaces de rede
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Define a porta como um número, string ou retorna false
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

/**
 * Listener de eventos de erros do servidor HTTP
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // manipulando uma lista específica de erros com mensagens amigaveis
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' necessita de privilégios elevados');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' está em uso');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Listener para eventos de "listening" do servidor HTTP
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Rodando em ' + bind);
}
