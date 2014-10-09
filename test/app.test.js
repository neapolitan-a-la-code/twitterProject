var tserver = require("../tserver2.js");
var hserver = require("../hserver.js")
var script = require("../script.js")
var request = require('supertest');
var should = require('should');
request = request('http://neapolitan-a-la-code.github.io/blog/');
var expect = require("chai").expect;

/*

describe("When a user goes to the home page", function() {

   it("should return status code 200 OK", function (done) {
       request.get('/')
           .expect(200, done);
   })

});


*/

/*
describe ("When User goes to twitter post page", function () {

	it("user should see twitter feed", function (done) {
		request.get('/twitter/')
			.expect(200, done);
	});

	it("user should see twitter posts", function (done) {
		request.get('/twitter/')
			.expect(/Twitter Feed/. done);
	})

});
*/

// describe ("When user sees feed", function () {

// 	it ("user should see tweeted images", function (done) {
// 		expect()
// 	})

// });



describe ("When User sees feed", function () {
	
	it("user should see twitter feed", function (done) {
		request.get('/feed/')
			.expect(200, done);
	});

	it("user should see tweeted images", function (done){
		request.get('/feed/')
			.expect(/img/);
	})

	// it("user clicks image and is redirected to twitter page", function (done){
	// 	request.get('/feed/')
	// 	var img = id="image"
	// 		.expect()
	// })
});


describe ("As an Ajax Request", function () {

	it("I want the AJAX file to exist", function (done) {
		expect(script.ajax).to.exist;
		done()
	});

	it("I want the feed to exist", function (done){
		expect(tserver.test).to.exist;
		done()
	});

	it("I want the response to be returned in JSON format", function (done){
		var res = {
			writeHeader: function() {},
			write: function() {},
			end: function(string){
				expect(string).should.startWith("JSON")
				done()
			}
		}
		tserver.test({}, res)
	});

	it("I want the node server to exist", function (done){
		expect(tserver.server).to.exist;
		done()
	});

	it("I want the URL to be from the server", function (done) {
		expect(script.ajax.url).to.equal("http://0.0.0.0000.")
	})
});



describe ("As a node server", function () {

	it("I want the credentials to exist", function (done){
		expect(tserver.credentials).to.exist;
		done()
	});

	it("I want the tweets to exist", function (done){
		expect(tserver.tweets).to.exist;
		done()
	});
});

describe ("As a website", function () {

	it("I want to receive an ajax request", function (done) {
		request.get('/feed/')
		expect(/ajax/).to.exist;
		done()
	})

});



// 	it("XXX", function (done){
// 		expect(tserver.XXX).to.exist;
// 		done()
// 	});


// 	it("XXX", function (done){
// 		expect(tserver.XXX).to.exist;
// 		done()
// 	});

// 	it("XXX", function (done){
// 		expect(tserver.XXX).to.exist;
// 		done()
// 	});
// });





