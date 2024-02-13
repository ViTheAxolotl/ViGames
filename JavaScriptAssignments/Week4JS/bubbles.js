var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];

function printAndGetHighScore(scores)
{
    var highScore = 0;
    var output;

    for (var i = 0; i < scores.length; i++)
    {
        output = "Bubble solution #" + i + " score: " + scores[i];
        document.write(output + "<br/>");

        if(scores[i] > highScore)
        {
            highScore = scores[i];
        }
    }

    return highScore;
} 

function getBestResults(scores, highScore)
{
    var bestSolutions = [];
    for(var i = 0; i < scores.length; i++)
    {
        if(scores[i] == highScore)
        {
           bestSolutions.push(i);
        }
    }

    return bestSolutions;
}

function getCostEffectiveSolution(scores, costs, highScore)
{
    var cost = 100;
    var index;

    for(var i = 0; i < scores.length; i++)
    {
        if(scores[i] == highScore)
        {
            if(cost > costs[i])
            {
                index = i;
                cost = costs[i];
            }
        }
    }

    return index;
}

var highScore = printAndGetHighScore(scores);
var bestSolutions = getBestResults(scores, highScore);
var mostCostEffective = getCostEffectiveSolution(scores, costs, highScore);

document.write("<br/> Bubbles tested: " + scores.length + ".<br/>");
document.write("Highest bubble score: " + highScore +".<br/>");
document.write("Solutions with the highest score: " + bestSolutions.join(", ") + ".<br/>");
document.write("Bubble Solution #" + mostCostEffective + " is the most cost effective.");