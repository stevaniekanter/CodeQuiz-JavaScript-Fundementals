var homePage = document.querySelector(".homePage");
var startButton = document.querySelector("#start");
var timerCount = document.querySelector(".timer");
var submitInitials = document.querySelector(".row");
var secondsLeft = 60;
var quiz = document.querySelector("#quiz");
var options = document.getElementsByName("options");
var num = 0,
  answer,
  question,
  quiz,
  quizStatus,
  choice,
  chA,
  chB,
  chC,
  correct = 0;
var score = 0;
var timerInterval;
quiz.style.display = "none";
submitInitials.style.display = "none";
// Start button click
startButton.addEventListener("click", function () {
  console.log("Start Game button is clicked!");

