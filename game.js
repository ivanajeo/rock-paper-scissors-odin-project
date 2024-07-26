let humanScore = 0;
let computerScore = 0;

// Get random output of Rock, Paper, Scissors for computer
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    switch(random) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


// Get human input
function getHumanChoice(e) {
    switch(e.target.id) {
        case "rockBtn":
            return "rock";
        case "paperBtn":
            return "paper";
        case "scissorsBtn":
            return "scissors";
    }
}

function updateResults(situation) {
    const results = document.querySelector("#results");
    results.textContent = 
        `${situation}\nHuman: ${humanScore}, Computer: ${computerScore}`;
}

// Play one round of game
function playRound (humanChoice) {

    const computerChoice = getComputerChoice();
    let situation;

    if (computerChoice === humanChoice) {
        situation = "TIE!";
    } else if (computerChoice === 'rock') {
        if (humanChoice === 'scissors') {
            situation = "Rock beats scissors. Computer wins!";
            computerScore++;
        } else if (humanChoice === 'paper') {
            situation = "Paper beats rock. You win!";
            humanScore++;
        }
    } else if (computerChoice === 'paper') {
        if (humanChoice === 'rock') {
            situation = "Paper beats rock. Computer wins!";
            computerScore++;
        } else if (humanChoice === 'scissors') {
            situation = "Scissors beat paper. You win!";
            humanScore++;
        }
    } else if (computerChoice === 'scissors') {
        if (humanChoice === 'paper') {
            situation = "Scissors beats paper. Computer wins!";
            computerScore++;
        } else if (humanChoice === 'rock') {
            situation = "Rock beats scissors. You win!";
            humanScore++;
        }
    }

    updateResults(situation);
    checkEndGame();
}

function checkEndGame() {
    if (humanScore >= 5 || computerScore >= 5) {
        const btns = document.querySelectorAll(".buttons button");
        btns.forEach((btn) => btn.disabled = true);

        const results = document.querySelector("#results");
        let winner = humanScore > computerScore ? "Human" : "Computer";

        results.textContent += `\n${winner} is the winner!`
    }
}
function playGame() {
    const buttons = document.querySelector(".buttons");

    buttons.addEventListener("click", (e) => {
        const humanChoice = getHumanChoice(e);
        playRound(humanChoice);
    })

    updateResults("");
   
}

playGame();
