var numResults = "20";
var searchTerm = "";
var state = "";
var city = "";
var zipCode = "";
var radius = "";

var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + searchTerm +"&size=" + numResults + "&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";

$("#artist-search").on("click", function(){
    var expand = $("<div>").addClass("card-action");
    $("#centerCard").append(expand);
})

$("#venue-search").on("click", function(){

})

$("#location-search").on("click", function(){

})