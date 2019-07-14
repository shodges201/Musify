var artist = "";
var queryURL = "";
var json = "";
$(document).ready(function(){
    var artistID = localStorage.getItem("artistID");
    var artistName = localStorage.getItem("artistName");
    var imageURL = localStorage.getItem("imageURL");
    var numEvents = localStorage.getItem("upcomingEvents");
    $("#artist-name").text(artistName);
    $("#artist-image").attr("src", imageURL);
    if(localStorage.getItem("itunes") !== ""){
        var linkURL = localStorage.getItem("itunes");
        var link = $("<a>").attr("href", linkURL).text("itunes").attr("target", "_blank").addClass("social-media").attr("rel", "noopener noreferrer");
        var listItem = $("<li>").append(link);
        $("#social-media-links").append(listItem);
    }
    if(localStorage.getItem("instagram") !== ""){
        var linkURL = localStorage.getItem("instagram");
        var link = $("<a>").attr("href", linkURL).text("Instagram").attr("target", "_blank").addClass("social-media").attr("rel", "noopener noreferrer");
        var listItem = $("<li>").append(link);
        $("#social-media-links").append(listItem);
    }
    if(localStorage.getItem("twitter") !== ""){
        var linkURL = localStorage.getItem("twitter");
        var link = $("<a>").attr("href", linkURL).text("Twitter").attr("target", "_blank").addClass("social-media").attr("rel", "noopener noreferrer");
        var listItem = $("<li>").append(link);
        $("#social-media-links").append(listItem);
    }
    if(localStorage.getItem("youtube") !== ""){
        var linkURL = localStorage.getItem("youtube");
        var link = $("<a>").attr("href", linkURL).text("Youtube").attr("target", "_blank").addClass("social-media").attr("rel", "noopener noreferrer");
        var listItem = $("<li>").append(link);
        $("#social-media-links").append(listItem);
    }
    if(localStorage.getItem("facebook") !== ""){
        var linkURL = localStorage.getItem("facebook");
        var link = $("<a>").attr("href", linkURL).text("Facebook").attr("target", "_blank").addClass("social-media").attr("rel", "noopener noreferrer");
        var listItem = $("<li>").append(link);
        $("#social-media-links").append(listItem);
    }
    //only query API if artist has upcoming events
    if(numEvents > 0){
        queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?attractionId=" + artistID + "&sort=date,asc&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
        //queries to get artist events
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            json = response;
            $("#shows-container").empty();
            //var newContent = $("<div>").text(JSON.stringify(response));
            //$("#shows-container").append(newContent);
            for(var i = 0; i < numEvents; i++){
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
    }
    // no events to show
    else{
        $("#shows-container").text("no upcoming events");
    }

})