console.log("Olá mundo");
let playerScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerSelection = [rockBtn, paperBtn, scissorsBtn];

function computerPlay() {
  const computerOptions = ["Rock", "Paper", "Scissors"];
  let move = Math.floor(Math.random() * 3);
  const computerSelection = computerOptions[move];
  console.log(computerSelection);
}

function playRound() {
  playerSelection.forEach((selection) => {
    selection.addEventListener("click", computerPlay);
    console.log(selection.innerText);
  });
}

function game() {}
console.log(playRound());
