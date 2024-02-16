"use strict";

/* Rock Paper Scissors

1.Get player selection
2.Get computer selection
3.Comparing the selections
4.Return the results

*/

function getPlayerChoise() {
  return prompt("Rock, Paper, Scissors", "");
}

function getComputerChoise() {
  return Math.floor(Math.random() * 3); // 0 = Rock, 1 = Paper, 2 = Scissors
}

function playRound() {
  
  let playerSelection = getPlayerChoise().toLowerCase();
  let computerSelection = getComputerChoise();

  if ((playerSelection === "rock" && computerSelection === 2) ||
      (playerSelection === "paper" && computerSelection === 0) ||
      (playerSelection === "scissors" && computerSelection === 1)) {
        return playerScore++;
      } else if ((playerSelection === "rock" && computerSelection === 1) ||
        (playerSelection === "paper" && computerSelection === 2) ||
        (playerSelection === "scissors" && computerSelection ===0)) {
        return playerScore;
      } else {
        return playerScore;
      }
}

/* play a five round game that keeps score and reports a winner or loser at the end */

/* for loop syntax

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}

*/

let playerScore = 0;

function showResult() {
  if (playerScore > 2) {
    alert("You win");
  } else {
    alert("You lose");
  };
}

function playGame() {  
  for (let round = 0; round < 5; round++) {
    playRound();
  };
  
  showResult();  
}

playGame();

console.log(playerScore);