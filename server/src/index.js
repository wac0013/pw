var
  createError   = require('http-errors'),
  express       = require('express'),
  path          = require('path'),
  cookieParser  = require('cookie-parser'),
  logger        = require('morgan'),

  indexRouter   = require('./routes/index'),
  usersRouter   = require('./routes/users');

var app = express();

// configurando engines de visualização
app.set('views', path.join(__dirname, 'client/static/view'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/static')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// captura erro 404 e para o manipulador de erro
app.use(function(req, res, next) {
  next(createError(404));
});

// manipulador de erros
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // renderiza a página de erro
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
