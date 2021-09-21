var startButton = document.querySelector(".start-button")

var time = 75;
var score = 0


function startGame() {
    time = 75;
    timer();
    //maybe call render questions function here
}

function timer() {
    time--;
    if (time <= 0) {
        clearInterval(timer)
    }
}



startButton.addEventListener("click", startGame)