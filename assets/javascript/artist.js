var artist = "";
var queryURL = "";
var json = "";
$(document).ready(function(){
    var artistID = localStorage.getItem("artistID");
    var artistName = localStorage.getItem("artistName");
    var imageURL = localStorage.getItem("imageURL");
    $("#artist-name").text(artistName);
    $("#artist-image").attr("src", imageURL);
    
    queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?attractionId=" + artistID + "&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
    //queries to get artist events
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        json = response;
        $("#shows-container").empty();
        var newContent = $("<div>").text(JSON.stringify(response));
        $("#shows-container").append(newContent);
    });

})