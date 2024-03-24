function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (computerSelection === "rock" && playerSelection === "rock") {
        alert("TIE!");
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        alert("You Win! Paper beats Rock");
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        alert("You Lose! Rock beats Scissors");
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        alert("You Lose! Paper beats Rock");
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        alert("TIE!");
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        alert("You Win! Scissors beats Paper");
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        alert("You Win! Rock beats Scissors");
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        alert("You Lose! Scissors beats Paper");
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        alert("TIE!");
    }
}

let getPlayerChoice = prompt("Rock, Paper, Scissors?");

playRound(getPlayerChoice, getComputerChoice());