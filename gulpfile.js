const gulp    = require('gulp'),
  path        = require('path'),
  nodemon     = require('gulp-nodemon'),
  gutil       = require('gulp-util'),
  del         = require('del'),
  config      = require('./config'),
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
    ext: 'js',
    watch: 'server/*',
    env: {
      'NODE_ENV': 'development',
      'PORT': 3000
    },
    delay: 2500
  });

  stream
    .on('restart', function() {
      console.log('restarted!')
    })
    .on('crash', function() {
      console.error('Application has crashed!\n')
      stream.emit('restart', 10)  // restart the server in 10 seconds
    })
});
//
gulp.task('dev', gulp.series('copiar-public', 'dev-servidor', gulp.parallel('monitorar-public')))
