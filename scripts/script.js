// Hangman Game

var consent = prompt ("Hello. If you'd like to play a game, please, click the OK button, open the console and refresh the page");


var dictionary = [ " area " , " book " , " business " , " case " , " child " , " company " , " country " , " day " , " eye " , " fact " , " family " , " government " , " group " , " hand " , " home " , " job " , " life " , " lot " , " man " , " money " , " month " , " mother " , " mr " , " night " , " number " , " part " , " people " , " place " , " point " , " problem " , " program " , " question " , " right " , " room " , " school " , " state " , " story " , " student " , " study " , " system " , " thing " , " time " , " water " , " way " , " week " , " woman " , " word " , " work " , " world " , " year " , ]; 

var i = Math.floor(Math.random() * dictionary.length);
var theWord = dictionary[i];

var theWordArray = theWord.split('');

var theWordLength = theWord.length;

var attemptsLeft = 6;
var numOfLettersGuessed = 0;
var guessedArray = Array.apply("", Array(theWordLength));

for ( var i=0; i< guessedArray.length; i++) guessedArray[i] = "_"; // Replace "" by "_" in the guessedArray

// ----------------------------------------------------
function Hangman() {

console.log("The word is " + guessedArray + ". You've guessed " + numOfLettersGuessed + " out of " + theWordLength +" letters right; you have " + attemptsLeft + " points left"); // CURRENT GUESS STATUS

while (( attemptsLeft>0 ) && (numOfLettersGuessed < theWordLength) )
{

    var theCurrentLetter = prompt ("enter a letter");


    if (theCurrentLetter != "" )
    {

        var isGuessRight = theWordArray.includes(theCurrentLetter); 

        console.log("You supposed the this word contained " + theCurrentLetter.toUpperCase() +".");
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
            console.log("Try another letter");                
        }
        console.log("The word is " + guessedArray + ". You've guessed " + numOfLettersGuessed + " out of " + theWordLength +" letters right; you have " + attemptsLeft + " points left"); // CURRENT GUESS STATUS
        console.log(`
        `);
    }
    else
    {
        console.log("The app is terminated because you entered an empty string. If you do want to play the game, reload the page.");
        break
    }
}
}


// console.log("You've the app is terminated because you entered an empty string. If you do want to play the game, please,reload the page.");
Hangman();

if ( !(numOfLettersGuessed < theWord.length)) 
    {
        console.log("You won!");
    }
else
    {
        console.log("You lost. The word was " + theWord);
    }
