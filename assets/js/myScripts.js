//global variables
let cpuChoice;
let playerChoice;
let winCount = 0;
let loseCount = 0;
let tieCount = 0;
const choice = ["ROCK","PAPER","SCISSORS"];

//This starts the playfivegames on load, just delete if you don't want it to start immediately and want to start it via console instead
playfivegames()

//This was the original start option, it might not be used in the future but currently
//it is not used at all
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

//sends prompt to set playerChoice variable, I couldn't figure out how to embed the variables inside the function
function getPlayerChoice() {
    let playerSelect = prompt('Please Enter Your Choice:', "Rock, Paper, Scissors");
    playerChoice = playerSelect.toUpperCase();
    if (playerChoice == choice[0] || playerChoice == choice[1] || playerChoice == choice[2]) {
    return console.log('Player choice', playerChoice);
    } else {
    return alert("Seems like we had an issue, check your input and try again");
    } 
}  

//randoms a choice from the choice array and assigns it to the cpuChoice global variable

function getComputerChoice() {
    result = choice[Math.floor(Math.random()*choice.length)];
    cpuChoice = result.toUpperCase()
    return console.log('CPU output:', cpuChoice);
}

//Checks the playerChoice against the cpuChoice, outputs a window to confirm if you want to play again
//In practice, the playfivegames is it's own loop but it can be broken if you say no, but it'll also only play five games.
//Additionally, the win, loss, and ties add a count to their global variables and is displayed after the iteration is completed
//the total display is only available from a completed iteration, will have to change later
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

//Current playfivegames function, it's on start of the load page, it also displays the total results from all played games.
function playfivegames() {
  for (let i = 0; i < 5; i++) {
    getComputerChoice();
    getPlayerChoice();
    getGameResults();
    console.log("Iteration:" + i);
    console.log(`Wins:${winCount} Losses:${loseCount} Ties:${tieCount}`)
    }
}