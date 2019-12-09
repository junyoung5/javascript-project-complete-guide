// Junyoung Oh 
// The complete guide 2020 JavaScript - Maximillian Schwarzmüller

const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

let chosenMaxLife = 100; 
let currentMonsterHealth = chosenMaxLife;
let currentPlayersHealth = chosenMaxLife;
let hasBonusLIfe = true;

adjustHealthBars(chosenMaxLife);

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayersHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound(){
    const initialPlayerHealth = currentPlayersHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayersHealth -= playerDamage; 
    if(currentPlayersHealth <= 0 && hasBonusLIfe){
        hasBonusLIfe = false;
        removeBonusLife();
        currentPlayersHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('you would be dead but the bonus life saved you');
    }
    if (currentMonsterHealth <= 0 && currentPlayersHealth > 0 ){
        alert('You Won!');
        reset();
    } else if (currentPlayersHealth <= 0 && currentMonsterHealth > 0){
        alert('You Lost!');
        reset();
    } else if(currentMonsterHealth <= 0 && currentPlayersHealth <= 0) {
        alert('You have a draw!');
        reset();
    }

}
function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE;
    }
    else if (mode === 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
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

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);