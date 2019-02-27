var express = require('express');
var router = express.Router();

var indexController = require('../controllers/index.controller')

/* GET home page. */
router.use('/', indexController)

module.exports = router;
