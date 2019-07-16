# Project1 
TECHNICAL DOCUMENTATION FOR PROJECT MUSIFY

<!-- Project-Overview --> PROJECT DESCRIPTION
 Musify will provide users with an interface to search for Artists, Venues, or Location in order to receive information about the search term. This is to create a platform where different search parameters are inputed with multiples search results on different pages.  

<!-- Basic Layout --> DESIGN ANALYSIS (Front-End)
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

<!-- Programming Languages  --> (Back-End)
Project Musify was made dynamic with diffrent programming languages such as Javascript, JSON, AJAX. 