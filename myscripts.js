// add stylesheet and pretty css!
// use closure to enclose player score and rounds to win in displayResult?
// seperate ui out from functions
// add R/P/S images on white backgrounds (cards)
    // light them up and slight glow (like the drumset) when playing a round
// add to end-round function
    // display winner
    // should lock out all buttons
    // play again should reset the UI

let playerScore = 0
let compScore = 0
let roundsToWin = 5

function getComputerChoice() {
    // generate random decimal and multiply by 10 -- use floor to get whole num
    let computerNum = (Math.floor(Math.random() * 10))
    if (computerNum <= 3) {
        return 'rock'
    }
    else if (computerNum <= 6) {
        return 'paper'
    }
    else if (computerNum <= 9) {
        return 'scissors'
    }
    else {
        getComputerChoice()
    }
}

function playRound(computerSelection, playerSelection) {
    const computer = computerSelection;
    const player = playerSelection.toLowerCase();
    if (computer === player) {
        return 'draw'
    }
    else if (
    (computer == "rock" && playerSelection == "scissors") ||
    (computer == "scissors" && playerSelection == "paper") ||
    (computer == "paper" && playerSelection == "rock")
    ) {
        return 'lose'
    }
    else {
        return 'win'
    }
}

function updateScore (gameResult) {    
    if (gameResult === 'win') {
        playerScore++
        const result = document.querySelector('.result > h2')
        result.textContent = 'Result: You win!'
        const player = document.querySelector('#player-score')
        player.textContent = `Player Score: ${playerScore} points!`

    }
    else if (gameResult === 'lose') {
        compScore++
        const result = document.querySelector('.result > h2')
        result.textContent = 'Result: You lose!'
        const computer = document.querySelector('#computer-score')
        computer.textContent = `Computer Score: ${compScore} points!`
    }
    else {
        const result = document.querySelector('.result > h2')
        result.textContent = 'Result: Draw...'
    }
}

function checkForWin() {
    if (playerScore >= roundsToWin) {
        // code here   
    }
    else {
        //code here
    }
}
const buttons = document.querySelectorAll('button');

// on button click, play one round passing in id as string to playRound
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let gameResult = (playRound(getComputerChoice(), button.id))
        updateScore(gameResult)
        checkForWin()
    });
});



