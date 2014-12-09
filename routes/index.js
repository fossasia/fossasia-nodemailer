var express = require('express');
var router = express.Router();
var fs = require('fs');

var nodemailer = require('nodemailer');

var flash = require('connect-flash')

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'fossasia@fossasia.com',
        pass: 'password'
    }
});



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { flash: req.flash('info') });
});

router.post('/', function(req, res) {
  transporter.sendMail({

    from: 'Fossasia <fossasia@fossasia.com>',
    to: req.body.to,
    subject: req.body.subject, 
    text: req.body.message,

  }, function(error, info){

      if ( error ) {
          req.flash('info', error)
      } else {
          req.flash('info', 'Email sent sucessfully!')
      }

      res.render('index', { flash: req.flash('info') });
  });

});


module.exports = router;
