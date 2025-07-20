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
  

// playGame()
//   play 5 rounds
//   keep scores
//     variables that counts number of games, computers score, players score, number of ties
//   show stats
//   update states
//   Declare winner and loser
