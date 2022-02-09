console.log("Olá mundo");

function computerPlay() {
  let game = ["Rock", "Paper", "Scissors"];
  return game[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();
  if (playerChoice == "rock" && computerChoice == "rock") {
    console.log("It's a draw!");
  }
  if (playerChoice == "rock" && computerChoice == "paper") {
    console.log("You Lose! Paper beats Rock");
  }
  if (playerChoice == "rock" && computerChoice == "scissors") {
    console.log("You Win! Rock beats Scissors");
  }
  if (playerChoice == "paper" && computerChoice == "rock") {
    console.log("You Win! Paper beats Rock");
  }
  if (playerChoice == "paper" && computerChoice == "paper") {
    console.log("It's a draw!");
  }
  if (playerChoice == "paper" && computerChoice == "scissors") {
    console.log("You Lose! Scissors beats Paper");
  }
  if (playerChoice == "scissors" && computerChoice == "rock") {
    console.log("You Lose! Rock beats Scissors");
  }
  if (playerChoice == "scissors" && computerChoice == "paper") {
    console.log("You Win! Scissors beats Paper");
  }
  if (playerChoice == "scissors" && computerChoice == "scissors") {
    console.log("It's a draw!");
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
  return "The game has ended";
}
const computerSelection = computerPlay();
const playerSelection = prompt();
console.log(game());
