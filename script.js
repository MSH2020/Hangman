// Hangman Game

var attemptsLeft = 6;
var theWord = prompt ("enter the word");

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
                for ( var i=0; i< theWordArray.length; i++) // We'll place the guessed letters in the guessedArray
                    {
                        if (theWordArray[i] == theCurrentLetter)
                        {
                        guessedArray[i] = theWordArray[i];
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