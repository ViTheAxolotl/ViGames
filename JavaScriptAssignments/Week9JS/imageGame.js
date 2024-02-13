"use strict";
window.onload = init;
let clicks = 0;

function init()
{
    let images = document.getElementsByClassName("clickableImage");
    for (let i = 0; i < images.length; i++)
    {
        images[i].onclick = showAwnser;
    }
}

function showAwnser(eventObj)
{
    let image = eventObj.target;
    let name = image.id;
    name += ".jpg";
    image.src = name;

    clicks++;
    let clickCounter = document.getElementById("clickCounter");
    clickCounter.innerHTML = "Times clicked: " + clicks;

    setTimeout(reblur, 2000, image);
}

function reblur(image)
{
    let name = image.id;
    name += "blur.jpg";
    image.src = name;
}