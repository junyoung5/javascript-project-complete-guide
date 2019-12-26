// function sayHello(name) {
//   console.log('Hi ' + name);
// }

//Q1
const sayHello = (name) => console.log('Hi' + name);

//Q2
const sayHello2 = (pOne, pTwo) => console.log(`result: ${pOne} ${pTwo}`);
const sayHello3 = () => console.log(`hard coded phrases`);
const sayHello4 = (pOne, pTwo) => `result: ${pOne} ${pTwo}`

sayHello('JUN');
sayHello2('hi', 'junyougng');
sayHello3();
console.log(sayHello4('hi', 'junyoung'));


//Q3
const sayHello5 = (pOne = 'OH', pTwo = 'JUNYOUNG') =>  console.log(`Hi ${pOne} ${pTwo}`);

sayHello5();
sayHello5('a', 'b');


//Q4
const checkInput = (cb, ...input) => {
  let hasEmptyString = false;
  for (element of input){
    if(!element){
      hasEmptyString = true; 
      break;
    }
  }
  if(!hasEmptyString){
    cb();
  }
}

checkInput(
  //callback function with anonymous
  () => console.log('All not empty'),
  'hi',
  'ther'
)