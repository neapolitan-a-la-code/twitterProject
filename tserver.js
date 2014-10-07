var Twit = require('twit');
var Hapi = require('hapi');
var toWrite = "";
var credentials = require('./credentials.js');


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
    

var server = Hapi.createServer('localhost', Number(process.argv[2]) || 8080);

server.route({path: '/', method:'GET', handler: function handler(request, reply) {


    reply.end(toWrite);


//  reply("<html><head><title>"+ "Sup"+"</title><body>" + toWrite + "</body></html>");
   }

});

server.start();
console.log("Node server up at " + server.info.uri + ", searching: #collectiveacademy");
