// Junyoung Oh 
// The complete guide 2020 JavaScript - Maximillian Schwarzmüller

const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';


let enteredValue = prompt('Maximum life for you and the monster.', '100'); //to get user input
let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNan(chosenMaxLife || chosenMaxLife <= 0)){
    chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayersHealth = chosenMaxLife;
let hasBonusLIfe = true;

adjustHealthBars(chosenMaxLife);
function writeToLog(ev, val, monsterHealth, playerHealth){
    let logEntry = {
        event = ev,
        value = val,
        finalMonsterHealth = monsterHealth,
        finalPlayerHealth = playerHealth
    }

    if (ev === LOG_EVENT_PLAYER_ATTACK){
        logEntry.target('MONSTER');
    } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntry.target('MONSTER');
    } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
        logEntry.target('PLAYER');
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
        logEntry.target('PLAYER');
    } else if (eve === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event = ev,
            value = val,
            finalMonsterHealth = monsterHealth,
            finalPlayerHealth = playerHealth
        }
    }

    battleLog.push(logEntry);

}
function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayersHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound(){
    const initialPlayerHealth = currentPlayersHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayersHealth -= playerDamage; 
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayersHealth
    )
    if(currentPlayersHealth <= 0 && hasBonusLIfe){
        hasBonusLIfe = false;
        removeBonusLife();
        currentPlayersHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('you would be dead but the bonus life saved you');
    }
    if (currentMonsterHealth <= 0 && currentPlayersHealth > 0 ){
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayersHealth
        )
        alert('You Won!');
        reset();
    } else if (currentPlayersHealth <= 0 && currentMonsterHealth > 0){
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayersHealth
        )
        alert('You Lost!');
        reset();
    } else if(currentMonsterHealth <= 0 && currentPlayersHealth <= 0) {
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'A DRAW',
            currentMonsterHealth,
            currentPlayersHealth
        )
        alert('You have a draw!');
        reset();
    }

}
function attackMonster(mode) {
    let maxDamage;
    let logEvent;
    if (mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    }
    else if (mode === 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayersHealth
    )
    endRound();
}


function attackHandler(){ //Handler is function name for addEventListener
    attackMonster('ATTACK')
}

function strongAttackHandler(){
    attackMonster('STRONG_ATTACK')
}

function healPlayerHandler(){
    let healValue;
    if (currentPlayersHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You can't heal to more than your max initial health")
        healValue =  chosenMaxLife - currentPlayersHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayersHealth += HEAL_VALUE
    endRound();

}

function printLogHandler(){
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);