let humanScore = 0;
let computerScore = 0;


// Get random output of Rock, Paper, Scissors for computer
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch(computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


// Get human input
function getHumanChoice() {
    let humanChoice = prompt("Choose between Rock, Paper or Scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}


// Play one round of game
function playRound (computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        alert("TIE!");
    } else if (computerChoice === 'rock') {
        if (humanChoice === 'scissors') {
            alert("Rock beats scissors. Computer wins!");
            computerScore++;
        } else if (humanChoice === 'paper') {
            alert("Paper beats rock. You win!");
            humanScore++;
        }
    } else if (computerChoice === 'paper') {
        if (humanChoice === 'rock') {
            alert("Paper beats rock. Computer wins!");
            computerScore++;
        } else if (humanChoice === 'scissors') {
            alert("Scissors beat paper. You win!");
            humanScore++;
        }
    } else if (computerChoice === 'scissors') {
        if (humanChoice === 'paper') {
            alert("Scissors beats paper. Computer wins!");
            computerScore++;
        } else if (humanChoice === 'rock') {
            alert("Rock beats scissors. You win!");
            humanScore++;
        }
    }
}


// Function to play 5 rounds of the game
// The winner is reported at the end
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    if (computerScore > humanScore) {
        alert(`Computer Wins! ${computerScore} : ${humanScore}!`);
    } else if (humanScore > computerScore) {
        alert(`Human Wins! ${humanScore} : ${computerScore}!`);
    } else {
        alert(`The game is TIED. ${computerScore} : ${humanScore}!`);
    }
}


// Play the game
playGame();