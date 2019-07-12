var numResults = "20";
var searchTerm = "";
var state = "";
var city = "";
var zipCode = "";
var radius = "";

var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + searchTerm +"&size=" + numResults + "&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
var expanded = false;

$("#artist-search").on("click", function(){
    if(!expanded){
        var expand = $("<div>").addClass("card-action");
        $("#centerCard").append(expand);
        expanded = true;
    }
})

$("#venue-search").on("click", function(){
    if(!expanded){
        var expand = $("<div>").addClass("card-action");
        $("#centerCard").append(expand);
        var expand = true;
    
    }
    
})

$("#location-search").on("click", function(){
    if(!expanded){
        var expand = $("<div>").addClass("card-action");
        $("#centerCard").append(expand);
        var expand = true;
    }
    

})