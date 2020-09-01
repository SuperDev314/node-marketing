module.exports = function(app) {

  app.use('/', require('../middlewares'));
  app.use('/', require('./home'));
  app.use('/features', require('./features'));
  app.use('/about', require('./about'));
  app.use('/product', require('./product'));
  app.use('/blogs', require('./blogs'));
  app.use('/blogs/:blog', require('./blog_temp'));
   require('./error')(app);
};