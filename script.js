let random = Math.random();

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
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "";
    let computerSelection = "";
    let result = "";

    while (playerScore < 5 && computerScore < 5) {
        playerSelection = prompt("Rock,Paper,Scissors");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerplay();
        result = singleRound(playerSelection, computerSelection);

        if (result == "You win!") {
            playerScore++;
        } else if (result == "You lose!") {
            computerScore++;
        }
        console.log("player score:" + playerScore);
        console.log("computer score:" + computerScore);
        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log("You are the winner");
    } else {
        console.log("you suck you moron!");
    }
}