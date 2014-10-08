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
    toWrite = ""; 
    twstring.statuses.forEach(function(statuses) {
      if (typeof statuses.entities.media !== 'undefined') {
        toWrite += '  username: ' + statuses.user.name;
        toWrite += '  time/date: ' + statuses.created_at;
        toWrite += "<br><img src='";
        toWrite += statuses.entities.media[0].media_url;
        toWrite += "'><br>";
      }
    });

    $("#content").append(
      "<div class='row'><div class='col-md-4 col-sm-6 col-xs-12'><div class='thumbnail'>" + 
        toWrite +
      "</div></div></div>"
    );
  }

  pulldata();

});