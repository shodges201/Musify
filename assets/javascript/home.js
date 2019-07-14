$(document).ready(function(){

    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });




 //   $('.tap-target').tapTarget();

var numResults = "20";
var searchTerm = "";
var state = "";
var city = "";
var zipCode = "";
var radius = "";
var artist= "";
var local = "";
var venueName = "";
var venueState = "";
var expanded = false;

$("#artist-search").on("click", function(){
    console.log("clicked");
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming";
    if(expanded){
        $("#inputSection").remove();
    }
    //Name
    var inputSection = $("<div>").attr("id", "inputSection");
    $("#middleSection").append(inputSection);

    var newRow = $("<div>").addClass("row");
    var newCol = $("<form>").addClass("col s6");
    var smallerRow = $("<div>").addClass("row");
    var inputRow = $("<div>").addClass("input-field col s12");
    var inputField = $("<input>").attr("type", "text").attr("id", "artistName").addClass("validate").attr("placeholder", "Artist Name");

    inputRow.append(inputField);
    smallerRow.append(inputRow);
    newCol.append(smallerRow);
    newRow.append(newCol);
    inputSection.append(newRow);
    $("#inputSection").append(newRow);

    newRow = $("<div>").addClass("row");
    newCol = $("<form>").addClass("col s1");
    var btn = $("<a>").addClass("waves-effect waves-light btn").text("Search").attr("id", "artistBtn").attr("href", "assets/html/artist.html");

    newCol.append(btn);
    newRow.append(newCol);
    inputSection.append(newRow);
    

    expanded = true;
})

$("#venue-search").on("click", function(){
    var eventQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + searchTerm +"&size=" + numResults + "&postalcode=" + zipCode + "&stateCode=" + state + "&city=" + city+ "&radius=" + radius + "&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
    if(expanded){
        $("#inputSection").remove();
    }
    //venue name
    var inputSection = $("<div>").attr("id", "inputSection");
    $("#middleSection").append(inputSection);

    var newRow = $("<div>").addClass("row");
    var newCol = $("<form>").addClass("col s12");
    var smallerRow = $("<div>").addClass("row");
    var inputRow = $("<div>").addClass("input-field col s6");
    var inputField = $("<input>").attr("type", "text").attr("id", "venueName").addClass("validate").attr("placeholder", "Name");

    inputRow.append(inputField);
    smallerRow.append(inputRow);
    newCol.append(smallerRow);
    newRow.append(newCol);
    inputSection.append(newRow);

    //State
    newRow = $("<div>").addClass("row");
    newCol = $("<form>").addClass("col s6");
    smallerRow = $("<div>").addClass("row");
    inputRow = $("<div>").addClass("input-field col s12");
    inputField = $("<input>").attr("type", "text").attr("id", "venueState").addClass("validate").attr("placeholder", "State");

    inputRow.append(inputField);
    smallerRow.append(inputRow);
    newCol.append(smallerRow);
    newRow.append(newCol);
    inputSection.append(newRow);

    //button
    newRow = $("<div>").addClass("row");
    newCol = $("<form>").addClass("col s1");
    var btn = $("<a>").addClass("waves-effect waves-light btn").text("Search").attr("id", "venueBtn").attr("href", "assets/html/venue.html");


    newCol.append(btn);
    newRow.append(newCol);
    inputSection.append(newRow);

    expanded = true;  
})

$("#location-search").on("click", function(){
    if(expanded){
        $("#inputSection").remove();
    }
    var inputSection = $("<div>").attr("id", "inputSection");
    $("#middleSection").append(inputSection);

    //location name
    var newRow = $("<div>").addClass("row");
    var newCol = $("<form>").addClass("col s12");
    var smallerRow = $("<div>").addClass("row");
    var inputRow = $("<div>").addClass("input-field col s6");
    var inputField = $("<input>").attr("type", "text").attr("id", "localName").addClass("validate").attr("placeholder", "Location");

    inputRow.append(inputField);
    smallerRow.append(inputRow);
    newCol.append(smallerRow);
    newRow.append(newCol);
    inputSection.append(newRow);


     //State
     inputRow = $("<div>").addClass("input-field col s3");
     inputField = $("<input>").attr("type", "text").attr("id", "state").addClass("validate").attr("placeholder", "State");
 
     inputRow.append(inputField);
     smallerRow.append(inputRow);

     //Zip Code
     inputRow = $("<div>").addClass("input-field col s3");
     inputField = $("<input>").attr("type", "text").attr("id", "zipCode").addClass("validate").attr("placeholder", "Zip Code");
 
     inputRow.append(inputField);
     smallerRow.append(inputRow);
 
     //City
     newRow = $("<div>").addClass("row");
     newCol = $("<form>").addClass("col s12");
     smallerRow = $("<div>").addClass("row");
     inputRow = $("<div>").addClass("input-field col s6");
     inputField = $("<input>").attr("type", "text").attr("id", "city").addClass("validate").attr("placeholder", "City");
 
     inputRow.append(inputField);
     smallerRow.append(inputRow);
     newCol.append(smallerRow);
     newRow.append(newCol);
     inputSection.append(newRow);
 
     //Radius
     inputRow = $("<div>").addClass("input-field col s3");
     inputField = $("<input>").attr("type", "text").attr("id", "radius").addClass("validate").attr("placeholder", "Radius");
 
     inputRow.append(inputField);
     smallerRow.append(inputRow);

    
    newRow = $("<div>").addClass("row");
    newCol = $("<form>").addClass("col s1");
    var btn = $("<a>").addClass("waves-effect waves-light btn").text("Search").attr("id", "locationBtn");


    newCol.append(btn);
    newRow.append(newCol);
    inputSection.append(newRow);

    expanded = true;
    

})

$(document).on("click", "#artistBtn", function(event){
    //event.preventDefault();
    console.log("searched");
    artist = $("#artistName").val().trim();
    localStorage.setItem("artistName", artist);
})

$(document).on("click", "#locationBtn", function(event){
    //event.preventDefault();
    console.log("searched");
    local = $("#localName").val();
    localStorage.setItem("local", local);
    state = $("#state").val();
    localStorage.setItem("stateName", state);
    city = $("#city").val();
    localStorage.setItem("cityName", city);
    zipCode = $("#zipCode").val();
    localStorage.setItem("zipCode", zipCode);
    radius = $("#radius").val();
    localStorage.setItem("radius", radius);
})

$(document).on("click", "#venueBtn", function(event){
    //event.preventDefault();
    venueName = $("#venueName").val();
    localStorage.setItem("venueName", venueName);
    venueState = $("#venueState").val();
    localStorage.setItem("venueState", venueState);
})
});