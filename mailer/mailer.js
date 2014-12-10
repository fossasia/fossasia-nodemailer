var nodemailer = require('nodemailer');
var config = require('../config.json');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.username,
    pass: config.password
  }
});

exports.send = function(email, callback){
  transporter.sendMail(email, function(error){
    callback(error);
  });
}