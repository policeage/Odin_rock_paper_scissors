let cpuChoice;
let playerChoice;
let winCount = 0;
let loseCount = 0;
let tieCount = 0;
const choice = ["ROCK","PAPER","SCISSORS"];

playfivegames()

function gameTime() {
    let gameConfirm = confirm("Do you want to play a game?");
    if (gameConfirm==false) {
      return alert("Understandable, have a good day.");
    } else {
        getComputerChoice();
        getPlayerChoice();
        getGameResults();
             

    }
}


function getPlayerChoice() {
    let playerSelect = prompt('Please Enter Your Choice:', "Rock, Paper, Scissors");
    playerChoice = playerSelect.toUpperCase();
    if (playerChoice == choice[0] || playerChoice == choice[1] || playerChoice == choice[2]) {
    return console.log('Player choice', playerChoice);
    } else {
    return alert("Seems like we had an issue, check your input and try again");
    } 
}  

function getComputerChoice() {
    result = choice[Math.floor(Math.random()*choice.length)];
    cpuChoice = result.toUpperCase()
    return console.log('CPU output:', cpuChoice);
}


function getGameResults() {
    if (playerChoice == cpuChoice) {
            let playAgainTie = confirm(`It\'s a tie? Now who let that happen? I\'m sure you can guess you both played ${playerChoice} Play again?`); {
            if (playAgainTie) {
              tieCount++;
              console.log("Tied!");
              return;
            } else {
              alert("Understandable, have a good day.");
            }};
    } else if (playerChoice == choice[0] && cpuChoice == choice[1] || playerChoice == choice[1] && cpuChoice == choice[2] || playerChoice == choice[2] && cpuChoice == choice[0]) {
            let playAgainLose = confirm(`It\'s a loss, we can\'t all be winners. You played ${playerChoice} and your opponent played ${cpuChoice} Play again?`); {
            if (playAgainLose) {
              loseCount++;
              console.log("Loss!");
              return;
            } else {
              alert("Understandable, have a good day.");
            }};
    } else if (playerChoice == choice[0] && cpuChoice == choice[2] || playerChoice == choice[1] && cpuChoice == choice[0] || playerChoice == choice[2] && cpuChoice == choice[1]) {
            let playAgainWin = confirm(`You are a winrar. You played ${playerChoice} and your opponent played ${cpuChoice} play again?`); {
            if (playAgainWin) {
              winCount++;
              console.log("Win!");
              return;
            } else {
              alert("Understandable, have a good day.");
            }}; 
    } else {
        return alert("Seems like there was an issue with getting the results.")     
    }
}

function playfivegames() {
  for (let i = 0; i < 5; i++) {
    getComputerChoice();
    getPlayerChoice();
    getGameResults();
    console.log("Iteration:" + i);
    console.log(`Wins:${winCount} Losses:${loseCount} Ties:${tieCount}`)
    }
}