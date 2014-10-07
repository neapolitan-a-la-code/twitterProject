var twittest = require("../twittest.js");
console.log(twittest);
var request = require('supertest');
request = request('http://neapolitan-a-la-code.github.io/blog/');
var expect = require("chai").expect;



describe("When a user goes to the home page", function() {

   it("should return status code 200 OK", function (done) {
       request.get('/')
           .expect(200, done);
   });

   it("should contain the post 'peanut butter cup'", function(done) {
       request.get('/about/')
           .expect(/Peanut Butter/, done);
   });

});


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
/*
describe ("When website loads", function () {

	it("")
})
*/



