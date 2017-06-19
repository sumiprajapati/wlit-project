var express = require('express');
var router = express.Router();

/* GET home page. */


var person={
	name: 'sumi prajapati',
	college:'samriddhi',
	course:'bsccsit',
	semester:'5th semester',
	contact:'9845315287',
	facebook:'https://www.facebook.com/sumi.prajapati.127'};
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', person});
});

router.get('/profile', function(req,res) {
	res.render('profile', {person});
});
	router.get('/add', function(req,res) {
	res.render('add');
	});
	router.get('/edit', function(req,res) {
	res.render('edit');
	});



module.exports = router;
