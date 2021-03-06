var pos = "";
var numResults = "20";
var searchTerm = "";
var state = "";
var city = "";
var radius = "";
var artist = "";
var local = "";
var venueName = "";
var venueState = "";
var venueTwitter = "";
var venueId = "";
var venueImage = "";
var expanded = false;
var queryURL = "";
var search = "";
var artistYoutube = "";
var artistTwitter = "";
var artistInstagram = "";
var artistFacebook = "";
var artistItunes = "";
var sortBy = "";
var displayingResults = false;
var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
var stateAbrev = ["AK", "AL", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
var sortList = ["relevance,desc", "date,asc"];
var sortText = ["revelance", "date"];
var radius = ["10", "15", "25", "35", "50", "75", "100"];
var usedGPS = false;

$(document).ready(function () {

    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true

    });

    $("#artist-btn").on("click", function (event) {
        if (localStorage.getItem("artistID") == null || localStorage.getItem("artistID") === "") {
            event.preventDefault();
            M.toast({
                html: 'Search for an artist first!'
            })
        }
    })

    $("#location-btn").on("click", function (event) {
        if (localStorage.getItem("gps") == null) {
            event.preventDefault();
            M.toast({
                html: 'Search for a location first!'
            })
        }
    })

    $("#venue-btn").on("click", function (event) {
        if (localStorage.getItem("venueId") == null || localStorage.getItem("venueId") == "") {
            event.preventDefault();
            M.toast({
                html: 'Search for a venue first!'
            })
        }
    })


    //full state names not currently used
    var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    //state abreviations used for populating dropdown selectors
    var stateAbrev = ["AK", "AL", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            if (search === "artist") {
                if (displayingResults === true) {
                    $("#link-container").remove();
                }
                artistSearch();
            } else if (search === "venue") {
                if (displayingResults === true) {
                    $("#link-container").remove();
                }
                venueSearch();
            } else if (search === "location") {
                if (displayingResults === true) {
                    $("#link-container").remove();
                }
                logLocationData();
                window.location.href = "assets/html/location.html"
            }
        }
    })

    ////// ARTIST SEARCH SECTION
    function artistDisplay() {
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
        var btn = $("<a>").addClass("waves-effect waves-light btn-large orange darken-3").text("Search").attr("id", "artistBtn").attr("href", "assets/html/artist.html");


        newCol.append(btn);
        newRow.append(newCol);
        inputSection.append(newRow);
    }

    $("#artist-search").on("click", function () {
        if (expanded && search === "artist") {
            $("#inputSection").remove();
            $("#buttonsSections").css("margin-bottom", "0px");
            expanded = false;
            displayingResults = false;
        } else if (expanded && search !== "artist") {
            $("#inputSection").remove();
            artistDisplay();
            expanded = true;
            search = "artist";
        } else {
            artistDisplay();
            expanded = true;
            search = "artist";
        }
    })
    $(document).on("click", ".artistLink", function (event) {
        //event.preventDefault();
        var index = $(this).attr("data-index");
        logArtistData(index);
    })

    function artistSearch() {
        artist = $("#artistName").val().trim();
        queryURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&classificationName=music&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";
        //queries to find attraction/artist
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            json = response;

            //when there is more than one result for a given search
            //displays links for all the different results
            if (response._embedded.attractions.length > 1) {
                var newRow = $("<div>").addClass("row").attr("id", "link-container");
                var newCol = $("<form>").addClass("col s12 card orange darker-3").attr("id", "link-card");
                var smallerRow = $("<div>").addClass("row");

                newRow.append(newCol);
                newCol.append(smallerRow);
                $("#inputSection").append(newRow);

                for (var i = 0; i < response._embedded.attractions.length; i++) {
                    var linkContainer = $("<div>").addClass("col s4");
                    var newLink = $("<a>").addClass("artistLink").attr("href", "assets/html/artist.html").text(response._embedded.attractions[i].name).attr("data-index", i);
                    linkContainer.append(newLink);
                    smallerRow.append(linkContainer);
                }
                displayingResults = true;
            }
            //no search results
            else if (response._embedded.attractions.length === 0) {
                //do something
            }
            //search succesfull -> go to artist page
            else {
                logArtistData(0);
                window.location.href = "assets/html/artist.html"
            }
        });
    }

    function logArtistData(index) {
        var artistID = json._embedded.attractions[index].id;
        var artist = json._embedded.attractions[index].name;
        var imageURL = json._embedded.attractions[index].images[0].url;
        var linksLength = Object.keys(json._embedded.attractions[index].externalLinks).length;
        var linksList = Object.keys(json._embedded.attractions[index].externalLinks);
        var upcomingEvents = json._embedded.attractions[index].upcomingEvents._total;
        for (var i = 0; i < linksLength; i++) {
            var link = linksList[i];
            if (link === "youtube") {
                artistYoutube = json._embedded.attractions[index].externalLinks.youtube[0].url;
            } else if (link === "facebook") {
                artistFacebook = json._embedded.attractions[index].externalLinks.facebook[0].url;
            } else if (link === "twitter") {
                artistTwitter = json._embedded.attractions[index].externalLinks.twitter[0].url;
            } else if (link === "instagram") {
                artistInstagram = json._embedded.attractions[index].externalLinks.instagram[0].url;
            } else if (link === "itunes") {
                artistItunes = json._embedded.attractions[index].externalLinks.itunes[0].url;
            }
        }
        localStorage.setItem("artistYoutube", artistYoutube);
        localStorage.setItem("artistFacebook", artistFacebook);
        localStorage.setItem("artistTwitter", artistTwitter);
        localStorage.setItem("artistInstagram", artistInstagram);
        localStorage.setItem("artistItunes", artistItunes);
        localStorage.setItem("artistName", artist);
        localStorage.setItem("imageURL", imageURL);
        localStorage.setItem("artistID", artistID);
        localStorage.setItem("upcomingEvents", upcomingEvents);
    }

    $(document).on("click", "#artistBtn", function (event) {
        event.preventDefault();
        if ($("#artistName").val() !== "") {
            if (displayingResults === true) {
                $("#link-container").remove();
            }
            artistSearch();
        }
    })
    ///////// END ARTIST SEARCH SECTION //////////

    ///////// VENUE SEARCH SECTION /////////////////
    function venueDisplay() {
        $("#buttonsSections").css("margin-bottom", "20px");

        //venue name
        var inputSection = $("<div>").attr("id", "inputSection");
        $("#middleSection").append(inputSection);

        var newRow = $("<div>").addClass("row");
        var newCol = $("<form>").addClass("col s12");
        var smallerRow = $("<div>").addClass("row");
        var inputRow = $("<div>").addClass("input-field col s6");
        var inputField = $("<input>").attr("type", "text").attr("id", "venueName").addClass("validate").attr("placeholder", "Venue Name");

        inputRow.append(inputField);
        smallerRow.append(inputRow);
        newCol.append(smallerRow);
        newRow.append(newCol);
        inputSection.append(newRow);

        //State
        inputRow = $("<div>").addClass("input-field col s6");
        //inputField = $("<input>").attr("type", "text").attr("id", "venueState").addClass("validate").attr("placeholder", "State");
        var trigger = $("<select>").attr("id", "stateVal").append($('<option value="" disabled selected>State</option>'));
        for (var i = 0; i < stateAbrev.length; i++) {
            var item = $("<option>").attr("value", i).text(stateAbrev[i]);
            trigger.append(item);
        }

        inputRow.append(trigger);
        smallerRow.append(inputRow);

        $('select').formSelect();

        //button
        newRow = $("<div>").addClass("row");
        newCol = $("<form>").addClass("col s1");
        var btn = $("<a>").addClass("waves-effect waves-light btn-large orange darken-3").text("Search").attr("id", "venueBtn").attr("href", "assets/html/venue.html");


        newCol.append(btn);
        newRow.append(newCol);
        inputSection.append(newRow);
    }

    $("#venue-search").on("click", function () {
        if (expanded && search === "venue") {
            $("#inputSection").remove();
            $("#buttonsSections").css("margin-bottom", "0px");
            expanded = false;
            displayingResults = false;
        } else if (expanded && search !== "venue") {
            $("#inputSection").remove();
            venueDisplay();
            expanded = true;
            search = "venue";
        } else {
            venueDisplay();
            expanded = true;
            search = "venue";
        }
    })

    function venueSearch() {
        var venueName = $("#venueName").val().trim();
        var stateName = stateAbrev[$("#stateVal").val()];
        queryURL = "https://app.ticketmaster.com/discovery/v2/venues.json?stateCode=" + stateName + "&keyword=" + venueName + "&sort=relevance,desc&apikey=UpMLmiplG7uNV9Gbe2W1u5v6GFAFAAXd";
        //queries to find attraction/artist
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            json = response;

            //when there is more than one result for a given search
            //displays links for all the different results
            if (response._embedded.venues.length > 1) {
                var newRow = $("<div>").addClass("row").attr("id", "link-container");
                var newCol = $("<form>").addClass("col s12");
                var smallerRow = $("<div>").addClass("row");

                newRow.append(newCol);
                newCol.append(smallerRow);
                $("#inputSection").append(newRow);

                for (var i = 0; i < response._embedded.venues.length; i++) {
                    var linkContainer = $("<div>").addClass("col s4");
                    var newLink = $("<a>").addClass("venueLink").text(response._embedded.venues[i].name).attr("data-index", i).attr("href", "assets/html/Venue.html");
                    linkContainer.append(newLink);
                    smallerRow.append(linkContainer);
                }
                displayingResults = true;
            }
            //no search results
            else if (response._embedded.venues.length === 0) {
                //do something
            }
            //search succesfull -> go to venue page
            else {
                logVenueData(0);
                window.location.href = "assets/html/venue.html"
            }
        });
    }

    $(document).on("click", ".venueLink", function (event) {
        //event.preventDefault();
        var index = $(this).attr("data-index");
        logVenueData(index);
    })

    function logVenueData(index) {
        if (json._embedded.venues[index].social !== undefined) {
            venueTwitter = json._embedded.venues[index].social.twitter.handle;
        }
        localStorage.setItem("venueTwitter", venueTwitter);
        venueName = json._embedded.venues[index].name;
        venueId = json._embedded.venues[index].id;
        venueImage = json._embedded.venues[index].images[0].url;
        localStorage.setItem("venueName", venueName);
        localStorage.setItem("venueId", venueId);
        localStorage.setItem("venueImage", venueImage);
    }

    $(document).on("click", "#venueBtn", function (event) {
        event.preventDefault();
        if ($("#venueName").val().trim() !== "" || $("#stateVal").val() !== null) {
            if (displayingResults === true) {
                $("#link-container").remove();
            }
            venueSearch();
        }
    })
    ///////// END VENUE SEARCH SECTION //////////

    ///////// LOCATION SEARCH SECTION /////////////
    function locationDisplay() {
        $("#buttonsSections").css("margin-bottom", "20px");
        var inputSection = $("<div>").attr("id", "inputSection");
        $("#middleSection").append(inputSection);

        //City
        newRow = $("<div>").addClass("row");
        newCol = $("<form>").addClass("col s12");
        smallerRow = $("<div>").addClass("row");
        inputRow = $("<div>").addClass("input-field col s4");
        inputField = $("<input>").attr("type", "text").attr("id", "locationCity").addClass("validate").attr("placeholder", "City");

        inputRow.append(inputField);
        smallerRow.append(inputRow);
        newCol.append(smallerRow);
        newRow.append(newCol);
        inputSection.append(newRow);

        //State
        inputRow = $("<div>").addClass("input-field col s2");
        var trigger = $("<select>").attr("id", "stateVal").append($('<option value="" disabled selected>State</option>'));
        for (var i = 0; i < stateAbrev.length; i++) {
            var item = $("<option>").attr("value", i).text(stateAbrev[i]);
            trigger.append(item);
        }

        inputRow.append(trigger);
        smallerRow.append(inputRow);

        //sort by
        inputRow = $("<div>").addClass("input-field col s2");
        var sort = $("<select>").attr("id", "sortBy").append($('<option value="" disabled selected>Sort By</option>'));
        for (var i = 0; i < sortText.length; i++) {
            var item = $("<option>").attr("value", i).text(sortText[i]);
            sort.append(item);
        }

        inputRow.append(sort);
        smallerRow.append(inputRow);

        //radius
        inputRow = $("<div>").addClass("input-field col s2");
        var radiusSelect = $("<select>").attr("id", "radius").append($('<option value="" disabled selected>Radius</option>'));
        for (var i = 0; i < radius.length; i++) {
            var item = $("<option>").attr("value", i).text(radius[i]);
            radiusSelect.append(item);
        }

        inputRow.append(radiusSelect);
        smallerRow.append(inputRow);

        $('select').formSelect();

        inputRow = $("<div>").addClass("input-field col s2");
        var btn = $("<a>").addClass("waves-effect waves-light btn-large orange darken-3").attr("id", "getLoc").append($('<i class="fas fa-location-arrow" id="arrowImg"></i>'));
        inputRow.append(btn);
        smallerRow.append(inputRow);

        newRow = $("<div>").addClass("row");
        newCol = $("<form>").addClass("col s1");
        btn = $("<a>").addClass("waves-effect waves-light btn-large orange darken-3").text("Search").attr("id", "locationBtn").attr("href", "assets/html/location.html");

        newCol.append(btn);
        newRow.append(newCol);
        inputSection.append(newRow);
    }

    $("#location-search").on("click", function () {
        if (expanded && search === "location") {
            $("#inputSection").remove();
            $("#buttonsSections").css("margin-bottom", "0px");
            expanded = false;
            displayingResults = false;
        } else if (expanded && search !== "location") {
            $("#inputSection").remove();
            locationDisplay();
            expanded = true;
            search = "location";
        } else {
            locationDisplay();
            expanded = true;
            search = "location";
        }
    })

    $(document).on("click", "#locationBtn", function (event) {
        if ($("#locationCity").val() != "" && $("#stateVal").val() != undefined) {
            logLocationData();
        } else {
            M.toast({
                html: 'Unable to process request. Please enter a city name and select a state, or use the arrow button for GPS location.'
            })
            event.preventDefault();
        }
    })

    function logLocationData() {
        sortBy = sortList[$("#sortBy").val()];
        state = stateAbrev[$("#stateVal").val()];
        localStorage.setItem("locationState", state);
        city = $("#locationCity").val().trim();
        localStorage.setItem("locationCity", city);
        localStorage.setItem("gps", usedGPS);
        localStorage.setItem("sortBy", sortBy);
        localStorage.setItem("radius", radius[$("#radius").val()]);
    }

    $(document).on("click", "#getLoc", function () {
        usedGPS = true;
        navigator.geolocation.getCurrentPosition(success, error);
    })

    function success(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var hash = GeoHasher.encode(lat, long, 8);
        logGPS(hash);
    }

    function error() {
        M.toast({
            html: 'Unable to locate position. Try turning on location services, and accepting the location prompt.'
        })
    }

    function logGPS(hash) {
        localStorage.setItem("gps", usedGPS);
        localStorage.setItem("hash", hash);
        localStorage.setItem("radius", radius[$("#radius").val()]);
        sortBy = sortList[$("#sortBy").val()];
        localStorage.setItem("sortBy", sortBy);
        window.location.href = "assets/html/location.html";
    }

    ///////// END LOCATION SEARCH SECTION ///////////////

    //changes color of text on dropdown to black after user selects it
    $(document).on("click", ".dropdown-trigger", function () {
        setTimeout(1500, null);
        $(this).css("color", "black");
    })
});