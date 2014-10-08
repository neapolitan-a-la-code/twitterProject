var Twit = require('twit');
var http = require('http');
var credentials = require('./credentials.js');
var toWrite = "";
var complete = 0;

var T = new Twit({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token: credentials.access_token,
    access_token_secret: credentials.access_token_secret
});

T.get('search/tweets', { q: 'collectiveacademy', count: 20 }, function(err, reply) {


    if (err) {
        console.dir(err);
    }

    else {


              toWrite = reply;
              
              }
              
        complete = 1;
    });

    



http.createServer(function(request,response){
	console.log("I got kicked");
	response.writeHeader(200, {"Content-Type": "application/json"});

  var readyToWrite = function() {
      if (complete === 1) {
        console.log("READY");
        return;
      }
        console.log("not ready : (");
        readyToWrite();
    };
  readyToWrite();

	response.end(JSON.stringify(toWrite));
}).listen(8080);
console.log("Server Running on 8080");
