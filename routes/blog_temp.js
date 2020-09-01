
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next){
    var Query = Stack.ContentType('blog_posts').Query()
    .toJSON()
    .find()
    .spread(function success(result) {
        
        let blog =result.filter(el => '/blogs' + el.url === req._parsedOriginalUrl.href); 
        if (blog) {
            res.render('pages/blog_template/index.html', {
                entry: blog[0],
            });            
        }else throw 'Error 404'  

    }, function error(error) {
        next(error);
    });
})
module.exports = router;