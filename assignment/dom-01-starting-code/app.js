//const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li'); // same with above line


for (listItemEl of listItemElements){
    console.dir(listItemEl);
}

const h1 = document.getElementById('main-title')
h1.textContent = 'Some New Title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'Black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (changed!)';

const body = document.body;
