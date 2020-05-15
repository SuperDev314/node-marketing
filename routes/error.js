/**
 * Created by pradeep on 17/4/17.
 */
module.exports = function(app) {
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error(err);
        err.status =404 ;
        next(err);
    });

    // development error handler
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            console.log(err);
            res.render('error/404', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // error won't be propagated to the page
    if (app.get('env') === 'production') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
        console.log(err);
        res.render('error/404', {
            message: err.message,
            error: {}
        });
    });
    }
};
