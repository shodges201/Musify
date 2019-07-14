$(document).ready(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
 //   $('.tap-target').tapTarget();

 localStorage.clear();
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
var queryURL = "";
var search = "";
var youtube = "";
var twitter = "";
var instagram = "";
var facebook = "";
var itunes = "";

$(window).keydown(function(event){
    if(event.keyCode == 13) {
        event.preventDefault();
        if(search === "artist"){
            if($("#artistName").val() !== "")
            artistSearch();
            console.log("enter and artist");
        }
    }
})

////// ARTIST SEARCH SECTION
function artistDisplay(){
    //Name
    var inputSection = $("<div>").attr("id", "inputSection");
    $("#middleSection").append(inputSection);
    $("#buttonsSections").css("margin-bottom", "20px");

    var newRow = $("<div>").addClass("row").attr("id", "firstRow");
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
}

$("#artist-search").on("click", function(){
    console.log("clicked");
    if(expanded && search === "artist"){
        $("#inputSection").remove();
        $("#buttonsSections").css("margin-bottom", "0px");
        expanded = false;
    }
    else if(expanded && search !== "artist"){
        $("#inputSection").remove();
        artistDisplay();
        expanded = true;
        search = "artist";
    }
    else{
        artistDisplay();
        expanded = true;
        search = "artist";
    }
})
///////// END ARTIST SEARCH SECTION //////////

///////// VENUE SEARCH SECTION /////////////////
function venueDisplay(){
    $("#buttonsSections").css("margin-bottom", "20px");
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
}

$("#venue-search").on("click", function(){
    var eventQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + searchTerm +"&size=" + numResults + "&postalcode=" + zipCode + "&stateCode=" + state + "&city=" + city+ "&radius=" + radius + "&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
    if(expanded && search === "venue"){
        $("#inputSection").remove();
        $("#buttonsSections").css("margin-bottom", "0px");
        expanded = false;
    }
    else if(expanded && search !== "venue"){
        $("#inputSection").remove();
        venueDisplay();
        expanded = true;
        search = "venue";
    }
    else{
        venueDisplay();
        expanded = true;
        search = "venue";
    }  
})
///////// END VENUE SEARCH SECTION //////////

///////// LOCATION SEARCH SECTION /////////////
function locationDisplay(){
    $("#buttonsSections").css("margin-bottom", "20px");
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
     var btn = $("<a>").addClass("waves-effect waves-light btn").text("Search").attr("id", "locationBtn").attr("href", "assets/html/location.html");
 
     newCol.append(btn);
     newRow.append(newCol);
     inputSection.append(newRow);
}

$("#location-search").on("click", function(){
    if(expanded && search === "location"){
        $("#inputSection").remove();
        $("#buttonsSections").css("margin-bottom", "0px");
        expanded = false;
    }
    else if(expanded && search !== "location"){
        $("#inputSection").remove();
        locationDisplay();
        expanded = true;
        search = "location";
    }
    else{
        locationDisplay();
        expanded = true;
        search = "location";
    }
})

///////// END LOCATION SEARCH SECTION ///////////////

$(document).on("click", "#artistBtn", function(event){
    event.preventDefault();
    if($("#artistName").val() !== ""){
        artistSearch();
    }
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

$(document).on("click", ".artistLink", function(event){
    //event.preventDefault();
    var index = $(this).attr("data-index");
    logArtistData(index);
})

function artistSearch(){
    artist = $("#artistName").val().trim();
    queryURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&classificationName=music&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
     //queries to find attraction/artist
     $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        json = response;

        //when there is more than one result for a given search
        //displays links for all the different results
        if(response._embedded.attractions.length > 1){
            var newRow = $("<div>").addClass("row");
            var newCol = $("<form>").addClass("col s12");
            var smallerRow = $("<div>").addClass("row");

            newRow.append(newCol);
            newCol.append(smallerRow);
            $("#inputSection").append(newRow);

            for(var i = 0; i < response._embedded.attractions.length; i++){
                console.log("blaj");
                var linkContainer = $("<div>").addClass("col s4");
                var newLink = $("<a>").addClass("artistLink").attr("href", "assets/html/artist.html").text(response._embedded.attractions[i].name).attr("data-index", i);
                linkContainer.append(newLink);
                smallerRow.append(linkContainer);
            }
        }
        //no search results
        else if(response._embedded.attractions.length === 0){
            //do something
        }
        //search succesfull -> go to artist page
        else{
            logArtistData(0);
            window.location.href = "assets/html/artist.html"
        }
    });
}

function logArtistData(index){
    var artistID = json._embedded.attractions[index].id;
    var artist = json._embedded.attractions[index].name;
    var imageURL = json._embedded.attractions[index].images[0].url;
    var linksLength = Object.keys(json._embedded.attractions[index].externalLinks).length;
    var linksList = Object.keys(json._embedded.attractions[index].externalLinks);
    var upcomingEvents = json._embedded.attractions[index].upcomingEvents._total;
    for(var i = 0; i < linksLength; i++){
        var link = linksList[i];
        if(link === "youtube"){
            youtube = json._embedded.attractions[index].externalLinks.youtube[0].url;   
        }
        else if(link === "facebook"){
            facebook = json._embedded.attractions[index].externalLinks.facebook[0].url;
        }
        else if(link === "twitter"){
            twitter = json._embedded.attractions[index].externalLinks.twitter[0].url;
        }
        else if(link === "instagram"){
            instagram = json._embedded.attractions[index].externalLinks.instagram[0].url;
        }
        else if(link === "itunes"){
            itunes = json._embedded.attractions[index].externalLinks.itunes[0].url;
        }
        localStorage.setItem("youtube", youtube);
        localStorage.setItem("facebook", facebook);
        localStorage.setItem("twitter", twitter);
        localStorage.setItem("instagram", instagram);
        localStorage.setItem("itunes", itunes);
    }
    console.log(imageURL);
    localStorage.setItem("artistName", artist);
    localStorage.setItem("imageURL", imageURL);
    localStorage.setItem("artistID", artistID);
    localStorage.setItem("upcomingEvents", upcomingEvents);
}

});