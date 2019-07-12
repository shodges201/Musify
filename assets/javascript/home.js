var numResults = "20";
var searchTerm = "";
var state = "";
var city = "";
var zipCode = "";
var radius = "";
var artist= "";

var expanded = false;

$("#artist-search").on("click", function(){
    console.log("clicked");
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming";
    if(expanded){
        $("#expandCard").remove();
    }
    //First input field
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
    var btn = $("<button>").addClass("waves-effect waves-light btn").text("Search").attr("id", "artistBtn");

    newCol.append(btn);
    newRow.append(newCol);
    expandCard.append(newRow);
    

    expanded = true;
})

$("#venue-search").on("click", function(){
    var eventQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + searchTerm +"&size=" + numResults + "&postalcode=" + zipCode + "&stateCode=" + state + "&city=" + city+ "&radius=" + radius + "&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
    if(expanded){
        $("#expandCard").remove();
    }
    //location name
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

    //Second input field
    newRow = $("<div>").addClass("row");
    newCol = $("<form>").addClass("col s12");
    smallerRow = $("<div>").addClass("row");
    inputRow = $("<div>").addClass("input-field col s12");
    inputField = $("<input>").attr("type", "text").attr("id", "").addClass("validate").attr("placeholder", "Artist Name");

    //button
    newRow = $("<div>").addClass("row");
    newCol = $("<form>").addClass("col s4");
    var btn = $("<button>").addClass("waves-effect waves-light btn").text("Search").attr("id", "venueBtn");


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

    newRow = $("<div>").addClass("row");
    newCol = $("<form>").addClass("col s4");
    var btn = $("<button>").addClass("waves-effect waves-light btn").text("Search").attr("id", "locationBtn");


    newCol.append(btn);
    newRow.append(newCol);
    expandCard.append(newRow);

    expanded = true;
    

})

$(document).on("click", "#artistBtn", function(event){
    event.preventDefault();
    console.log("searched");
    artist = $("#name").val();
    localStorage.setItem("artistName", artist);
})