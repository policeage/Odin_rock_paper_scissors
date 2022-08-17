let cpuChoice;
let playerChoice;
const choice = ["rock","paper","scissors"];

gameTime()

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
    let playerSelect = prompt('Please Enter Your Choice:', "Rock, Paper, Sciccors")
    let scrub = playerSelect.toLowerCase();
    if (scrub !== choice[0] && scrub !== choice[1] && scrub !== choice[2]) {
    return alert("Seems like we had an issue, check your input and try again")
    } else {
    let playerChoice = scrub;
    return console.log(playerChoice);
    } 
}  

function getComputerChoice() {
    cpuChoice = choice[Math.floor(Math.random()*choice.length)];
    return console.log('CPU output:', cpuChoice);
}


function getGameResults() {
    switch (true) {
      case (playerChoice == cpuChoice):
            playAgainTie = confirm(`It\'s a tie? Now who let that happen? I\'m sure you can guess you both played ${playerChoice} Play again?`); {
            if (playAgainTie) {
              return newGamePlus;
            } else {
              return alert("Understandable, have a good day.");
            }};
        break;
      case (playerChoice == (choice[0] || choice[1] || choice[2]) && cpuChoice == (choice[1] || choice[2] || choice[3])):
            playAgainLose = confirm(`It\'s a loss, we can\'t all be winners. You played ${playerChoice} and your opponent played ${cpuChoice} Play again?`); {
            if (playAgainLose) {
              return newGamePlus;
            } else {
              return alert("Understandable, have a good day.");
            }};
        break;
      case (playerChoice == (choice[0] || choice[1] || choice[2]) && cpuChoice == (choice[2] || choice[0] || choice[1])):
            playAgainWin = confirm(`You are a winrar. You played ${playerChoice} and your opponent played ${cpuChoice} play again?`); {
            if (playAgainWin) {
               return newGamePlus;
            } else {
               return alert("Understandable, have a good day.");
            }};
        break;      
    }
}

let newGamePlus = gameTime()