var Twit = require('twit');
var credentials = require('./credentials.js');

 
var T = new Twit({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token: credentials.access_token,
    access_token_secret: credentials.access_token_secret
});

console.log("Reading in the last 20 tweets with search: #collectiveacademy");
T.get('search/tweets', { q: 'collectiveacademy', count: 20, media: true }, function(err, reply) {
    if (err) {
        console.dir(err);
    } else {
        for (var i = 0; i < reply.statuses.length; i++) {

              var status = reply.statuses[i];
              console.log(status.entities.media[0].media_url);
//            console.log('*************************');
//            console.log('  username: ' + status.user.name);
//            console.log('   ' + status.text);
//            console.log('  time/date: ' + status.created_at);
//            console.log('*************************');
        }
    }
});