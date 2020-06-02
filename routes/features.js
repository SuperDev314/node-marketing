/**
 * Created by pradeep on 18/4/17.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next){
    var Query = Stack.ContentType('feature_page').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('pages/feature_page/index.html', {
                entry: result[0],
            });
        }, function error(error) {
            next(error);
        });
});

module.exports = router;