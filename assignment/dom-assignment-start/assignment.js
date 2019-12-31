//Task1
const task1El1 = document.getElementById('task-1');
const task1El2 = document.querySelector('#task-1');
const task1El3 = document.querySelector('li'); //querySelector matches first one!!!!!! 

task1El1.style.color = 'white';
task1El1.style.backgroundColor = 'black';

//Task2
const docTitle1 = document.querySelector('title');
docTitle1.textContent = 'Assignment - Solved!';

const docHead = document.head //makes it dealing with the only head part
const doctTitle2 = docHead.querySelector('title');
doctTitle2.textContent = 'Assignment - Solved 2';

//Task3
// const h1 = document.querySelector('h1');
// const h1 = document.body.querySelector('h1');
const h1 = document.getElementsByTagName('h1'); //it gives a collecdtion of element
h1[0].textContent = 'Assignment - Solved!!!';

