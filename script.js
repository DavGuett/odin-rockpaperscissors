let playerScore = 0;
let computerScore = 0;
let winner = "";
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const computerSelection = computerPlay();

rockBtn.addEventListener("click", () => playRound("Rock", computerSelection));
paperBtn.addEventListener("click", () => playRound("Paper", computerSelection));
scissorsBtn.addEventListener("click", () =>
  playRound("Scissors", computerSelection)
);

function computerPlay() {
  let move = Math.floor(Math.random() * 3);
  switch (move) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    winner = "tie";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    winner = "player";
  } else {
    computerScore++;
    winner = "computer";
  }
}

function game() {}
