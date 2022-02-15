console.log("Olá mundo");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playerSelection = [rockBtn, paperBtn, scissorsBtn];

function computerPlay() {
  let computerOptions = ["Rock", "Paper", "Scissors"];
  let move = Math.floor(Math.random() * 3);
  const computerSelection = computerOptions[move];
}

function playRound() {
  playerSelection.forEach((selection) => {
    selection.addEventListener("click", computerPlay);
    console.log(playerSelection.innerText);
  });
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
}
console.log(playRound());
