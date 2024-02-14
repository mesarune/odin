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
  
  console.log(playerSelection);
  console.log(computerSelection);

  if ((playerSelection === "rock" && computerSelection === 2) ||
      (playerSelection === "paper" && computerSelection === 0) ||
      (playerSelection === "scissors" && computerSelection === 1)) {
        alert("You win");
      } else if ((playerSelection === "rock" && computerSelection === 1) ||
        (playerSelection === "paper" && computerSelection === 2) ||
        (playerSelection === "scissors" && computerSelection ===0)) {
        alert("You lose");
      } else {
        alert("Draw");
      }
}

playRound();
