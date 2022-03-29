let playerScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerSelection = [rockBtn, paperBtn, scissorsBtn];

playerSelection.forEach((selection) => {
  selection.addEventListener("click", playRound);
});

function computerPlay() {
  const computerOptions = [rockBtn, paperBtn, scissorsBtn];
  let move = Math.floor(Math.random() * 3);
  const computerSelection = computerOptions[move].innerText;
}
computerPlay();

function playRound(e) {
  console.log(e.currentTarget.innerText);
  // console.log(computerSelection);
}

function game() {}
