var buttonColors = ["red", "blue", "green", "yellow"];
var gameSequence = [];
var userClickedSequence = [];
var userLevel = 0;
var gameStart = false;
var highScore = 0;

function nextSequence() {
    $("#level-title").text("Level " + userLevel);
    updateHighScore();
    userLevel++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gameSequence.push(randomChosenColor);
    animateButton(randomChosenColor);
    userClickedSequence = [];

}
function animateButton(color) {
  $("#" + color).fadeOut(50).fadeIn(50);
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function checkAnswer(index) {
  return gameSequence[index] === userClickedSequence[index];
}

function updateHighScore() {
  if (userLevel > highScore) {
    highScore = userLevel;
    $("#highscore").text("Highscore: " + highScore);
  }
}

function reset() {
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("#level-title").text("Game Over, Press any key to restart");


  /*reset all game variables*/
  gameSequence = [];
  userClickedSequence = [];
  userLevel = 0;
}

$(".btn").click(function(event) {
  var userChosenColor = event.target.id;
  userClickedSequence.push(userChosenColor);
  animateButton(userChosenColor);
  if (checkAnswer(userClickedSequence.length - 1)) {
      if(userClickedSequence.length === gameSequence.length) {
        setTimeout(nextSequence, 1000);
      };
  } else {

    reset();
  }

});

$(document).keydown(function() {
  nextSequence();
});
