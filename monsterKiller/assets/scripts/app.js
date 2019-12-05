// Junyoung Oh 
// The complete guide 2020 JavaScript - Maximillian Schwarzmüller

const attackValue = 10;

let chosenMaxLife = 100; 
let currentMonsterHealth = chosenMaxLife;
let currentPlayersHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler(){
    const damage = dealMonsterDamage(attackValue);
    currentMonsterHealth -= damage
     
}

attackBtn.addEventListener('click', attackHandler);