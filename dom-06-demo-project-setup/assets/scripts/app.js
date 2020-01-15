const addMovieModalEl = document.getElementById('add-modal'); // better performance than the one below
//const addMovieModal = document.querySelector('#add-modal'); //querySelector wants css collector. 
//const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button') // header의 자식 노드에 버튼이 있다. 쿼리 실렉터이기 때문에 띄어쓰기로 접근가능. 
// const startAddMovieButton = document.querySelector('header').lastElementChild 

const backdropEl = document.getElementById('backdrop');
// const backdropEl = document.body.firstChild;

const cancelMovieButton = addMovieModalEl.querySelector('.btn--passive'); //'.' means first and only button? 
// const cancelMovieButton = document.querySelector('.btn--passive');

const confirmAddMovieButton = cancelMovieButton.nextElementSibling;

const inputElements = addMovieModalEl.querySelectorAll('input');
// const inputElements = addMovieModalEl.getElementsByTagName('input');

// console.log(inputElements[0].value);

const toggleBackdrop = () => {
    backdropEl.classList.toggle('visible')
}

const toggleMovieModal = () => { // function(){}
    toggleBackdrop();    
    addMovieModalEl.classList.toggle('visible');
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

const cancelMovieHandler = () => {
    toggleMovieModal();
}

const addMovieHandler = () => {
    const titleValue = inputElements[0].value;
    const imageUrlValue = inputElements[1].value;
    const ratingValue = inputElements[2].value;

    if(
        titleValue.trim() === '' ||  //trim() removes whitespace ahead of input
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        parseInt(ratingValue) < 1 || 
        parseInt(ratingValue) > 5
        )
        {
        alert('please input valid value (rating between 1 and 5)');
        } 


}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdropEl.addEventListener('click', backdropClickHandler);
cancelMovieButton.addEventListener('click', cancelMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);