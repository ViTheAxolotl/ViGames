"use strict";
function init()
{
    let planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "color-AHC-red")
}

window.onload = init;