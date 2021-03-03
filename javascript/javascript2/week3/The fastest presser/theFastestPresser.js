console.log("file loaded");

const startButton = document.querySelector(".start-game-button");
const timerInput = document.getElementById("timer-container");
const finishedStr = document.querySelector(".finished-string > h2");
const playerOneCountInput = document.querySelector(".playerOne > p");
const playerTwoCountInput = document.querySelector(".playerTwo > p");
const playerOneWinMessage = document.querySelector(".playerOne > h3");
const playerTwoWinMessage = document.querySelector(".playerTwo > h3");
const canvasLeft = document.getElementById("playerOne-canvas");
const canvasRight = document.getElementById("playerTwo-canvas");

let gameTime;
let gameStart = timerInput.addEventListener("keyup", () => {
    resetGame();
    gameTime = timerInput.value;
});


let counterS = 0;
let counterL = 0;
startButton.addEventListener("click", () => {
    if (timerInput.value == "" || !timerInput.value) {
        alert("Please set the timer");
        return;
    }
    const interval = setInterval(countDown, 1000);
    function countDown() {
        finishedStr.innerHTML = gameTime + " Seconds";
        gameTime--;
        if (gameTime < 0) {
            clearInterval(interval);
            finishedStr.innerHTML = "Game finished!";
        }
    }

    window.onkeydown = function (click) {
        let keyS = 83;
        let keyL = 76;
        if (click.keyCode === keyS) {
            counterS++;
            playerOneCountInput.innerHTML = counterS;
        };
        if (click.keyCode === keyL) {
            counterL++;
            playerTwoCountInput.innerHTML = counterL;

        };
    };
    setTimeout(() => {
        finishedStr.innerHTML = "Game finished!";
        Winner('playerOne-canvas', 'playerTwo-canvas');
        window.onkeydown = null;
    }, gameTime * 1000);
});

function Winner(playerOne, playerTwo) {

    if (counterS === 0 && counterL === 0) {
        alert("We do not have any player here? Let's play the game!");
    } else if (counterS > counterL) {
        playerOneWinMessage.innerHTML = "Congratulations! You won the game.";
        canvasWinner(playerOne);
    } else if (counterS < counterL) {
        playerTwoWinMessage.innerHTML = "Congratulations! You won the game.";
        canvasWinner(playerTwo);
    } else if (counterS === counterL) {
        playerOneWinMessage.innerHTML = "Congratulations!Both of you won the game.";
        playerTwoWinMessage.innerHTML = "Congratulations!Both of you won the game.";
        canvasWinner('playerOne-canvas');
        canvasWinner('playerTwo-canvas');
    }

    timerInput.value = "";
    console.log(timerInput.value);
}

function canvasWinner(canvasId) {
    var confettiSettings = { target: canvasId };
    var confetti = new ConfettiGenerator(confettiSettings);
    const canvas = document.getElementById(canvasId);
    canvas.style.visibility = "visible";
    confetti.render();
}

function resetGame() {
    playerOneWinMessage.innerHTML = "";
    playerTwoWinMessage.innerHTML = "";
    playerOneCountInput.innerHTML = 0;
    playerTwoCountInput.innerHTML = 0;
    finishedStr.innerHTML = "Press Start!";
    canvasLeft.style.visibility = "hidden";
    canvasRight.style.visibility = "hidden";
    counterS = 0;
    counterL = 0;
}