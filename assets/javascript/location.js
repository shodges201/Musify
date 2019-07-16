var locationState = localStorage.getItem("locationState");
var locationCity = localStorage.getItem("locationCity");

if(localStorage.getItem("gps") === "false"){
    var locationURL = "https://app.ticketmaster.com/discovery/v2/events.json?sort=relevance,desc&stateCode=" + locationState +"&city=" + locationCity + "&classificationName=music&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
}
else{
    var locationURL = "https://app.ticketmaster.com/discovery/v2/events.json?sort=relevance,desc&geoPoint=" + localStorage.getItem("hash") + "&classificationName=music&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
}


$(document).ready(function(){
    $.ajax({
        url: locationURL,
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
            var goToURL = response._embedded.events[i].url;
            if(response._embedded.events[i]._embedded.venues[0].country.countryCode === "US" || response._embedded.events[i]._embedded.venues[0].country.countryCode === "CA"){
                var state = response._embedded.events[i]._embedded.venues[0].state.name;
                // var text = $("<p>").text(eventName + " " + venueName + " " + city + ", " + state + ", " + country);
                $("#shows-container").append($("<tr>")
                     .append($("<td>").append(eventName))
                     .append($("<td>").append(venueName))
                     .append($("<td>").append(city))
                    // .append($("<td>").append(state))
                     .append($("<td>").append(country)));
            }
            
            else{
                // var text = $("<p>").text(eventName + " " + venueName + " " + city + ", " + country);
                // $("#shows-container").append(text);
                $("#shows-container").append($("<tr>").addClass("show").attr("show-link", goToURL)
                     .append($("<td>").append(eventName))
                     .append($("<td>").append(venueName))
                     .append($("<td>").append(city))
                     .append($("<td>").append(country)));
            }
            
        }
        var locationDisplayName = response._embedded.events[0]._embedded.venues[0].city.name;
        $("#location-name").text(locationDisplayName);
        $("#location-image").attr("src", response._embedded.events[0].images[0].url);
    })
    $(document).on("click", ".show", function(){
        window.open($(this).attr("show-link"));
    })
})