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

    $("#content div").append(
      "<div class='tab-pane' id=" + toWrite +"></div>"
    );
  }

  pulldata();

});