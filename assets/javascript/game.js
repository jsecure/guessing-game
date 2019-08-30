var letters = ["a", "b", "c"];
// This array will hold what we guess
var guessedLetters = [];
// This variable will be randomly assigned one of the three letters
var letterToGuess = null;
// This is what we'll use to count down
var guessesLeft = 9;
// This is the counter for wins/losses
var wins = 0;
var losses = 0;

/* ---How to declare a function---
var functionName = function(){
    do something;
};

---How to call a function---
functionName();
*/

var updateGuessesLeft = function() {

    document.querySelector("#guesses-left").innerHTML = guessesLeft
}

var lettersToGuessUpdate = function() {
    
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
}

var updateGuessesSoFar = function() {

    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ")

}

var reset = function(){
    guessesLeft = 9;
    guessedLetters = [];
    updateGuessesLeft();
    lettersToGuessUpdate();
    updateGuessesSoFar();
}

//Run on page load

updateGuessesLeft();
lettersToGuessUpdate();

document.onkeypress = function(event){
    guessesLeft--;
    //getting and setting letter pressed, (saving letter to "letterPressed")
    var letterPressed = event.key.toLowerCase();
    //adding letter pressed to our array in which we will hold the letter guessed
    guessedLetters.push(letterPressed);

    updateGuessesLeft();
    updateGuessesSoFar()

    if(letterPressed === letterToGuess){
        //adding 1 to wins variable
        wins++;
        //set the value of wins to the element with id = "wins"
        document.querySelector("#wins").innerHTML = wins;

        reset();
    }

    if(guessesLeft === 0){
        losses++;
        //set the value of wins to the element with id = "wins"
        document.querySelector("#losses").innerHTML = losses;

        reset();
    }
};










