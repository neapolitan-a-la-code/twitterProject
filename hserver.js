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
