// Function to get random output for Rock, Paper, Scissors
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


// Function to play one round of game
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let winCount;

    if (computerSelection === playerSelection) {
        alert("TIE!");
        winCount += 0;
    } else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            alert("You Win! Paper beats Rock");
            winCount += 1;
        } else if (playerSelection === "scissors") {
            alert("You Lose! Rock beats Scissors");
            winCount += 0;
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            alert("You Lose! Paper beats Rock");
            winCount += 0;
        } else if (playerSelection === "scissors") {
            alert("You Win! Scissors beats Paper");
            winCount += 1;
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            alert("You Win! Rock beats Scissors");
            winCount += 1;
        } else if (playerSelection === "paper") {
            alert("You Lose! Scissors beats Paper");
            winCount += 0;
        }
    }
}


// Function to play 5 rounds of the game
// The winner is reported at the end
function playGame() {
    for (let i = 0; i < 5; i++) {
        winCount = 0;
        let getPlayerChoice = prompt("Rock, Paper, Scissors?");
        playRound(getPlayerChoice, getComputerChoice());
    }

    if (winCount >= 3) {
        alert("Congrats! You beat The Computer!");
    } else {
        alert("Ha! The Computer beats You!")
    }
}


// Code to play the game
playGame();