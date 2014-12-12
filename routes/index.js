var express = require('express');
var flash = require('connect-flash');

var mailer = require('../mailer/mailer');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { flash: req.flash('info') });
});

function rootPost(req, res) {
    var email =  {
    from: 'Fossasia <fossasia@fossasia.com>',
    to: req.body.to,
    subject: req.body.subject, 
    text: req.body.message,
  };

  mailer.send(email, function(error, info){

    if ( error ) {
        req.flash('info', error);
    } else {
        req.flash('info', 'Email sent sucessfully!');
    }

    res.render('index', { flash: req.flash('info') });
  });
}

router.post('/', rootPost);

exports.rootPost = rootPost;
exports.router = router;
