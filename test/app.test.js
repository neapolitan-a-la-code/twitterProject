var request = require('supertest');
var should = require('should');
var expect = require('chai').expect;




describe ("When User sees website", function () {

var neaprequest = request('http://neapolitan-a-la-code.github.io/twitterProject/'); 

	it("website should be return 200 ok", function (done) {
		neaprequest.get('/')
			.expect(200,done);
	});

	it("title should be NeapFeed", function (done) {
		neaprequest.get('/')
			.expect(/<title>NeapFeed<\/title>/, done);
	});

	it("user should see header picture", function (done) {
		neaprequest.get('/')
			.expect(/<div class = "col-md-10 col-sm-8 col-xs-12" id="pic">/, done);
	});

	it("user should see the Twitter posts", function (done) {
		neaprequest.get('/')
			.expect(/<div class="col-md-10 col-sm-8 col-xs-12" id="content">/, done);
	});

	it("user should see individual Twitter posts", function (done) {
		neaprequest.get ('/')
			.expect(/<div class="col-md-4 col-sm-6 col-xs-12">/, done);
	});

	it("user should see images of Twitter posts", function (done) {
		neaprequest.get('/')
			.expect(/<img class = 'img-responsive' src='/, done);
	});

	it("user should see the Username", function (done) {
		neaprequest.get('/')
			.expect(/<h4>/, done);
	});

	it("I want the AJAX file to exist", function (done) {
		neaprequest.get('/')
			.expect(/ajax/, done);
	})
});



describe ("As an AJAX Request", function () {

var herokurequest = request('http://neapolitan.herokuapp.com/');

	// it("I want the credentials to exist", function (done){
	// 	herokurequest.get('/')
	// 		.expect(/credentials/).to.exist;
	// 	done()
	// });

	it("I want the node server on heroku to exist", function (done){
			expect(/http:\/\/neapolitan.herokuapp.com\//).to.exist;
		done()
	});

	// it("I want the server to return with 200, ok", function (done) {
	// 	herokurequest('/')
	// 		.expect(200, done);
	// });

	it("should respond as an JSON object", function (done) {
		herokurequest.get('/')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});

	it("and it should have a username in it", function (done) {
		herokurequest.get('/')
			.expect(/"user"/, done);
	});

	it("and it should have a date", function (done) {
		herokurequest.get ('/')
			.expect(/"created_at"/, done);
	}); 

	it("and it should have a twitter image in it", function (done) {
		herokurequest.get('/')
			.expect(/media_url\":\"http:\/\/pbs\.twimg\.com\/media\/([a-zA-Z0-9_-]{15})\.jpg/, done);
	});

	it("and it should have a twitter image in it", function (done) {
	herokurequest.get('/')
		.expect(/media_url\":\"http:\/\/pbs\.twimg\.com\/media\/([a-zA-Z0-9_-]{15})\.jpg/, done);
	});

	it("and it should have a twitter image in it", function (done) {
		herokurequest.get('/')
			.expect(/media_url\":\"http:\/\/pbs\.twimg\.com\/media\/([a-zA-Z0-9_-]{15})\.jpg/, done);
	});

	it("")



	// it("I want the response to be returned in JSON format", function (done){
	// 	var res = {
	// 		writeHeader: function() {},
	// 		write: function() {},
	// 		end: function(string){
	// 			expect(string).should.startWith("JSON")
	// 			done()
	// 		}
	// 	}
	// 	tserver.test({}, res)
	// });

});


// describe('GET /users', function(){
//   it('respond with json', function(done){
//     // the request-object is the supertest top level api
//     request(app)
//       .get('/user')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, done); // note that we're passing the done as parameter to the expect
//   });
// });