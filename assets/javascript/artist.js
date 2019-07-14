var artist = "";
var queryURL = "";
var json = "";
var oneResult = false;
$(document).ready(function(){
    if(localStorage.getItem("artistName") !== null){
        console.log("in local storage");
        artist = localStorage.getItem("artistName");
        queryURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&classificationName=music&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
        //queries to find attraction/artist
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            json = response;
            $("#shows-container").empty();
            var newContent = $("<div>").text(JSON.stringify(response));
            $("#shows-container").append(newContent);
            if(response.attraction.length > 1){
                oneResult = false;
            }
            if(oneResult){
                displayResults();
            }
            else{
                for(var i = 0; i < response.attraction.length; i++){
                    $("#")
                }
            }
        });
    }
})