process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var Item = require('../server/database.js').Item;
var should = chai.should();
chai.use(chaiHttp);

// second should test route return 404 should fail


describe("Travis", function() {
  Item.collection.drop();
  var id = "";

  it('should return a 200 response',
  function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res){
        res.should.have.status(200);
        done();
    });
  });


  it('should return a 404 response',
  function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(404);
      done();
    });
  });



}); //ends describe
