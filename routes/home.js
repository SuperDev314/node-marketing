/**
 * Created by pradeep on 17/4/17.
 */
var express = require('express');
var router = express.Router();

// router.get('/:id', function(req, res, next){
// .language(req.params.id)
    // console.log('ID:------------------------- ', req.params.id)
router.get('/', function(req, res, next){
    var Query = Stack.ContentType('sdkE_home').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('pages/home/index.html', {
                entry: result[0],
                ct_uid: 'sdkE_home'
            });
        }, function error(error) {
            next(error);
        });
});

module.exports = router;