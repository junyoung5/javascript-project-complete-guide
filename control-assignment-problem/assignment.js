const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();
if (randomNumber >=  0.7){
    alert('HI THERE it is greater or eqaul than 0.7');
}

let numArray = [1,2,3,4,5,6,7];
for (num of numArray){
    console.log(`here: ${num}`);
}

for (let i = 0; i < numArray.length; i++){
    console.log(`here: ${numArray[i]}`);
}

let counter = 0;
while (counter < numArray.length){
    console.log(numArray[counter]);
    counter ++ 
}

for (let i = numArray.length -1 ; i >= 0; i--){
    console.log(numArray[i]);
}

if (randomNumber > 0.7 && randomNumber2 > 0.7 || randomNumber <= 0.2 || randomNumber2 <= 0.2){
    alert('hi');
}
