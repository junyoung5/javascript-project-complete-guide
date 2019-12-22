let name = 'Max';
let hobbies;


// {
// var time = 10; 
// console.log(time);
// }
// console.log(time);

if (name === 'Max') {
  hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);

}

function greet() {
  let age = 30;
  let name = 'Manuel';

  console.log(name, age, hobbies);
}

console.log(name, hobbies);

greet();

/* HOISTING */
// console.log(name);
// var name = 'jun';



//use strict으로 더 안전한 코드 작성 가능

//let undefined = 5; //undefiend은 이미 저장되어 있어서 에러난다.
//var undefined = 5; //그러나 var type의 경우 에러나지 않음 

// 'use strict'; //하지만 strict mode는  이런 충돌을 막아 더 안전한 환경 조성
// var undefined = 5; 