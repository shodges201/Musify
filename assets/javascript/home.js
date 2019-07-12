var numResults = "20";
var searchTerm = "";
var state = "";
var city = "";
var zipCode = "";
var radius = "";

var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + searchTerm +"&size=" + numResults + "&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
var expanded = false;

$("#artist-search").on("click", function(){
    console.log("clicked");
    if(expanded){
        $("#expandCard").remove();
    }
    var expandCard = $("<div>").addClass("card-action").attr("id", "expandCard");
    var newRow = $("<div>").addClass("row");
    var newCol = $("<form>").addClass("col s12");
    var smallerRow = $("<div>").addClass("row");
    var inputRow = $("<div>").addClass("input-field col s12");
    var inputField = $("<input>").attr("type", "text").attr("id", "name").addClass("validate").attr("placeholder", "Artist Name");

    inputRow.append(inputField);
    smallerRow.append(inputRow);
    newCol.append(smallerRow);
    newRow.append(newCol);
    expandCard.append(newRow);
    $("#centerCard").append(expandCard);

    newRow = $("<div>").addClass("row");
    newCol = $("<form>").addClass("col s4");
    var btn = $("<button>").addClass("waves-effect waves-light btn").text("Search").attr("id", "searchBtn");


    newCol.append(btn);
    newRow.append(newCol);
    expandCard.append(newRow);

    expanded = true;
})

$("#venue-search").on("click", function(){
    if(expanded){
        $("#expandCard").remove();
    }

    var expandCard = $("<div>").addClass("card-action").attr("id", "expandCard");
    var newRow = $("<div>").addClass("row");
    var newCol = $("<form>").addClass("col s12");
    var smallerRow = $("<div>").addClass("row");
    var inputRow = $("<div>").addClass("input-field col s12");
    var inputField = $("<input>").attr("type", "text").attr("id", "name").addClass("validate").attr("placeholder", "Venue");

    inputRow.append(inputField);
    smallerRow.append(inputRow);
    newCol.append(smallerRow);
    newRow.append(newCol);
    expandCard.append(newRow);
    $("#centerCard").append(expandCard);


    newRow = $("<div>").addClass("row");
    newCol = $("<form>").addClass("col s4");
    var btn = $("<button>").addClass("waves-effect waves-light btn").text("Search").attr("id", "searchBtn");


    newCol.append(btn);
    newRow.append(newCol);
    expandCard.append(newRow);
    
    expanded = true;  
})

$("#location-search").on("click", function(){
    if(expanded){
        $("#expandCard").remove();
    }
    var expandCard = $("<div>").addClass("card-action").attr("id", "expandCard");
    var newRow = $("<div>").addClass("row");
    var newCol = $("<form>").addClass("col s12");
    var smallerRow = $("<div>").addClass("row");
    var inputRow = $("<div>").addClass("input-field col s12");
    var inputField = $("<input>").attr("type", "text").attr("id", "name").addClass("validate").attr("placeholder", "Location");

    inputRow.append(inputField);
    smallerRow.append(inputRow);
    newCol.append(smallerRow);
    newRow.append(newCol);
    expandCard.append(newRow);
    $("#centerCard").append(expandCard);
    expanded = true;
    

})