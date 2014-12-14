var sinon = require('sinon');
var routes = require('../routes/index');
var mocha = require('mocha');

describe('/ request (post)', function(){
  this.timeout(20000);
  it('should return successfully', function(done){
    var testRequest = {};

    testRequest.body =  {
      to: 'mail@namanyayg.com',
      subject: 'Test', 
      text: 'Test',
    };

    testRequest.flash = sinon.spy();

    testResponse = {
      render: sinon.spy()
    }; 

    routes.rootPost(testRequest, testResponse);


    setTimeout(function() {
      if ( testResponse.render.calledOnce ) {
        console.log( '    ', testRequest.flash.args[0][1] )
        done();
      }
    }, 15000)
  });
});
