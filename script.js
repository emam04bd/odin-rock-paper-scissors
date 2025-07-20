function getPlayerChoice() {
  // take and returns user input
  return prompt("Enter rock, paper or scissors: ");
}

function getBotChoice() {
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

// function playRound()
//   take user input 
//   show computer choice
//   show result
//   return result

// playGame()
//   play 5 rounds
//   keep scores
//     variables that counts number of games, computers score, players score, number of ties
//   show stats
//   update states
//   Declare winner and loser
