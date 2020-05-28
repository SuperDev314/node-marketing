
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var Query = Stack.ContentType('sdke_blog').Query()
    .toJSON()
    .find()
    .spread(function success(result) {
        res.render('pages/blogs_page/index.html', {
            entry: result[0],
        });
    }, function error(error) {
        next(error);
    });
})
module.exports = router;