/**
 * Created by pradeep on 17/4/17.
 */
var express = require('express');
var router = express.Router();

router.get('*', require('./load-partials'));

module.exports = router;