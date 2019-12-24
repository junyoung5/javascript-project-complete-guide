const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DRAW = 'DRAW';
const PLAYER_WINS = 'PLAYER WINS!';
const COMPUTER_WINS = 'COMPUTER WINS!';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`).toUpperCase();

    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`invalid choice! we choose ${DEFAULT_USER_CHOICE}`);
        return;
    }
    return selection;

}

const getComputerChoice =  () => {
    const randomValue = Math.random();

    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

// arrow funciton example
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
    cChoice === pChoice
        ? DRAW
        : cChoice === ROCK && pChoice === PAPER ||
          cChoice === PAPER && pChoice === SCISSORS ||
          cChoice === SCISSORS && pChoice === ROCK
        ? PLAYER_WINS
        : COMPUTER_WINS

// const getWinner = function (cChoice, pChoice) {
//     if (cChoice === pChoice) {
//         return DRAW;
//     } else if (
//         cChoice === ROCK && pChoice === PAPER ||
//         cChoice === PAPER && pChoice === SCISSORS ||
//         cChoice === SCISSORS && pChoice === ROCK
//     ) {
//         return PLAYER_WINS;
//     } else {
//         return COMPUTER_WINS;
//     }
// }

// prevent memory leak. it needs to be run when it 
startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let winner;
    if (playerSelection){
        winner = getWinner(computerSelection, playerSelection);
    } else { //when playerSelection is undeifined(when user input strange things)
        winner = getWinner(computerSelection);
    }
    let message = `you picked ${playerSelection ? playerSelection : DEFAULT_USER_CHOICE} and computer picked ${computerSelection} therefore you ` 
    if (winner === DRAW){
        message = message + `had a draw.`
    } else if (winner == PLAYER_WINS) {
        message = message + `won.`
    } else {
        message = message + `lost.`
    }
    alert(message);
    gameIsRunning = false;

});