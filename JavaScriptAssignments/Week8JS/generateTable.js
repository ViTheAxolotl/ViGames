let alphabet = ["A", "B", "C", "D", "E", "F", "G"]; //Used to translate num. to letters

for(let i = 0; i < 7; i++) //Gets first number and letters
{
    document.write("<tr>"); //Starts a row for the table
    let letter = alphabet[i]; //translates the i to the correct letter
    document.write("<td class = 'letter'><p>" + letter + "</p></td>"); //Adds the letter to the table

    for(let j = 0; j < 7; j++) //Gets the last number for the table
    {
        let idOfSquare = i + "" + j; //Adds the two numbers to get the correct number
        document.write("<td id=" + idOfSquare + " class = 'locations' onclick = 'handleClickingOfLocation(" + idOfSquare + ")'></td>"); //Adds the next square with the click function
    }

    document.write("<tr/>"); //Finishes the table row
}

document.write("<tr>"); //Opens the last row
document.write("<td class = 'empty'><p></p></td>"); //Places an empty square

for(let k = 0; k < 7; k++) //Iterates to add the numbers
{
    document.write("<td class='number'><p>" + k + "</p></td>"); //Adds the numbers to the table
}

document.write("<tr/>"); //closes last row