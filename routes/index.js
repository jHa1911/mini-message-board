var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board',  messages: messages });
});

router.get('/new', function (req,res,next){
  res.render('form');
});



router.post('/new', function (req, res, next){
  let name= req.body.author;
  let message= req.body.message
  messages.push({user: name , text : message , createdOn : new Date().toISOString()});
  res.redirect('/');
});

const messages = [] ;



module.exports = router;
