var startButton = document.querySelector(".start-button")
var h1 = document.getElementById("coding");

// var time = 75;
// var score = 0


// function startGame() {
//     time = 75;
//     timer();
//     //maybe call render questions function here
// }

// function startTimer() {
//     timer = setInterval(timer, 1000);
//     timer();
// }

// function timer() {
//     time--;
//     if (time <= 0) {
//         clearInterval(timer)
//     }
// }

// document.getElementById("timer").innerHTML = time

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

startButton.addEventListener("click", buttonClick, false);

function buttonClick() {
    
    h1.textContent = "You clicked the button";



}

var question = [
    {
        question1 : "Commonly used data",
        choices1 : ["Strings", "Booleans", "Alerts", "Numbers"],
        answer1 : 2,
    },

    {
        question2 : "The condition"
    }
]