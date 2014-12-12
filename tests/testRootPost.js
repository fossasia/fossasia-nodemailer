var sinon = require('sinon');
var routes = require('../routes/index');
var mocha = require('mocha');

describe('/ request (post)', function(){
  it('should return successfully', function(done){
    testResponse = {
      render: function(){}//can fill this with spies to test
    }; 

    routes.rootPost({}, testResponse);
  });
});
