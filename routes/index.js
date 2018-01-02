var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index');
});

router.get('/add', function(req, res){
  res.render('add');
});

router.get('/show', function(req, res){
  res.render('show');
});

router.get('/edit', function(req, res){
  res.render('edit');
});

router.get('/edit/:id', function(req,res){
  res.render('edit');
});


module.exports = router;
