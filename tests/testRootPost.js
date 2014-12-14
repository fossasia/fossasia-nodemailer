var sinon = require('sinon');
var routes = require('../routes/index');
var mocha = require('mocha');
var mailer = require('../mailer/mailer');
var assert = require('assert');


describe('/ request (post)', function() {
  this.timeout(5000)
  it('should call mailer with proper dummy body and reach "render"', function(done){
    var testRequest = {};

    testRequest.body =  {
      to: 'mail@namanyayg.com',
      subject: 'Test', 
      message: 'Test',
    };

    testRequest.flash = sinon.spy();

    testResponse = {
      render: function() {
        console.log( '      -', testRequest.flash.args[0][1] )

        if ( testRequest.flash.args[0][1] == 'Email sent sucessfully!' )
          done();
      }
    }; 

    
    var mailerSpy = sinon.stub(mailer, 'send', function(arguments, callback) {
      // Compares test request body and actual body
      if ( 
        arguments.to == testRequest.body.to &&
        arguments.subject == testRequest.body.subject &&
        arguments.text == testRequest.body.message 
      ) {
        console.log('      - Given arguments match used arguments')
        callback();
      }

      else {
        console.log('      - Body does not match');
      }

      return false;
    });



    routes.rootPost(testRequest, testResponse);

  });
});
