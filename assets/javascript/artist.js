var artist = "";
var queryURL = "";
var json = "";
$(document).ready(function(){
    var artistID = localStorage.getItem("artistID");
    var artistName = localStorage.getItem("artistName");
    var imageURL = localStorage.getItem("imageURL");
    $("#artist-name").text(artistName);
    $("#artist-image").attr("src", imageURL);
    if(localStorage.getItem("itunes") !== ""){
        var linkURL = localStorage.getItem("itunes");
        var link = $("<a>").attr("href", linkURL).text("itunes").attr("target", "_blank").addClass("social-media");
        var listItem = $("<li>").append(link);
        $("#social-media-links").append(listItem);
    }
    if(localStorage.getItem("instagram") !== ""){
        var linkURL = localStorage.getItem("instagram");
        var link = $("<a>").attr("href", linkURL).text("Instagram").attr("target", "_blank").addClass("social-media");
        var listItem = $("<li>").append(link);
        $("#social-media-links").append(listItem);
    }
    if(localStorage.getItem("twitter") !== ""){
        var linkURL = localStorage.getItem("twitter");
        var link = $("<a>").attr("href", linkURL).text("Twitter").attr("target", "_blank").addClass("social-media");
        var listItem = $("<li>").append(link);
        $("#social-media-links").append(listItem);
    }
    if(localStorage.getItem("youtube") !== ""){
        var linkURL = localStorage.getItem("youtube");
        var link = $("<a>").attr("href", linkURL).text("Youtube").attr("target", "_blank").addClass("social-media");
        var listItem = $("<li>").append(link);
        $("#social-media-links").append(listItem);
    }
    if(localStorage.getItem("facebook") !== ""){
        var linkURL = localStorage.getItem("facebook");
        var link = $("<a>").attr("href", linkURL).text("Facebook").attr("target", "_blank").addClass("social-media");
        var listItem = $("<li>").append(link);
        $("#social-media-links").append(listItem);
    }
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