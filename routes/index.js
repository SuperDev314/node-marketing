module.exports = function(app) {

  app.use('/', require('../middlewares'));
  app.use('/', require('./home'));
  app.use('/features', require('./features'));
  app.use('/about', require('./about'));
  app.use('/product', require('./product'));
   require('./error')(app);
};