var sinon = require('sinon');
var routes = require('../routes/index');
var mocha = require('mocha');
var mailer = require('../mailer/mailer');
var assert = require('assert');


describe('/ request (post)', function() {
  this.timeout(5000)
  it('should call mailer with dummy body and used body being the same', function(done){
    var testRequest = {};

    testRequest.body =  {
      to: 'mail@namanyayg.com',
      subject: 'Test', 
      message: 'Test',
    };
    
    var mailerSpy = sinon.stub(mailer, 'send', function() {
      // Compares test request body and actual body
      if ( 
        arguments[0].to == testRequest.body.to &&
        arguments[0].subject == testRequest.body.subject &&
        arguments[0].text == testRequest.body.message 
      ) {
        done();
      }

      else {
        console.log('Body does not match');
      }

      return false;
    });

    routes.rootPost(testRequest, {});



  });
});
