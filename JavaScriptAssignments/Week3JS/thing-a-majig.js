var clunkCounter = 0; //Keeps track of how many times it displays clunk, clank, or thunk

/**
 * Calls the display method for as many facky there was.
 */
function clunk(times)
{
    var num = times;

    while(num > 0) //Displays clunk for as many num there are
    {
        display("clunk ");
        num--;
    }
}

/**
 * For size 0-1 it displays clank/thunk, for anything above 1 it takes the 
 * size and times it with facky while subtracting 1 from size until size is 1
 */
function thingamajig(size)
{
    var facky = 1;
    clunkCounter = 0;

    if(size == 0)
    {
        display("clank ");
    }

    else if(size == 1)
    {
        display("thunk ");
    }

    else
    {
        while(size > 1) //Keeps going until size is 1
        {
            facky = facky * size; //Times size and facky
            size--;
        }

        clunk(facky); 
    }
}

/**
 * Takes either the clank, thunk, or clunk and displays it on the console and webpage
 */
function display(output)
{
    console.log(output); 
    document.write(output);
    clunkCounter++;
}

for(var i = 0; i <= 7; i++) //Iterates from 0-7 and displays results
{
    document.write(i + ": ");
    thingamajig(i);
    document.write("<br> <hr>");
}