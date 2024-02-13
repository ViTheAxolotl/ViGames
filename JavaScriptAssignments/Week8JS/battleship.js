"use strict";

/**
 * Constructor used to set up event handlers and generate ship locations
 */
function init()
{
    let fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton; //Sets the fireButton's click method

    let guessInput = document.getElementById("guessInput");
    guessInput.onkeydown = handleKeyPress; //Sets the guessInput's key press method

    let toggleTouchButton = document.getElementById("toggleTouchButton");
    toggleTouchButton.onclick = handleToggleTouch; //Sets the Toggle Touch button's click method

    let resetButton = document.getElementById("reset");
    resetButton.onclick = handleResetButton;

    model.generateShipLocations(); 
}

window.onload = init; //Calls the init method when the html finishes

/**
 * View Object that controls the html view the user sees
 */
let view = 
{
    clickedSquares: [], //Holds all of the squares that have been bombed

    displayMessage: function(msg) //Displays the message given
    {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) //Displays the hit on a cell
    {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit"); //Sets the cell's class to hit, showing the boat
    },

    displayMiss: function(location) //Displays the miss on a cell
    {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss"); //Sets the cell's class to miss, showing the red X
    }
};

/**
 * Used to alter the games state
 */
let model =
{
    boardSize: 7,
    numOfShips: 3,
    shipLength: 3, 
    shipsSunk: 0, 

    ships: [{locations:[0, 0, 0], hits:["", "", ""]},
            {locations:[0, 0, 0], hits:["", "", ""]},
            {locations:[0, 0, 0], hits:["", "", ""]}], //Holds the info for where the ships are
    
    fire: function(guess) //Fires then gives view the results
    {
        for(let i = 0; i < this.numOfShips; i++) //Iterates through the ships
        {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess); //Checks if the location is a location of a ship

            if(index >= 0) //If the location has a ship on it
            {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("Hit!");

                if(this.isSunk(ship)) //If the ship has sank
                {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }

                return true;
            }
        } 
        
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },

    isSunk: function(ship) //Checks if the ship has sunk
    {
        for(let i = 0; i < this.shipLength; i++) //Iterates through the hits
        {
            if(ship.hits[i] !== "hit") //If any of the pieces of the ship hasn't been hit
            {
                return false;
            }
        }

        return true;
    },

    generateShipLocations: function() //Generates where the ships spawn
    {
        let locations;

        for(let i = 0; i < this.numOfShips; i++) //Iterates to create the ships
        {
            do
            {
                locations = this.generateShip();
            }

            while(this.collision(locations)) //If the ship isn't on top of another ship
            {
                this.ships[i].locations = locations; //Places the ship locations in the right ship
            }
        }
    },

    generateShip: function() //Generates a random ship location
    {
        let direction = Math.floor(Math.random() * 2); //Generates weiter the ship will be vertical or horizontal
        let row, col;

        if (direction === 1) //If the ship is vertical
        {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        }

        else //If the ship is horizontal
        {
            col = Math.floor(Math.random() * this.boardSize);
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        }

        let newShipLocation = [];

        for(let i = 0; i < this.shipLength; i++) //Iterates to add the locations together
        {
            if (direction === 1) //If the ship is vertical
            {
                newShipLocation.push(row + "" + (col + i));
            }

            else //If the ship is horizontal
            {
                newShipLocation.push((row + i) + "" + col);
            }
        }

        return newShipLocation;
    },

    collision: function(locations) //Checks if the ship is on top of another one
    {
        for (let i = 0; i < this.numOfShips; i++) //Gets the ships one by one
        {
            let ship = model.ships[i]; 

            for(let j = 0; j < locations.length; j++) //Takes new ship and iterates through it
            {
                if(ship.locations.indexOf(locations[j]) >= 0) //Checks if the ships location is the same as the new ship
                {
                    return true;
                }
            }
        }

        return false;
    }
}

let controler = //Controler to uniter the view and model
{
    guesses: 0,
    gameOver: false, //If the game has ended
    toggleTouch: false, //If the Toggle Touch is on or off

    processGuess: function(guess) //Passes the users guess to the model's object
    {
        let location = parseGuess(guess); 

        if(location) //If the location is valid
        {
            this.guesses++;
            let hit = model.fire(location);

            if(hit && model.isSunk === model.numOfShips) //If the game is over
            {
                view.displayMessage("You sank all of my ships in " + this.guesses + " guesses.");
                this.gameOver = true;
            }
        }
    },

    processTouch: function(location)
    {
        if(location) //If the location is valid
        {
            this.guesses++;
            let hit = model.fire(location);

            if(hit && model.shipsSunk === model.numOfShips) //If the game is over
            {
                view.displayMessage("You sank all of my ships in " + this.guesses + " guesses.");
                this.gameOver = true;
            }
        }
    }
};

function parseGuess(guess) //Translate the guess to valid numbers
{
    let alphabet = ["A", "B", "C", "D", "E", "F", "G"]; //Translates the letters to numbers

    if(guess === null || guess.length != 2) //If the guess isn't 2 long or doesn't exsist
    {
        alert("Oops, please enter a letter and a number on the board.");
    }

    else if (controler.gameOver) // If the game is over
    {
        alert("The game has ended, refresh the page to play again.");
    }

    else //If every thing else is good
    {
        let firstChar = guess.charAt(0); //Gets the letter
        let row = alphabet.indexOf(firstChar); //Changes the number to a letter
        let column = guess.charAt(1); //Get the number

        if(isNaN(row) || isNaN(column)) //If the numbers are not on the game board
        {
            alert("Oops, that isn't on the game board.");
        }

        else if(row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) //If the numbers are to big or small
        {
            alert("Oops, that location is off the board.");
        }

        else //If the row and column are valid
        {
            return row + column;
        }
    }

    return null;
}

/**
 * When the user clicks the fire button it sends it to the guess to the controler
 */
function handleFireButton() 
{
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value;
    controler.processGuess(guess); //Sends the guess to the controler

    guessInput.value = "";
}

/**
 * If the user presses a key
 */
function handleKeyPress(e)
{
    let fireButton = document.getElementById("fireButton");

    if(e.keyCode === 13) //If the user hits the enter key
    {
        fireButton.click(); //Activates the click method of fireButton
        return false;
    }
}

/**
 * If the user clicks the Toggle Touch button
 */
function handleToggleTouch()
{
    let toggleButton = document.getElementById(this.id);
    let fireForm = document.getElementById("fireForm");

    if(controler.toggleTouch) //If toggle touch is active
    {
        controler.toggleTouch = false;
        toggleButton.setAttribute("class", "bg-AHC-red"); //Changes the color to red
        fireForm.setAttribute("class", "visible"); //Makes the guess bar visible
    }

    else //If toggle touch is not active
    {
        controler.toggleTouch = true;
        toggleButton.setAttribute("class", "bg-AHC-green"); //Changes the color to green
        fireForm.setAttribute("class", "invisible"); //Makes hte guess bar invisible
    }
}

/**
 * When the user clicks a cell
 */
function handleClickingOfLocation(idOfSquare)
{
    if(controler.toggleTouch) //If toggle touch is active
    {
        if(!controler.gameOver) //If the game isn't over
        {
            if(idOfSquare < 10) //If the cell is in the first row
            {
                idOfSquare = 0 + "" + idOfSquare; //Adds the leading zero to the cell
            }
    
            else //If the cell is in any other row
            {
                idOfSquare = idOfSquare + "";
            }
            
            if(view.clickedSquares.indexOf(idOfSquare) < 0) //If the cell hasn't been clicked before
            {
                view.clickedSquares.push(idOfSquare); //Adds the cell to the clicked array
                controler.processTouch(idOfSquare); 
            }
        }

        else //If the game has ended
        {
            alert("The game has ended, refresh the page to play again.");
        }
    }   
}

/**
 * When the user clicks the reset button
 */
function handleResetButton()
{
    location.reload(true); //Resets the webpage
}