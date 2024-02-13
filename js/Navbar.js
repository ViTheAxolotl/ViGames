var params = document.body.getElementsByTagName('script'); //Gets the script
var query = params[0].classList; //gets the classes
var parentFolder = query[0]; //returns the first class

var imageLocation; //Sets the ../ if needed
var jsaLocation; //Sets the ../ if needed
var mainLocation; //Sets the ../ if needed

if(parentFolder == "mainFolder") //If file is in the main folder
{
    mainLocation = "";
    imageLocation = "images/";
    jsaLocation = "JavaScriptAssignments/";
}

else if (parentFolder == "jsaFolder") //If file is in the JavaScript Assignments folder
{
    mainLocation = "../../";
    imageLocation = "../../images/";
    jsaLocation = "../";
}

else if (parentFolder == "bocFolder") //If file is in the Book of Chaos folder
{
    mainLocation = "../";
    imageLocation = "../images/";
    jsaLocation = "../JavaScriptAssignments/";
}

document.write(
'<div class="container-fluid">' +
    '<a class="navbar-brand" href="' + mainLocation + 'index.html"><img src = "'+ imageLocation +'AHC Icon-70x70.png" title = "Aqua Hydrocity" alt = "Aqua Hydrocity" width = "70" height = "70"/></a>'+
    '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse" id="navbarSupportedContent"> ' +
        '<ul class="navbar-nav me-auto my-2 my-lg-0 " style="--bs-scroll-height: 100px;"> ' +
            '<li class="nav-item">' +
                '<a class="nav-link active" aria-current="page" href="'+ mainLocation +'index.html">Aqua Hydrocity</a>' +
            '</li>' +
            '<li class="nav-item dropdown">' +
                '<a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">' +
                    'Games' +
                '</a>' +
                '<ul class="dropdown-menu bg-dark" aria-labelledby="navbarScrollingDropdown">' +
                    '<li><a class="dropdown-item text-primary" href="' + mainLocation + 'greenfootGames.html">Greenfoot</a></li>' +
                    '<li><a class="dropdown-item text-primary" href="' + mainLocation + 'unityGames.html">Unity</a></li>' +
                '</ul>' +
            '</li>' +
            '<li class="nav-item dropdown">' +
                '<a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">' +
                    'JavaScript Webpages' +
                '</a>' +
                '<ul class="dropdown-menu bg-dark" aria-labelledby="navbarScrollingDropdown">' +
                    '<li><a class="dropdown-item text-primary" href="' + jsaLocation + 'Week1JS/99Bottles.html">Week 1 (99 Bottles)</a></li>' +
                    '<li><a class="dropdown-item text-primary" href="' + jsaLocation + 'Week2JS/battleship.html">Week 2 (Battleship)</a></li>' +
                    '<li><a class="dropdown-item text-primary" href="' + jsaLocation + 'Week3JS/thing-a-majig.html">Week 3 (Thing-A-Ma-Jig)</a></li>' +
                    '<li><a class="dropdown-item text-primary" href="' + jsaLocation + 'Week4JS/phrase-o-matic.html">Week 4 (Phrase-O-Matic)</a></li>' +       
                    '<li><a class="dropdown-item text-primary" href="' + jsaLocation + 'Week4JS/bubbles.html">Week 4 (Bubbles)</a></li>' + 
                    '<li><a class="dropdown-item text-primary" href="' + jsaLocation + 'Week5JS/fiat.html">Week 5 (Fiat)</a></li>' +     
                    '<li><a class="dropdown-item text-primary" href="' + jsaLocation + 'Week6JS/planets.html">Week 6 (Planets)</a></li>' + 
                    '<li><a class="dropdown-item text-primary" href="' + jsaLocation + 'Week8JS/battleship.html">Week 8 (Advance Battleship)</a></li>' +
                    '<li><a class="dropdown-item text-primary" href="' + jsaLocation + 'Week9JS/imageGame.html">Week 9 (Image Game)</a></li>' + 
                '</ul>' +
            '</li>' +
        '</ul>' +
    '</div>' +
'</div>'); //Prints navbar to html file