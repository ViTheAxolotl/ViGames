var amountOfBottles = 99;
var drink = "pop";

while (amountOfBottles > 0)
{   
    console.log(amountOfBottles + " bottles of " + drink + " on the wall \n"
                + amountOfBottles + " bottles of " + drink + ", \n"
                + "Take one down, pass it around,");
    
    document.write(amountOfBottles + " bottles of " + drink + " on the wall <br/>"
                   + amountOfBottles + " bottles of " + drink + ", <br/>"
                   + "Take one down, pass it around, <br/>");

    amountOfBottles -= 1;

    if(amountOfBottles > 0)
    {
        console.log(amountOfBottles + " bottles of " + drink + " on the wall. \n");
        document.write(amountOfBottles + " bottles of " + drink + " on the wall. <br/> <br/>");
    }
    
    else
    {
        console.log("No more bottles of " + drink + " on the wall. ");
        document.write("No more bottles of " + drink + " on the wall. ");
    }
}