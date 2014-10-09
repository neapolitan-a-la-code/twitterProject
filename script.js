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
        toWrite += "<div class='col-md-4 col-sm-6 col-xs-12'>" + 
          "<div class='thumbnail'>" + 
          "<div id='outer'><img class = 'img-responsive' src='" +
          statuses.entities.media[0].media_url + "'></div>" +
          "<div class='caption'>" +
          "<h4>" + statuses.user.name + "</h4>" +
          "<p>" + statuses.created_at + "</p>" +
          "</div></div></div>";
      }
    });


    $("#content").append(
      toWrite
    );
  }

  pulldata();

});