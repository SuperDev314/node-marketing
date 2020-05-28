var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var Query = Stack.ContentType('sdkE_product').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            console.log(result);
            res.render('pages/product/index.html', {
                entry: result[0],
            });
        }, function error(error) {
            next(error);
        });
});

module.exports = router;