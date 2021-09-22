var startButton = document.querySelector(".start-button")
var h1 = document.getElementById("coding");
var displayQ = document.getElementById("question");
var quizBox = document.getElementById("quiz-box");
var questionBox = document.getElementById("question-box");

startButton.addEventListener("click", function() {
        console.log("timer")
        var time = 75;
        var timer = setInterval(function() {
            document.querySelector(".timer").innerHTML= "Time Left: " + time;
            time--;
            if (time < 0) {
                clearInterval(timer);
            }
        }, 1000)

});


startButton.addEventListener("click", startQuiz);

function startQuiz() {
    var intro = document.querySelector(".quiz-wrapper");
    var initQuestion = document.querySelector(".question-wrapper");

    intro.classList.toggle("is-hidden");
    initQuestion.classList.toggle("is-hidden");
    displayQ.innerHTML = question[0].question1;
}



var question = [
    {
        question1 : "Commonly used data types DO NOT include:",
        choices1 : ["Strings", "Booleans", "Alerts", "Numbers"],
        answer1 : 2,
    },

    {
        question2 : "The condition",
    }
]