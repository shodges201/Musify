$(document).ready(function(){
    var venueId = localStorage.getItem("venueId");
    var venueName = localStorage.getItem("venueName");
    var venueURL = "https://app.ticketmaster.com/discovery/v2/events.json?venueId=" + venueId + "&classificationName=music&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
    $("#venueName").text(venueName);
    var linkURL = localStorage.getItem("twitter");
        linkURL = linkURL.replace("@","")
        var twitterItem = $("<li>").attr("id", "twitter-button");
        $("#social-media-links").append(twitterItem);
        twttr.widgets.createFollowButton(
            linkURL,
            document.getElementById('twitter-button'),
            {
              size: 'large'
            }
          );
    $.ajax({
        url: venueURL,
        method: "GET"
    }).then(function(response){
        json = response;
        $("#shows-container").empty();
        for(var i = 0; i < response._embedded.events.length; i++){
            var startDate = response._embedded.events[i].dates.start.localDate;
            var startTime = response._embedded.events[i].dates.start.localTime;
            var eventName = response._embedded.events[i].name;
            var venueName = response._embedded.events[i]._embedded.venues[0].name;
            var city = response._embedded.events[i]._embedded.venues[0].city.name;
            var country = response._embedded.events[i]._embedded.venues[0].country.name;
            if(response._embedded.events[i]._embedded.venues[0].country.countryCode === "US" || response._embedded.events[i]._embedded.venues[0].country.countryCode === "CA"){
                var state = response._embedded.events[i]._embedded.venues[0].state.name;
                var text = $("<p>").text(eventName + " " + venueName + " " + city + ", " + state + ", " + country);
                $("#shows-container").append(text);
            }
            else{
                var text = $("<p>").text(eventName + " " + venueName + " " + city + ", " + country);
                $("#shows-container").append(text);
            }
            
        }
    });
});
  