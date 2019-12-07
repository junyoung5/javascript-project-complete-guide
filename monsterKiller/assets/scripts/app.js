// Junyoung Oh 
// The complete guide 2020 JavaScript - Maximillian Schwarzmüller

const attackValue = 10;
const MonsterAttackValue = 14;

let chosenMaxLife = 100; 
let currentMonsterHealth = chosenMaxLife;
let currentPlayersHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler(){ //Handler is function name for addEventListener
    const damage = dealMonsterDamage(attackValue);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MonsterAttackValue);
    currentPlayersHealth -= playerDamage; 
    if (currentMonsterHealth <= 0 && currentPlayersHealth > 0 ){
        alert('You Won!');
    } else if (currentPlayersHealth <= 0 && currentMonsterHealth > 0){
        alert('You Lost!');
    } else if(currentMonsterHealth <= 0 && currentPlayersHealth <= 0) {
        alert('You have a draw!');
    }
     
}

attackBtn.addEventListener('click', attackHandler);