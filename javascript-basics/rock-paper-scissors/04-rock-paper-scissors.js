"use strict";

function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper, Scissors", "").toLowerCase();
  switch (playerChoice) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissors":
      return 2;
  };
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
  // 0 = Rock, 1 = Paper, 2 = Scissors
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
        return 0;
      } else if ((playerSelection + 1) % 3 === computerSelection % 3) {
        return -1;
      } else {
        return 1;
      }
}

function showResult(score) {
  if (score > 0) {
    alert("You win");
  } else if (score < 0) {
    alert("You lose");
  } else {
    alert("Draw");
  };
}

function playGame() {
  let playerScore = 0;
  for (let round = 0; round < 5; round++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playerScore += playRound(playerSelection, computerSelection);
  };  
  showResult(playerScore);
}

playGame();

