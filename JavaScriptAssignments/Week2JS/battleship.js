var spot1 = Math.floor(Math.random() * 5);
var spot2 = spot1 + 1;
var spot3 = spot2 + 1;
var hit1;
var hit2;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

alert("Welcome to the exciting game of Battleship Simplified.")

while (!isSunk)
{
    guess = prompt("Enter a number from 0-6 to try and hit a ship:");

    if(guess < 0 || guess > 6)
    {
        alert("Please enter a valid number between 0-6.");
    }

    else if(guess == null)
    {
        alert("Exiting game, hit refresh button to play again.");
        break;
    }

    else
    {
        guesses++;

        if(guess == hit1 || guess == hit2)
        {
            alert("You have already hit this peice of the ship!");
        }

        else if(guess == spot1 || guess == spot2 || guess == spot3)
        {
            alert("HIT!");
            hits++;
            
            if(hit1 == undefined)
            {
                hit1 = guess;
            }

            else if(hit2 == undefined)
            {
                hit2 = guess;
            }

            if(hits == 3)
            {
                var stats = "You took " + guesses + " guesses to sing the battleship, "
                            + "which means your accuracy was " + (3/guesses) + ". Refresh the page to play again.";
                
                isSunk = true;

                alert("You sank my battleship!");
                alert(stats)
            }
        }
        
        else
        {
            if(guess >= 0 && guess <= 6)
            {
                alert("MISS!");
            }
            
            else
            {
                alert("Please enter a number between 0-6 to fire at a ship.");
            }
        }
    }
}