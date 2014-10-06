var Twit = require('twit');
var Hapi = require('hapi');

var toWrite = "";

var T = new Twit({
    consumer_key:         'aTIpG0jGl6nwp4KWhUILBQ'
    , consumer_secret:      'cUmQNsQ6u4wn4PUcoQ9PmqzFEzVmzJmGnD2gROeY'
    , access_token:         '44984017-EKeo9ivt957w7Y6uiT2NsCFbM1PQ46KF0c5J41egQ'
    , access_token_secret:  'DvTKLNq0Nev4XriCRm8cdfRkz7uYtbgddjcl0amOSis'
});

console.log("Reading in the last 20 tweets with search: #collectiveacademy");
T.get('search/tweets', { q: 'collectiveacademy', count: 20 }, function(err, reply) {
    if (err) {
        console.dir(err);
    } else {
        for (var i = 0; i < reply.statuses.length; i++) {
              var status = reply.statuses[i];

              toWrite += '  username: ' + status.user.name;
              toWrite += '  time/date: ' + status.created_at;
              toWrite += "<br><img src='";
              toWrite += status.entities.media[0].media_url;
//            console.log(status.entities.media[0].media_url);
              toWrite += "'><br>";
              
//            if (i===reply.statuses.length) toWrite += "'><";
//            console.log('*************************');
//            console.log('  username: ' + status.user.name);
//            console.log('   ' + status.text);
//            console.log('  time/date: ' + status.created_at);
//            console.log('*************************');
//            console.log(status);
          
        }
//
    }
});


var server = Hapi.createServer('localhost', Number(process.argv[2]) || 8080);

server.route({path: '/', method:'GET', handler: function handler(request, reply) {
 reply("<html><head><title>"+ "Sup"+"</title><body>" + toWrite + "</body></html>");
   }

});

server.start();
console.log("server going");