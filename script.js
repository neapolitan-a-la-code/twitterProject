$(document).ready(function() {

  var jsonstring = "";
  var htmlToWrite ="";
  var toWrite = "";

  var pulldata = function() {

    $.ajax({
        type: "GET",
        cache: false,
        dataType: "JSON",
        url: "http://neapolitan.herokuapp.com/",
        success: function(data) {
          jsonstring = data;
          massageData(jsonstring);
        },
        error: function (errorT) {
          alert(errorT);
        }
    });
  };

  function massageData(twstring) {
    twstring.statuses.forEach(function(statuses) {
      if (typeof statuses.entities.media !== 'undefined') {
        toWrite += "<div class='col-md-4 col-sm-6 col-xs-12 thumb'><a class='thumbnail' href='#'><img class = 'img-responsive' src='" +
          statuses.entities.media[0].media_url + "'>" +
          'username:' + statuses.user.name +
          '  time/date: ' + statuses.created_at +
          "</a></div>";
      }
    });

    $("#content").append(
      toWrite
    );
  }

  pulldata();

});