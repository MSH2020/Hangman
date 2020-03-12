// Hangman Game

var attemptsLeft = 6;

/*
function randomWord ()
    {
    var l = Math.round(40*Math.random()); // random numbers in the range 0 to 40  ---------

    var dictionary =
        {
        1	: information,
        2	: copyright,
        3	: university,
        4	: management,
        5	: development,
        6	: education,
        7	: community,
        8	: technology,
        9	: resource,
        10	: directory,
        }
    var l = Math.round(10*Math.random()); // random numbers in the range 0 to 10  ---------
    return dictionary[l];
    }
*/
var dictionary =
{
1	: information,
2	: copyright,
3	: university,
};

alert(dictionary[2]);

var theWord = prompt ("enter the word");

//-------------------------------------------------------------

if ( theWord != "" )
{

    var theWordArray = theWord.split('');
    var theWordLength = theWordArray.length;
    var numOfLettersGuessed = 0;
    var guessedArray = Array.apply("", Array(theWordLength));

    console.log(theWordLength);

    // ----------------------------------------------------

    while ( attemptsLeft>0 )
    {

        console.log(guessedArray + ". You've guessed " + numOfLettersGuessed + " out of " + theWordLength +" letters right; you have " + attemptsLeft + " points left"); // CURRENT GUESS STATUS

        var theCurrentLetter = prompt ("enter a letter");

        if (theCurrentLetter != "" )
        {

            var isGuessRight = theWordArray.includes(theCurrentLetter); 

            console.log(isGuessRight);

            if (isGuessRight) // We'll 
                {
                numOfLettersGuessed++;

                function letterMatching (theWordArray, guessedArray, theCurrentLetter)
                {
                    for ( var i=0; i< theWordArray.length; i++) // We'll place the guessed letters in the guessedArray
                        {
                            if (theWordArray[i] == theCurrentLetter)
                            {
                            guessedArray[i] = theWordArray[i];
                            }
                        }
                    }
                }       
            else
            {
                attemptsLeft = (attemptsLeft - 1);
                console.log("Try again; you still have " + attemptsLeft + " points left");                
            }
        }
        else
        {
            console.log("The app is terminated because you entered an empty string. If you do want to play the game, reload the page.");
            break
        }
    
        
    }
}
else
{console.log("You've the app is terminated because you entered an empty string. If you do want to play the game, reload the page.");}