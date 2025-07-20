playGame();

function getPlayerChoice() {
  // take and returns user input
  return prompt("Enter rock, paper or scissors: ");
}

function getBotChoice() {
  // return a random choice among rock, paper, scissors

  let random = Math.floor(Math.random() * 3);
  let choice;

  if(random == 0)
    choice = "rock";
  else if(random == 1)
    choice = "paper";
  else
    choice = "scissors";

  return choice;
}

function playRound() {
  // calc, show & return result

  const playerChoice = getPlayerChoice().toLocaleLowerCase();
  const botChoice = getBotChoice();
  console.log("You choose: " + playerChoice);
  console.log("Bot choose: " + botChoice);
  let winner;

  if(playerChoice === botChoice) 
    winner = "none";
  else if((playerChoice == "rock" && botChoice == "paper") || (playerChoice == "paper" && botChoice == "scissors") || (playerChoice == "scissors" && botChoice == "rock"))
    winner = "bot";
  else
    winner = "player";

  console.log("Winner: " + winner);
  return winner;
}
  

function playGame() {
  /**
   * play 5 rounds
   * show stats
   * Declare winner
   */

  const totalRounds = 5;
  let round = 0, botScore = 0, playerScore = 0, ties = 0;
  let winner;

  for(let i = 0; i < totalRounds; i++) {
    round++;
    console.log("Round: " + round);
    winner = playRound();

    if(winner == "player")
      playerScore++;
    else if(winner == "bot")
      botScore++;
    else
      ties++;

    console.log("Your score: " + playerScore);
    console.log("Bot score: " + botScore);
    console.log("Ties: " + ties);
    console.log("\n\n");
  }
  
  if(playerScore > botScore)
    console.log("You won!");
  else if(playerScore < botScore)
    console.log("You lost!");
  else
    console.log("It's a tie!");
}
