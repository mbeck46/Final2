var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {
  console.log('all');
  next();
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Form' });
});

router.post('/form', function(req, res, next) {    
  res.render('form', { title: 'Results', 
      name: req.body.name,
      email: req.body.email,
      comments: req.body.comments});
});

module.exports = router;
