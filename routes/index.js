var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brian Moreira' });
});

/* GET about page. */
router.get('/sobre', function(req, res, next) {
  res.render('about', { title: 'Sobre | Brian Moreira' });
});

module.exports = router;
