const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`).toUpperCase();

    if(
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`invalid choice! we choose ${DEFAULT_USER_CHOICE}`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;

}


// prevent memory leak. it needs to be run when it 
startGameBtn.addEventListener('click', function () {
    if (gameIsRunning){
        return ;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});