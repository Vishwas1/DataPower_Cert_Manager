var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name: 'Vikram',place1 : 'Dosut' });
});

module.exports = router;
