const gulp    = require('gulp-v4'),
  path        = require('path'),
  nodemon     = require('gulp-nodemon'),
  gutil       = require('gulp-util'),
  del         = require('del'),
  config      = require('./config'),
  webpack     = require('webpack'),
  WebpackDevServer  = require('webpack-dev-server')

//
gulp.task('copiar-public', () => {
  return gulp.src(['./client/static/**/*.*'])
    .pipe(gulp.dest('./dist/public/'))
})
//
gulp.task('copiar-conf', () => {
  return gulp.src(['./server/src/config/*.*'])
    .pipe(gulp.dest('./dist/server/config'))
})
//
gulp.task('limpar', () => {
  return del.sync(['./dist/**']);
})
//
gulp.task('copiar', gulp.parallel('limpar', 'copiar-public', 'copiar-conf'))
//
gulp.task('app-dev', (cb) => {
  const webpackConfig   = require('./webpack.config');
  const compiler        = require('webpack')(webpackConfig);
  webpackConfig.entry.unshift('webpack-dev-server/client?http://' + config().host + ':' + config().porta_cliente + '/', 'webpack/hot/dev-server');

  new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.join(__dirname, 'dist/public'),
    stats: {
      colors: true
    },
    hot: true,
    open: true,
    historyApiFallback: true,
    clientLogLevel: 'info',
    quiet: true
  }).listen(config().porta_cliente, config().host, function(err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('> Iniciando aplicação em modo desenvolvimento...');
    gutil.log('[webpack-dev-server]', 'http://' + config().host + ':' + config().porta_cliente + '/webpack-dev-server/index.html');
  })
  cb()
})
//
gulp.task('monitorar-public', (done) => {
  gulp.watch(['client/static/*.*', 'client/static/**/*.*'], gulp.series('copiar-public'));
  done();
})
//
gulp.task('dev-servidor', () => {
  var stream = nodemon({
    script: 'server/bin/www',
    exec: 'node --inspect-brk=9229',
    ext: 'js',
    watch: [
      'server/*',
      'webpack.config.js'
    ],
    delay: 3000
  });

  stream
    .on('restart', function() {
      console.log('Reiniciando!')
    })
    .on('crash', function() {
      console.error('Aplicação parou de funcionar! Reiniciando em 5 segundos\n')
      stream.emit('restart', 100)  // restart the server in 5 seconds
    })
});
//
gulp.task('webpack', function() {
  return gulp.src('client/src/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/public/'));
});
//
gulp.task('dev', gulp.series('copiar-public', 'dev-servidor', gulp.parallel('monitorar-public')))
//
gulp.task('public', gulp.series('copiar-public', 'monitorar-public'));
