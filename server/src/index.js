var
  createError   = require('http-errors'),
  express       = require('express'),
  path          = require('path'),
  cookieParser  = require('cookie-parser'),
  logger        = require('morgan'),
  bodyParser    = require('body-parser'),
  history       = require('connect-history-api-fallback');

var app = express();

// configurando engines de visualização
app.use(express.static(path.join(__dirname, '../../dist/public')));
app.set('views', path.join(__dirname, '../../dist/public/view'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

if (process.env.NODE_ENV === 'dev' || 'development') {
  var
    webpack               = require('webpack'),
    config                = require('../../webpack.config'),
    webpackDevMiddleware  = require('webpack-dev-middleware'),
    webpackHotMiddleware  = require('webpack-hot-middleware'),
    compiler              = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    quiet: true
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: false,
    path: '/__what',
    heartbeat: 2000
  }))
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use('/', require('./routes/index'));
app.use(history());

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index.html');
});

/* Qualquer outra página será redirecionado para index. */
/* app.get('*', function(req, res, next) {
  res.redirect('/');
}); */

// captura erro 404 e para o manipulador de erro
app.use(function(req, res, next) {
  next(createError(404));
});

// manipulador de erros
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  next();
  // renderiza a página de erro
  // res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
