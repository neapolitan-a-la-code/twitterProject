var http = require("http");
var imagecode = "";
var counter = 0;

var options = {
  host: '127.0.0.1',
  port: 8080,
  path: '/'
};

http.createServer(function(request,response){
	console.log("I got kicked");


  http.get(options, function(res) {
//    console.log("Got response: " + res.statusCode);

    res.on("data", function(chunk) {
      imagecode = chunk;
      counter = 1;
      response.end(imagecode);
      //console.log(chunk.toString);
  
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });

	response.writeHeader(200, {"Content-Type": "text/html"});
	

}).listen(7070);
console.log("Server Running on 7070");	


/*

//code below will parse JSON and skip tweets w/o pics

T.get('search/tweets', { q: 'collectiveacademy', count: 20 }, function(err, reply) {


    if (err) {
        console.dir(err);
    } 

    else {

      
              reply.statuses.forEach(function(statuses) {

              if (typeof statuses.entities.media !== 'undefined') {

              toWrite += '  username: ' + statuses.user.name;
              toWrite += '  time/date: ' + statuses.created_at;
              toWrite += "<br><img src='";
              toWrite += statuses.entities.media[0].media_url;
              toWrite += "'><br>"; 
              }
              

              })
              //console.log(toWrite);

              
    
//
    }
    */