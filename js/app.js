const carrito = document.querySelector ('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector ('#lista-cursos');
const vaciarCarritoBtn = document.querySelector ('#vaciar-carrito');

cargarEventListener
function cargarEventListener(){
listaCursos.addEventListener('click', agregarCurso);
}


//funciones
function agregarCurso(){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
    console.log(e.target);
}
}