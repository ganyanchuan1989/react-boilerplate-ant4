var express = require('express'),
  webpack = require('webpack'),
  // favicon = require('express-favicon'),
  config = require('./webpack.dev.conf'),
  proxy = require('http-proxy-middleware'),
  app = express();

var compiler = webpack(config);

const commonPath = require('./CommonPath');
const { CONTEXT_PATH } = require('./config');

// for highly stable resources
app.use(express.static(commonPath.staticDir));
app.use(CONTEXT_PATH, express.static(commonPath.staticDir));
app.use(express.static(commonPath.mockDir));

// app.use(favicon(path.join(__dirname, '../favicon.ico')));

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    logLevel: 'warn',
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
    },
    hot: true,
  })
);

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler));

// PROXY
// app.use('/api/*', proxy('http://127.0.0.1:8000/'));

app.listen(9000, '127.0.0.1', function(err) {
  err && console.log(err);
});
