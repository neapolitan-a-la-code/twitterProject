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
T.get('search/tweets', { q: 'collectiveacademy', count: 50, media: true }, function(err, reply) {
    if (err) {
        console.dir(err);
    } else {
        for (var i = 0; i < reply.statuses.length; i++) {
              var status = reply.statuses[i];
              toWrite += "<img src='";
              toWrite += status.entities.media[0].media_url;
              toWrite += "'>";
              
//            if (i===reply.statuses.length) toWrite += "'><";
//            console.log('*************************');
//            console.log('  username: ' + status.user.name);
//            console.log('   ' + status.text);
//            console.log('  time/date: ' + status.created_at);
//            console.log('*************************');
        }
      console.log(toWrite);
    }
});