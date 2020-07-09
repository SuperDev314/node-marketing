/**
 * Module dependencies.
 */
var express = require('express'),
    nunjucks = require('nunjucks'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    path = require('path'),
    Contentstack = require('contentstack');
var app = express();
var env = process.env.NODE_ENV || "development",
    _dirname = (process.env.SITE_PATH) ? path.resolve(process.env.SITE_PATH) : process.cwd(),
    _env;

try {

  // load environment based configurations
  var _path = path.join(_dirname, 'config');
  if(env === 'development')
    _env = require(path.join(_path, 'default'));
  else
    // _env = require(path.join(_path, env));
    _env = require(path.join(_path, 'default'));
  // load globals
  global['config'] = _env;
  global['Stack'] = Contentstack.Stack({
    api_key: config.contentstack.api_key,
    access_token: config.contentstack.delivery_token,
    environment: config.contentstack.environment
  });

  // load port
  var PORT = process.env.PORT || config.port;

  // Client side pages to fall under ~/views directory
  app.set('views', path.join(__dirname, 'views'));

  // Setting Nunjucks as default view
  nunjucks.configure('views', {
    autoescape: false,
    express   : app
  });
  app.set('view engine', 'html');
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, 'public')));

  // Routes
  require('./routes')(app);

  app.locals.getAssetUrl = function(asset) {
    if(asset){
    asset = asset.split("?");
    asset = asset[0];
    return (asset) ? asset : "";
    }
  };

  app.listen(PORT, function() {
    console.log('Start your browser to http://localhost:' + PORT);
  });

} catch (error) {
  console.error('Did not find configuration for the specified environment');
  console.error(error);
  console.error('exiting!');
}

module.exports = app;

