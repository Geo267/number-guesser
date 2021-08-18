let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  const randomNumber = Math.floor(Math.random()*9);
  return randomNumber;
}

const compareGuesses = (currentHumanGuess, computerGuess, generateTarget) => {
    if (currentHumanGuess <0 || currentHumanGuess >9) {
      document.write('Number out of range');
    }else {
    let humanDiff = Math.abs(currentHumanGuess - generateTarget);
    let computerDiff = Math.abs(computerGuess - generateTarget);
    if (humanDiff < computerDiff || humanDiff === computerDiff) {
      return true;
    } else {
      return false;
    }
}
}
const updateScore = winner => {
  if (winner === 'human') {
   humanScore++;
  }else if (winner === 'computer') {
   computerScore++;
  }

}
const advanceRound = () => {
      currentRoundNumber ++;
}
