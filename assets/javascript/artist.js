var artist = "";
var queryURL = "";
var json = "";
$(document).ready(function(){
    if(localStorage.getItem("artistName") !== null){
        artistID = localStorage.getItem("artistID");
        queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?attractionID=" + artistID + "&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
        //queries to find attraction/artist
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            json = response;
            $("#shows-container").empty();
            var newContent = $("<div>").text(JSON.stringify(response));
            $("#shows-container").append(newContent);
        });
    }
})