var numResults = "20";
var searchTerm = "";
var state = "";
var city = "";
var zipCode = "";
var radius = "";
var artist= "";
<<<<<<< HEAD
var locationName = "";

=======
var local = "";
>>>>>>> d34931476e3afa7be3c1db0547186bd5da49f9f0
var expanded = false;

$("#artist-search").on("click", function(){
    console.log("clicked");
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming";
    if(expanded){
        $("#expandCard").remove();
    }
    //Name
    var expandCard = $("<div>").addClass("card-action").attr("id", "expandCard");
    var newRow = $("<div>").addClass("row");
    var newCol = $("<form>").addClass("col s12");
    var smallerRow = $("<div>").addClass("row");
    var inputRow = $("<div>").addClass("input-field col s12");
    var inputField = $("<input>").attr("type", "text").attr("id", "artistName").addClass("validate").attr("placeholder", "Artist Name");

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
<<<<<<< HEAD
    var inputField = $("<input>").attr("type", "text").attr("id", "venueName").addClass("validate").attr("placeholder", "Location Name");
=======
    var inputField = $("<input>").attr("type", "text").attr("id", "localName").addClass("validate").attr("placeholder", "Name");
>>>>>>> d34931476e3afa7be3c1db0547186bd5da49f9f0

    inputRow.append(inputField);
    smallerRow.append(inputRow);
    newCol.append(smallerRow);
    newRow.append(newCol);
    expandCard.append(newRow);
    $("#centerCard").append(expandCard);

    //State
    newRow = $("<div>").addClass("row");
    newCol = $("<form>").addClass("col s12");
    smallerRow = $("<div>").addClass("row");
    inputRow = $("<div>").addClass("input-field col s12");
    inputField = $("<input>").attr("type", "text").attr("id", "venueState").addClass("validate").attr("placeholder", "State");

    inputRow.append(inputField);
    smallerRow.append(inputRow);
    newCol.append(smallerRow);
    newRow.append(newCol);
    expandCard.append(newRow);

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
<<<<<<< HEAD
    var inputField = $("<input>").attr("type", "text").attr("id", "locationName").addClass("validate").attr("placeholder", "Location");
=======
    var inputField = $("<input>").attr("type", "text").attr("id", "localName").addClass("validate").attr("placeholder", "Location");
>>>>>>> d34931476e3afa7be3c1db0547186bd5da49f9f0

    inputRow.append(inputField);
    smallerRow.append(inputRow);
    newCol.append(smallerRow);
    newRow.append(newCol);
    expandCard.append(newRow);
    $("#centerCard").append(expandCard);

     //State
     newRow = $("<div>").addClass("row");
     newCol = $("<form>").addClass("col s12");
     smallerRow = $("<div>").addClass("row");
     inputRow = $("<div>").addClass("input-field col s12");
     inputField = $("<input>").attr("type", "text").attr("id", "state").addClass("validate").attr("placeholder", "State");
 
     inputRow.append(inputField);
     smallerRow.append(inputRow);
     newCol.append(smallerRow);
     newRow.append(newCol);
     expandCard.append(newRow);
 
     //City
     newRow = $("<div>").addClass("row");
     newCol = $("<form>").addClass("col s12");
     smallerRow = $("<div>").addClass("row");
     inputRow = $("<div>").addClass("input-field col s12");
     inputField = $("<input>").attr("type", "text").attr("id", "city").addClass("validate").attr("placeholder", "City");
 
     inputRow.append(inputField);
     smallerRow.append(inputRow);
     newCol.append(smallerRow);
     newRow.append(newCol);
     expandCard.append(newRow);
 
     //Zip Code
     newRow = $("<div>").addClass("row");
     newCol = $("<form>").addClass("col s12");
     smallerRow = $("<div>").addClass("row");
     inputRow = $("<div>").addClass("input-field col s12");
     inputField = $("<input>").attr("type", "text").attr("id", "zipCode").addClass("validate").attr("placeholder", "Zip Code");
 
     inputRow.append(inputField);
     smallerRow.append(inputRow);
     newCol.append(smallerRow);
     newRow.append(newCol);
     expandCard.append(newRow);
 
     //Radius
     newRow = $("<div>").addClass("row");
     newCol = $("<form>").addClass("col s12");
     smallerRow = $("<div>").addClass("row");
     inputRow = $("<div>").addClass("input-field col s12");
     inputField = $("<input>").attr("type", "text").attr("id", "radius").addClass("validate").attr("placeholder", "Radius");
 
     inputRow.append(inputField);
     smallerRow.append(inputRow);
     newCol.append(smallerRow);
     newRow.append(newCol);
     expandCard.append(newRow);

    //State
     newRow = $("<div>").addClass("row");
     newCol = $("<form>").addClass("col s12");
     smallerRow = $("<div>").addClass("row");
     inputRow = $("<div>").addClass("input-field col s12");
     inputField = $("<input>").attr("type", "text").attr("id", "venueState").addClass("validate").attr("placeholder", "State");
 
     inputRow.append(inputField);
     smallerRow.append(inputRow);
     newCol.append(smallerRow);
     newRow.append(newCol);
     expandCard.append(newRow);

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
    artist = $("#artistName").val().trim();
    localStorage.setItem("artistName", artist);
})

$(document).on("click", "#locationBtn", function(event){
    event.preventDefault();
<<<<<<< HEAD
    state = $("#state").val();
})

$(document).on("click", "#venueBtn", function(event){
    event.preventDefault();
    state = $("#venueState").val().trim();
    localStorage.setItem("venueState", state);
    locationName = $("#venueName").val().trim();
    localStorage.setItem("venueName", locationName);
})
=======
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

>>>>>>> d34931476e3afa7be3c1db0547186bd5da49f9f0
