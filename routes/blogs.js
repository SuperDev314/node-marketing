
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var Query = Stack.ContentType('blog_posts').Query()
    .toJSON()
    .find()
    .spread(function success(result) {
        let blogList = result.filter(blog => blog.url === "/blog-list")
        res.render('pages/blogs_page/index.html', {
            entry: blogList,
        });
    }, function error(error) {
        next(error);
    });
})
module.exports = router;