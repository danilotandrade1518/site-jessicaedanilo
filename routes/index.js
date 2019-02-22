var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/index', {page:'Home', menuId:'home'});
});

module.exports = router;
