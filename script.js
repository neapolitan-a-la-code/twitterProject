$(document).ready(function() {
  
alert("HELLO");

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
//        $("#main").append("HELLO DATA PULLED");
        //}
        error: function (errorT) {
        alert(errorT);
      }
    
    });

};


function massageData(twstring) {

toWrite = "";
    //twstring = JSON.parse(twstring);

    //alert(twstring);

              twstring.statuses.forEach(function(statuses) {

              if (typeof statuses.entities.media !== 'undefined') {

              toWrite += '  username: ' + statuses.user.name;
              toWrite += '  time/date: ' + statuses.created_at;
              toWrite += "<br><img src='";
              toWrite += statuses.entities.media[0].media_url;
              toWrite += "'><br>";
              }
            }
            
      )
              alert(toWrite);

              //DOM insertion here

//return toWrite;
}


pulldata();
//alert(toWrite);
//htmlToWrite = jsonstring.toString();





 

    });

   

