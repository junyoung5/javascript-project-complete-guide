//traversing & styling DOM
const ul = document.body.firstElementChild.nextElementSibling;
const liFirst = ul.firstElementChild;

console.log(liFirst);

const section = document.querySelector('section');
const button = document.querySelector('button');


// section.style.backgroundColor = 'blue'; //inline style
section.className = '';
section.className = 'red-bg';

button.addEventListener('click', () => {
    // if(section.className === 'red-bg visible'){
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible';
    // }

    //power of classList method 
    section.classList.toggle('invisible');
})

