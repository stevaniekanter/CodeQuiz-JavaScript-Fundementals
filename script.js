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

  //Clear home page to move to next page after clicking Start Game button
  homePage.style.display = "none";

  // Sets timer countdown
  // Referred to code from Week 4 Activity 8 Timers Intervals solution
  function setTime() {
    timerInterval = setInterval(function () {
      secondsLeft--;
      timerCount.textContent = "Timer: " + secondsLeft + " seconds left";

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        timerCount.textContent = "GAME OVER!";
      }
      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        timerCount.textContent = "GAME OVER!";
        quiz.style.display = "none";
        submitInitials.style.display = "block";
      }
    }, 1000);
  }
  setTime();
  quiz.style.display = "block";
});
//End Start button click

//List of quiz questions
let questions = [
  {
    question: "Where do you place your JS script on your HTML?",
    a: " In the header",
    b: " In the first div tag",
    c: " At the end before the end body tag",
    answer: "C",
  },
  {
    question: "Which built-in method combines the text of two strings and returns a new string?",
    a: " Append()",
    b: " Concat()",
    c: " Attach()",
    answer: "B",
  },
  {
    question: "What does '===' mean?",
    a: " Not equal to",
    b: " Equal to",
    c: " Divided by",
    answer: "B",
  },
  {
    question: "Inside which HTML element do you put the JavaScript?",
    a: " script",
    b: " js",
    c: " javascript",
    answer: "A",
  },
  {
    question: "What are the different ways to define a variable in Javascript?",
    a: " v1, v2, v3",
    b: " function()",
    c: " var, const and let",
    answer: "C",
  },
  {
    question: "How do you call a function name myFunction?",
    a: " myFunction",
    b: " call function myFunction",
    c: " call myFunction",
    answer: "A",
  },
];
//End of quiz questions 

function get(x) {
  return document.getElementById(x);
}

function getQuestions() {
  question = questions[num].question;
  chA = questions[num].a;
  chB = questions[num].b;
  chC = questions[num].c;

  quiz.innerHTML = "<h3>" + question + "</h3>";

  quiz.innerHTML +=
    "<label> <input type ='radio' name = 'options' value = 'A'>" +
    chA +
    "</label> <br>";
  quiz.innerHTML +=
    "<label> <input type ='radio' name = 'options' value = 'B'>" +
    chB +
    "</label> <br>";
  quiz.innerHTML +=
    "<label> <input type ='radio' name = 'options' value = 'C'>" +
    chC +
    "</label> <br> <br>";
  quiz.innerHTML +=
    "<button onclick='checkAnswer()'class='btn btn-success'> Submit Answer </button> <br> <br>";

  quiz.innerHTML +=
    "<h2> Your score: " + correct + "/" + questions.length + "</h2>";
}

// Start to check answers
function checkAnswer() {
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
     choice = options[i].value;
    }
  }
  console.log(choice, questions[num].answer);

  // confirms if choice matches answer
  if (choice === questions[num].answer) {
    alert("Correct!");
    console.log("Is this correct?");
    //increases score if it does match
    correct++;
  } else if (choice !== questions[num].answer) {
    alert("Wrong!");
    secondsLeft -= 10;
  }
  num++;
  //Go to next question after submitting answer
  // getQuestions();

  if (num < questions.length) {
    getQuestions();
  } else {
    clearInterval(timerInterval);
    timerCount.textContent = "GAME OVER!";
    quiz.style.display="none";
    submitInitials.style.display="block";
  }
}

window.addEventListener("load", getQuestions);