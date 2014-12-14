var sinon = require('sinon');
var routes = require('../routes/index');
var mocha = require('mocha');

describe('/ request (post)', function(){
  this.timeout(20000);
  it('should send an email', function(done){
    var testRequest = {};

    testRequest.body =  {
      to: 'mail@namanyayg.com',
      subject: 'Test', 
      text: 'Test',
    };

    testRequest.flash = sinon.spy();

    testResponse = {
      render: function() {
        console.log( '    ', testRequest.flash.args[0][1] )
        if ( testRequest.flash.args[0][1] == 'Email sent sucessfully!' )
          done();
      }
    }; 

    routes.rootPost(testRequest, testResponse);
  });
});
