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
    let winCount;
    if (computerSelection === "rock" && playerSelection === "rock") {
        alert("TIE!");
        winCount += 0;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        alert("You Win! Paper beats Rock");
        winCount += 1;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        alert("You Lose! Rock beats Scissors");
        winCount += 0;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        alert("You Lose! Paper beats Rock");
        winCount += 0;
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        alert("TIE!");
        winCount += 0;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        alert("You Win! Scissors beats Paper");
        winCount += 1;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        alert("You Win! Rock beats Scissors");
        winCount += 1;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        alert("You Lose! Scissors beats Paper");
        winCount += 0;
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        alert("TIE!");
        winCount += 0;
    }
}




function playGame() {
    for (let i = 0; i < 5; i++) {
        winCount = 0;
        console.log(i);
        let getPlayerChoice = prompt("Rock, Paper, Scissors?");
        playRound(getPlayerChoice, getComputerChoice());
    }
    if (winCount >= 3) {
        alert("Congrats! You beat The Computer!");
    } else {
        alert("Ha! The Computer beats You!")
    }
}

playGame();