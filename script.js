const msg = "Please enter 1 for rock, 2 for paper, 3 for scissors";
const gameBtn = document.querySelector("#gameBtn");
const log = document.querySelector("#log");
let playerScore = 0;
let computerScore = 0;


gameBtn.addEventListener("click", () => {
  let choice = prompt(msg);
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
})

function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3+1);
    switch(randomNum) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

function getHumanChoice(choice) {
    switch(choice) {
         case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
  const result = document.querySelector('.result');
  const playerScoreBoard = document.querySelector('.p-count');
  const computerScoreBoard = document.querySelector('.c-count');

  if(humanChoice === computerChoice) {
    result.textContent = 'Tie';
  }
  else if(humanChoice == 'rock') {
    if(computerChoice == 'paper') {
        result.textContent = 'Computer Wins...';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    } else {
        result.textContent = 'Player Wins!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    }
  }
  else if(humanChoice == 'scissors') {
    if(computerChoice == 'rock') {
        result.textContent = 'Computer Wins...';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    } else {
        result.textContent = 'Player Wins!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    }
  }
  else if(humanChoice == 'paper') {
    if(computerChoice == 'scissors') {
        result.textContent = 'Computer Wins...';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    } else {
        result.textContent = 'Player Wins!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    }
  }
 
}



console.log(getComputerChoice());
