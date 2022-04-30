function game() {
  let playerScore = 0;
  let computerScore = 0;
  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorsBtn = document.querySelector("#scissors");
  const result = document.querySelector(".result");
  const playerOption = document.querySelector(".player-option");
  const computerOption = document.querySelector(".computer-option");
  let computerSelection;
  const playerScoreCounter = document.querySelector(".player-score");
  const computerScoreCounter = document.querySelector(".computer-score");

  rockBtn.addEventListener("click", () => playRound("Rock", computerSelection));
  paperBtn.addEventListener("click", () =>
    playRound("Paper", computerSelection)
  );
  scissorsBtn.addEventListener("click", () =>
    playRound("Scissors", computerSelection)
  );

  function computerPlay() {
    let move = Math.floor(Math.random() * 3);
    switch (move) {
      case 0:
        computerOption.innerHTML = "✊";
        return "Rock";
      case 1:
        computerOption.innerHTML = "✋";
        return "Paper";
      case 2:
        computerOption.innerHTML = "✌";
        return "Scissors";
    }
  }

  function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === "Rock") {
      playerOption.innerHTML = "✊";
    } else if (playerSelection === "Paper") {
      playerOption.innerHTML = "✋";
    } else {
      playerOption.innerHTML = "✌";
    }
    if (playerSelection === computerSelection) {
      result.innerHTML = "It's a tie!";
    } else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Scissors" && computerSelection === "Paper") ||
      (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
      playerScore++;
      result.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
      playerScoreCounter.innerHTML = playerScore;
    } else {
      computerScore++;
      result.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
      computerScoreCounter.innerHTML = computerScore;
    }
  }
}
game();
