var locationState = localStorage.getItem("locationState");
var locationCity = localStorage.getItem("locationCity");
var sortBy = "relevance,desc";
var radius = "25";
var size = 20;

if (localStorage.getItem("gps") === "false") {
    if (localStorage.getItem("sortBy") != null && localStorage.getItem("sortBy") != "undefined") {
        console.log("a" + localStorage.getItem("sortBy"));
        sortBy = localStorage.getItem("sortBy");
    }
    if (localStorage.getItem("sortBy") != null && localStorage.getItem("sortBy") != "undefined") {
        radius = localStorage.getItem("radius");
    }
    var locationURL = "https://app.ticketmaster.com/discovery/v2/events.json?stateCode=" + locationState + "&city=" + locationCity + "&sort=" + sortBy + "&radius=" + radius + "&classificationName=music&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
} else {
    if (localStorage.getItem("sortBy") != null && localStorage.getItem("sortBy") != "undefined") {
        console.log("c" + localStorage.getItem("sortBy"));
        sortBy = localStorage.getItem("sortBy");
    }
    if (localStorage.getItem("sortBy") != null && localStorage.getItem("sortBy") != "undefined") {
        radius = localStorage.getItem("radius");
    }
    console.log("d" + localStorage.getItem("sortBy"));
    var locationURL = "https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=" + localStorage.getItem("hash") + "&sort=" + sortBy + "&radius=" + radius + "&classificationName=music&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
}
console.log(locationURL);

$(document).ready(function () {
    $.ajax({
        url: locationURL,
        method: "GET",
        success: function (response) {
            json = response;
            $("#shows-container").empty();
            if (response.page.totalElements < 20) {
                size = response.page.totalElements;
            }
            for (var i = 0; i < size; i++) {
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
                    // var text = $("<p>").text(eventName + " " + venueName + " " + city + ", " + state + ", " + country);
                    $("#shows-container").append($("<tr>").addClass("show").attr("id", "table1").attr("show-link", goToURL)
                        .append($("<td>").append(eventName))
                        .append($("<td>").append(venueName))
                        .append($("<td>").append(city))
                        // .append($("<td>").append(state))
                        .append($("<td>").append(country))
                        .append($("<td>").append(startDate))
                        .append($("<td>").append(startTime)));
                } else {
                    // var text = $("<p>").text(eventName + " " + venueName + " " + city + ", " + country);
                    // $("#shows-container").append(text);
                    $("#shows-container").append($("<tr>").addClass("show").attr("id", "table1").attr("show-link", goToURL)
                        .append($("<td>").append(eventName))
                        .append($("<td>").append(venueName))
                        .append($("<td>").append(city))
                        .append($("<td>").append(country))
                        .append($("<td>").append(startDate))
                        .append($("<td>").append(startTime)));
                }

            }
            if (size > 0) {
                var locationDisplayName = response._embedded.events[0]._embedded.venues[0].city.name;
                $("#location-name").text(locationDisplayName);
                $("#location-image").attr("src", response._embedded.events[0].images[0].url);
            } else {
                var locationDisplayName = localStorage.getItem("locationCity");
                locationCity = locationCity.split(" ");
                var str = "";
                for (var j = 0; j < locationCity.length; j++) {
                    str += locationCity[j][0].toUpperCase() + locationCity[j].substring(1) + " ";
                }
                $("#location-name").text(str);
            }
        },
        error(request, status, error) {
            M.toast({
                html: 'There was error. Try reloading the page!'
            })
        }
    })
    $(document).on("click", ".show", function () {
        window.open($(this).attr("show-link"));
    })

    $("#artist-btn").on("click", function (event) {
        if (localStorage.getItem("artistID") == null || localStorage.getItem("artistID") === "") {
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
})