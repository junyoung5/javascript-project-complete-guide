const addMovieModal = document.getElementById('add-modal'); // better performance than the one below
//const addMovieModal = document.querySelector('#add-modal'); //querySelector wants css collector. 
//const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button') // header의 자식 노드에 버튼이 있다. 쿼리 실렉터이기 때문에 띄어쓰기로 접근가능. 

console.log(startAddMovieButton);