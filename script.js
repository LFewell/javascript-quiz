//Variables for the document

var startButton = document.querySelector(".start-button");
var questionSubmitButton = document.querySelector(".button__question-submit");
var h1 = document.getElementById("coding");
var displayQ = document.getElementById("question");
var quizBox = document.getElementById("quiz-box");
var questionBox = document.getElementById("question-box");
var questionCount = 0;

//Runs the functions when Start button and Submit buttons are clicked
startButton.addEventListener("click", startQuiz);
questionSubmitButton.addEventListener("click", handleNextQuestion);

//Countdown timer
function startTimer() {
  console.log("timer");
  var time = 75;
  var timer = setInterval(function () {
    document.querySelector(".timer").innerHTML = "Time Left: " + time;
    time--;
    if (time < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

//Hides the current content on the page and runs the handleNextQuestion function
function startQuiz() {
  startTimer();

  var intro = document.querySelector(".quiz-wrapper");
  var initQuestion = document.querySelector(".question-wrapper");

  intro.classList.toggle("is-hidden");
  initQuestion.classList.toggle("is-hidden");

  handleNextQuestion();
}

//Pulls the questions from the arrays and prints them onto the screen


//Stops the function from creating infinite buttons
function handleNextQuestion() {
  if (document.querySelector(".question-choice") != null) {
    var previousQuestions = document.querySelectorAll(".question-choice");
    previousQuestions.forEach(function (el) {
      el.remove();
    });
  }

  var ul = document.querySelector(".question-list");
  questions[questionCount].choices.forEach(function (choice) {
    var btn = document.createElement("button");
    ul.appendChild(btn);
    btn.setAttribute("class", "question-choice");
    btn.innerHTML += choice;
  });
//stops the function when all questions have been presented
  if (questionCount < questions.length) {
    displayQ.innerHTML = questions[questionCount].question;
    questionCount += 1;
  } else {
    return;
  }
}

//Array of objects containing the questions, choices, and answers

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Booleans",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ______.",
    choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    answer: "Parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    choices: ["Commas", "Curly Brackets", "Parentheses", "Quotes"],
    answer: "Quotes",
  },
];
