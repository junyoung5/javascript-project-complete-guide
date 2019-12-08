// Junyoung Oh 
// The complete guide 2020 JavaScript - Maximillian Schwarzmüller

const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

let chosenMaxLife = 100; 
let currentMonsterHealth = chosenMaxLife;
let currentPlayersHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);


function endRound(){
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayersHealth -= playerDamage; 
    if (currentMonsterHealth <= 0 && currentPlayersHealth > 0 ){
        alert('You Won!');
    } else if (currentPlayersHealth <= 0 && currentMonsterHealth > 0){
        alert('You Lost!');
    } else if(currentMonsterHealth <= 0 && currentPlayersHealth <= 0) {
        alert('You have a draw!');
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
    increasePlayerHealth(HEAL_VALUE);
    endRound();

}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);