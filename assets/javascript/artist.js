var artist = "";
var queryURL = "";
var json = "";
$(document).ready(function () {

    var artistID = localStorage.getItem("artistID");
    var artistName = localStorage.getItem("artistName");
    var imageURL = localStorage.getItem("imageURL");
    var numEvents = localStorage.getItem("upcomingEvents");
    $("#artist-name").text(artistName);
    $("#artist-image").attr("src", imageURL);

    if (localStorage.getItem("artistFacebook") !== "") {
        var linkURL = localStorage.getItem("artistFacebook");
        //var link = $("<a>").attr("href", linkURL).text("Facebook").attr("target", "_blank").addClass("social-media").attr("rel", "noopener noreferrer");
        // facebook sdk
        var link = $("<div>").addClass("fb-like").attr("data-href", linkURL).attr("data-width", "250px").attr("data-layout", "standard").attr("data-action", "like").attr("data-size", "large").attr("data-show-faces", "true").attr("data-share", "true");
        var listItem = $("<li>").append(link).addClass("social-media-container");
        $("#social-media-links").append(listItem);
    }

    if (localStorage.getItem("artistTwitter") !== "") {
        var linkURL = localStorage.getItem("artistTwitter");
        linkURL = linkURL.replace("https://twitter.com/", "")
        var twitterItem = $("<li>").attr("id", "twitter-button").addClass("social-media-container");
        $("#social-media-links").append(twitterItem);
        twttr.widgets.createFollowButton(
            linkURL,
            document.getElementById('twitter-button'), {
                size: 'large'
            }
        );
    }

    if (localStorage.getItem("artistItunes") !== "") {
        var linkURL = localStorage.getItem("artistItunes");
        var link = $("<a>").attr("href", linkURL).text("Apple Music").attr("target", "_blank").addClass("social-media").attr("rel", "noopener noreferrer");
        var listItem = $("<li>").append(link).addClass("social-media-container");
        $("#social-media-links").append(listItem);
    }
    if (localStorage.getItem("artistInstagram") !== "") {
        var linkURL = localStorage.getItem("artistInstagram");
        var link = $("<a>").attr("href", linkURL).text("Instagram").attr("target", "_blank").addClass("social-media").attr("rel", "noopener noreferrer");
        var listItem = $("<li>").append(link).addClass("social-media-container");
        $("#social-media-links").append(listItem);
    }

    if (localStorage.getItem("artistYoutube") !== "") {
        var linkURL = localStorage.getItem("artistYoutube");
        var listItem = $("<li>");
        // linkURL = linkURL.replace("https://www.youtube.com/user/", "");
        // var options = {
        //   'channel': linkURL,
        //   'layout': 'default'
        // };
        // gapi.ytsubscribe.render(listItem, options);
        //var link = $("<div>").addClass("g-ytsubscribe").attr("data-channel", linkURL).attr("data-layout", "default").attr("data-count", "default");
        var link = $("<a>").attr("href", linkURL).text("Youtube").attr("target", "_blank").addClass("social-media").attr("rel", "noopener noreferrer");
        listItem.append(link).addClass("social-media-container");
        $("#social-media-links").append(listItem);
    }


    //only query API if artist has upcoming events
    if (numEvents > 0) {
        queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?attractionId=" + artistID + "&sort=date,asc&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
        //queries to get artist events
        $.ajax({
            url: queryURL,
            method: "GET",
            success: function (response) {
                json = response;
                $("#shows-container").empty();
                for (var i = 0; i < response._embedded.events.length; i++) {
                    console.log(response._embedded.events[i]);
                    var startDate = response._embedded.events[i].dates.start.localDate;
                    if (startDate != undefined) {
                        console.log(formatDate(startDate));
                        startDate = formatDate(startDate);
                    }
                    var startTime = response._embedded.events[i].dates.start.localTime;
                    if (startTime != undefined) {
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
                    }
                    $("#shows-container").append($("<tr>").addClass("show").attr("id", "table1").attr("show-link", goToURL)
                        .append($("<td>").append(eventName))
                        .append($("<td>").append(venueName))
                        .append($("<td>").append(city))
                        .append($("<td>").append(state))
                        .append($("<td>").append(country))
                        .append($("<td>").append(startDate))
                        .append($("<td>").append(startTime)));
                }
            },
            error: function (request, status, error) {
                M.toast({
                    html: 'There was error. Try reloading the page!'
                })
            }
        })
    }
    // no events to show
    else {
        $("#shows-container").text("no upcoming events");
    }

    function formatDate(date) {
        date = date.split("-");
        var str = "";
        str = date[1] + "/" + date[2] + "/" + date[0];
        return str;
    }

    function formatTime(startTime) {
        startTime = startTime.split(":");
        var str = "";
        if (parseInt(startTime[0]) > 12) {
            str = (parseInt(startTime[0]) - 12) + ":" + startTime[1] + " pm";
        } else if (parseInt(startTime[0]) == 12) {
            str = startTime[0] + ":" + startTime[1] + " pm";
        } else if (parseInt(startTime[0]) == 24) {
            str = startTime[0] + ":" + startTime[1] + " am";
        } else {
            str = startTime[0] + ":" + startTime[1] + " am";
        }
        return str;
    }

    $(document).on("click", ".show", function () {
        window.open($(this).attr("show-link"));
    })

    $("#location-btn").on("click", function (event) {
        if (localStorage.getItem("gps") == null) {
            event.preventDefault();
            M.toast({
                html: 'Return to the home page to search for a location first!'
            })
        }
    })

    $("#venue-btn").on("click", function (event) {
        if (localStorage.getItem("venueId") == null || localStorage.getItem("venueId") == "") {
            event.preventDefault();
            M.toast({
                html: 'Return to the home page to search for a venue first!'
            })
        }
    })
})