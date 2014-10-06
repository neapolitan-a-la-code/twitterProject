var Twit = require('twit');
 
var T = new Twit({
    consumer_key:         'aTIpG0jGl6nwp4KWhUILBQ'
    , consumer_secret:      'cUmQNsQ6u4wn4PUcoQ9PmqzFEzVmzJmGnD2gROeY'
    , access_token:         '44984017-EKeo9ivt957w7Y6uiT2NsCFbM1PQ46KF0c5J41egQ'
    , access_token_secret:  'DvTKLNq0Nev4XriCRm8cdfRkz7uYtbgddjcl0amOSis'
});

console.log("Reading in the last 50 tweets with search: neapolitan");
T.get('search/tweets', { q: 'neapolitan', count: 50 }, function(err, reply) {
    if (err) {
        console.dir(err);
    } else {
        for (var i = 0; i < reply.statuses.length; i++) {
//            console.log(reply);
            var status = reply.statuses[i];
            console.log('*************************');
            console.log('  username: ' + status.user.name);
            console.log('   ' + status.text);
            console.log('  time/date: ' + status.created_at);
            console.log('*************************');
        }
    }
});