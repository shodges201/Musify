$(document).ready(function () {
    var venueId = localStorage.getItem("venueId");
    var venueName = localStorage.getItem("venueName");
    var venueImage = localStorage.getItem("venueImage");
    var startDate = "";
    var startTime = "";
    $("#venue-image").attr("src", venueImage);
    var venueURL = "https://app.ticketmaster.com/discovery/v2/events.json?venueId=" + venueId + "&classificationName=music&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
    $("#venue-name").text(venueName);
    if(localStorage.getItem("venueTwitter") !== ""){
        var linkURL = localStorage.getItem("venueTwitter");
        linkURL = linkURL.replace("@","")

        var twitterItem = $("<li>").attr("id", "twitter-button");
        $("#social-media-links").append(twitterItem);
        twttr.widgets.createFollowButton(
            linkURL,
            document.getElementById('twitter-button'), {
                size: 'large'
            }
        );
    }
    $.ajax({
        url: venueURL,
        method: "GET",
        success: function(response){
            json = response;
            $("#shows-container").empty();

            for (var i = 0; i < response._embedded.events.length; i++) {
                var startDate = response._embedded.events[i].dates.start.localDate;
                if(startDate != undefined){
                    console.log(formatDate(startDate));
                    startDate = formatDate(startDate);
                }
                var startTime = response._embedded.events[i].dates.start.localTime;
                if(startTime != undefined){
                    console.log(startTime);
                    console.log(formatTime(startTime));
                    startTime = formatTime(startTime);
                }
                var eventName = response._embedded.events[i].name;
                var venueName = response._embedded.events[i]._embedded.venues[0].name;
                var city = response._embedded.events[i]._embedded.venues[0].city.name;
                var country = response._embedded.events[i]._embedded.venues[0].country.name;
                var goToURL = response._embedded.events[i].url;
                if (response._embedded.events[i]._embedded.venues[0].country.countryCode === "US" || response._embedded.events[i]._embedded.venues[0].country.countryCode === "CA") {
                    var state = response._embedded.events[i]._embedded.venues[0].state.name;
                    // var text = $("<p>").text(eventName + " " + venueName + " " + city + ", " + state + ", " + country);
                    $("#shows-container").append($("<tr>").addClass("show").attr("id", "table1").attr("show-link", goToURL)
                    .append($("<td>").append(eventName))
                    .append($("<td>").append(venueName))
                    .append($("<td>").append(city))
                    .append($("<td>").append(state))
                    .append($("<td>").append(country))
                    .append($("<td>").append(startDate))
                    .append($("<td>").append(startTime)));
                }
                else{
                    // var text = $("<p>").text(eventName + " " + venueName + " " + city + ", " + country);
                    $("#shows-container").append($("<tr>").addClass("show").attr("id", "table1").attr("show-link", goToURL)
                    .append($("<td>").append(eventName))
                    .append($("<td>").append(venueName))
                    .append($("<td>").append(city))
                    .append($("<td>").append(country))
                    .append($("<td>").append(startDate))
                    .append($("<td>").append(startTime)));
                }

            }
        },
        error(request, status, error){
            M.toast({
                html: 'There was error. Try reloading the page!'
            })
        }
    })
    $(document).on("click", ".show", function(){
        window.open($(this).attr("show-link"));
    })

    $("#artist-btn").on("click", function(event){
        if(localStorage.getItem("artistID") == null || localStorage.getItem("artistID") === ""){
            event.preventDefault();
            M.toast({html: 'Return to the home page to search for a location first!'})
        }
    })

    $("#location-btn").on("click", function(event){
        if(localStorage.getItem("gps") == null){
            event.preventDefault();
            M.toast({html: 'Return to the home page to search for a location first!'})
        }
    })

    function formatDate(date){
        date = date.split("-");
        var str = "";
        str = date[1] + "/" + date[2] + "/" + date[0];
        return str;
    }

    function formatTime(startTime){
        startTime = startTime.split(":");
        var str = "";
        if(parseInt(startTime[0]) > 12){
            str = (parseInt(startTime[0]) - 12) + ":" + startTime[1] + " pm";
        }
        else if(parseInt(startTime[0]) == 12){
            str = startTime[0] + ":" + startTime[1] + " pm";
        }
        else if(parseInt(startTime[0]) == 24){
            str = startTime[0] + ":" + startTime[1] + " am";
        }
        else{
            str = startTime[0] + ":" + startTime[1] + " am";
        }
        return str;
    }
});