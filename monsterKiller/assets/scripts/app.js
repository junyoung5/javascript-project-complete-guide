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
    currentMonsterHealth -= damage
    if (currentMonsterHealth <= 0){
        alert('You Won!');
    }
     
}

attackBtn.addEventListener('click', attackHandler);