var Twit = require('twit');
var http = require("http");
var credentials = require('./credentials.js');
var toWrite = "";

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
              reply.statuses.forEach(function(statuses) {

              toWrite += '  username: ' + statuses.user.name;
              toWrite += '  time/date: ' + statuses.created_at;
              toWrite += "<br><img src='";
              toWrite += statuses.entities.media[0].media_url;
//            console.log(.entities.media[0].media_url);
              toWrite += "'><br>"; 

              })
              //console.log(toWrite);

              
    
//
    } 
});
    



http.createServer(function(request,response){
	console.log("I got kicked");
	response.writeHeader(200, {"Content-Type": "text/plain"});
	response.end(toWrite);
}).listen(8080);
console.log("Server Running on 8080");	
