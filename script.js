const res = document.querySelector('.res');
const options = document.querySelectorAll('.option');
let userScore = 0;
let computerScore = 0;
let result = "";
let win = "You win";
let lose = "You lose";
let tie = "It is a tie";


function computerplay() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return lose;
        } else if (computerSelection === "rock") {
            return tie;
        } else {
            userScore++;
            return win;
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            userScore++;
            return win;
        } else if (computerSelection === "rock") {
            computerScore++;
            return lose;
        } else {
            return tie;
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "paper") {
            return tie;
        } else if (computerSelection === "rock") {
            userScore++;
            return win;
        } else {
            computerScore++;
            return lose;
        }
    }
}

options.forEach(option => option.addEventListener('click', function() {
    let playerSelection = this.textContent;
    let computerSelection = computerplay();
    result = singleRound(playerSelection, computerSelection);
    updateScore();
    checkWinner();
    if (checkWinner()) {
        userScore = computerScore = 0;
        updateScore();
    };


    res.textContent = result;





    function updateScore() {
        document.getElementById('p-score').textContent = userScore;
        document.getElementById('c-score').textContent = computerScore;

    }

    function checkWinner() {
        if (userScore === 5 || computerScore === 5) {
            const winner =
                userScore === 5 ?
                "You win the game! Congratulations!" :
                "Computer wins the game! Try again next time!";
            alert(winner);
            return true;
        }
        return false;
    }








}));