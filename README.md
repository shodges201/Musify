# Musify 

The deployed project can be found here: https://shodges201.github.io/Musify/

## Preview

![Preview Photo](assets/Images/Musify.png)

## TECHNICAL DOCUMENTATION FOR PROJECT MUSIFY

<!-- Project-Overview --> PROJECT DESCRIPTION
 Musify will provide users with an interface to search for Artists, Venues, or Location in order to receive information about the search term. This is to create a platform where different search parameters are inputed with multiples search results on different pages.  

<!-- Basic Layout --> DESIGN ANALYSIS
The design adopted for Project Musify will make use of two main pages, the Home page and the Result page. The Hompage has three basic buttons where the users search parameters are inputed: ARTIST, LOCATION & VENUE. These inputs opens up a different page for the results of the search term. The Result page displays the various results inputed on the home page with the artist picture and name displayed at the top right corner, while the location and venue takes the center page. 

<!-- Materialize Framework -->
Materialize is a UI component library created with CSS, JavaScript, and HTML. Materialize UI components help in constructing attractive, consistent, and functional web pages and web apps, while adhering to modern web design principles such as browser portability, device independence, and graceful degradation.

PARALLAX is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. 

```html
 <div class="parallax-container">
      <div class="parallax"><img src="images/parallax1.jpg"></div>
    </div>
    <img src="assets/Images/Concert.jpg" alt="" id="imgConcert"></div>
```

```html


```

```css

b.parallax-container {
    min-height: 380px;
    line-height: 0;
    height: auto;
    color: rgba(255, 255, 255, .9);
    width: 100%;
}
```
```css
body {
    position: static;

}
```


<!-- UI Description -->
UI Components.
Input Controls: checkboxes, radio buttons, dropdown lists, list boxes, buttons, toggles, text fields, date field.

```html
inputRow = <div class="row" id="buttonsSections">
```
Navigational Components: search field, slider, tags, icons.

```html
<ul id="nav-mobile" class="sidenav">
```
<!-- Relevant Links -->
```html
 <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

```
```html
<script src="https://kit.fontawesome.com/2b0c469069.js"></script>
```
=================================================================================

<!-- Dynamic Content  -->
Project Musify was created using:
Javascript, jquery, AJAX, and the AJAX-returned JSON Data.

JavaJavaScript (JS):

 Is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages. 

```js
var questions = [{
   else if(search === "location"){
            if(displayingResults === true){
                $("#link-container").remove();
            }
},{
```
AJAX: 

AJAX = Asynchronous JavaScript and XML. 
Ajax is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page. Used to query the ticketmaster API to get the dynamic content, which is displayed on the different pages.

```$.ajax
$.ajax({
        url: queryURL,
        method: "GET"

jQuery:

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

```js
$("#link-container").remove();
```
<!-- Application Programming Interface --> (API)

An application programming interface is a set of subroutine definitions, communication protocols, and tools for building software, set of clearly defined methods of communication among various components. 

To acheive and deliver Project Musify for final production, these API's were used. 


```js
TICKETMASTER API

(queryURL = "https://app.ticketmaster.com/discovery/v2/venues.json?stateCode=" + state + "&keyword="+ venue +"&sort=relevance,desc&apikey=UpMLmiplG7uNV9Gbe2W1u5v6GFAFAAXd";)

GEOLOCATION API

 (locationURL = "https://app.ticketmaster.com/discovery/v2/events.json?sort=relevance,desc&stateCode=" + locationState +"&city=" + locationCity + "&classificationName=music&apikey=7P9kCFVoWDXeg9UD7nNXS5F0UouZEaxG";)
 ```


 <!-- CHALLENGES -->
 
