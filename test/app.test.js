var request3 = require('supertest');
var should = require('should');
var http = require('http');
var expect = require('chai').expect;




describe ("When User sees website", function () {

var neaprequest = request3('http://neapolitan-a-la-code.github.io/twitterProject/'); 

	it("website should be return 200 ok", function (done) {
		neaprequest.get('/')
			.expect(200, done);
	});

	it("title should be NeapFeed", function (done) {
		neaprequest.get('/')
			.expect(/<title>NeapFeed<\/title>/, done);
	});

	it("user should see header picture", function (done) {
		neaprequest.get('/')
			.expect(/<div class = "col-md-10 col-sm-12 col-xs-12" id="pic">/, done);
	});

	it("user should see the Twitter posts", function twitterpost(done) {
		neaprequest.get('/')
			.expect(/<div class="col-md-10 col-sm-8 col-xs-12" id="content">/);
		setTimeout(twitterpost, 5000);
		done();
	});	

	it("user should see individual Twitter posts", function indtwitterpost (done) {
		neaprequest.get ('/')
			.expect(/<div class='col-md-6 col-sm-6 col-xs-12'><div class='thumbnail'>/);
		setTimeout(indtwitterpost, 50000);
		done();
	});

	it("user should see images of Twitter posts", function imgtwit(done) {
		neaprequest.get('/')
			.expect(/<img src=/);
		setTimeout(imgtwit, 50000);
		done();
	});

	it("user should see the Username", function usertwit(done) {
		neaprequest.get('/')
			.expect(/<h4>/);
		setTimeout(usertwit, 50000);
		done();
	});

	it("I want the AJAX file to exist", function (done) {
		neaprequest.get('/')
			.expect(/ajax/, done);
	})
});



describe ("As an API", function () {

var herokurequest = request3('http://neapolitan.herokuapp.com/');

	it("I want the node server on heroku to exist", function (done){
			expect(/http:\/\/neapolitan.herokuapp.com\//).to.exist;
		done();
	});

	// it("I want the server to return with 200, ok", function (done) {
	// 	herokurequest('/')
	// 		.expect(200, done);
	// });

	it("I should respond as an JSON object", function (done) {
		herokurequest.get('/')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});

	it("I should have a username in my JSON", function (done) {
		herokurequest.get('/')
			.expect(/"user"/, done);
	});

	it("I should have a date in my JSON", function (done) {
		herokurequest.get ('/')
			.expect(/"created_at"/, done);
	}); 

	it("I should have the #CollectiveAcademy", function (done) {
		herokurequest.get ('/')
			.expect(/#CollectiveAcademy/i, done);
	}); 

	it("I should have a twitter image in my JSON", function (done) {
		herokurequest.get('/')
			.expect(/media_url\":\"http:\/\/pbs\.twimg\.com\/media\/([a-zA-Z0-9_-]{15})\.jpg/, done);
	});

	// it("I should have 10-13 tweets in my JSONxxxxx", function (done) {
	// 	herokurequest.get ('/')
	// 		.expect(/[media_url\":\"http:\/\/pbs\.twimg\.com\/media\/([a-zA-Z0-9_-]{15}\.jpg]{10-13}/, done);
	// });

	it("I should have 10-13 tweets in my JSON", function (done) {
		http.request("http://neapolitan.herokuapp.com/", function stringstuff (err, res) {
			res.on("data", function (err, data) {
				var stringgg = JSON.stringify(data);
				//console.log("hells", data);
				stringgg.expect(/url/, done);
				//setTimeout(stringstuff, 50000);
				//expect(stringgg).to.be('string');
			})
		});
			// it('should take less than 500ms', function (done){
	  // 			this.timeout(500);
	  // 			setTimeout(done, 300);
	  // 		});
		// expect(JSON.parse(stringifyrequest)).to.have.members(15);
		// done();
	})

	// it("and it should have a twitter image in it", function (done) {
	// herokurequest.get('/')
	// 	.expect(/media_url\":\"http:\/\/pbs\.twimg\.com\/media\/([a-zA-Z0-9_-]{15})\.jpg/, done);
	// });
});


// describe

// is the ajax connected to 

// // testing string

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


//JSON test

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