// #Instructions
// Here's how the app works:
//    * There will be four crystals displayed as buttons on the page.
//    * The player will be shown a random number at the start of the game
//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.
//    * The player wins if their total score matches the random number from the beginning of the game.
//    * The player loses if their score goes above the random number.
//    * The game restarts whenever the player wins or loses.
//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

 $(document).ready (function()  {

var randomNumber = Math.floor(Math.random() * 120) + 19;
var wins = 0; 
var losses = 0;
var score = 0;

$("#RandomNumber").append(randomNumber)
$("#wins").append(wins)
$("#losses").append(losses)
$("#score").append(score)


$("#button1").on("click", function () {
    var crystal1 = Math.floor(Math.random() * 12) + 1; 
    score += crystal1;
    console.log(score);
    $("#score").text(score);
    winsAndLosses ()
});

$("#button2").on("click", function () {
    var crystal2 = Math.floor(Math.random() * 12) + 1; 
    score += crystal2;
    console.log(score);
    $("#score").text(score);
    winsAndLosses ()
});

$("#button3").on("click", function () {
    var crystal3 = Math.floor(Math.random() * 12) + 1; 
    score += crystal3;
    console.log(score);
    $("#score").text(score);
    winsAndLosses ()
});

$("#button4").on("click", function () {
    var crystal4 = Math.floor(Math.random() * 12) + 1; 
    score += crystal4;
    console.log(score);
    $("#score").text(score);
    winsAndLosses ()
});

function winsAndLosses () {
    if (score === randomNumber) {
        wins++
        $("#score").text(score);
        console.log(score);
        $("#wins").text(wins);
        reset ();
  
    }

    else if (score > randomNumber){
        losses++
        $("#score").text(score);
        console.log(score);
        $("#losses").text(losses);
        reset ();
 
    }

}

function reset () {
    score = 0;
    $("#score").text(score);
    randomNumber = Math.floor(Math.random() * 120) + 19;
    $("#RandomNumber").text(randomNumber);
}

});

