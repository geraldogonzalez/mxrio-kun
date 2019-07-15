/* Cambiar color de fondo con scroll */
"use strict";
/*const headerTag = document.querySelector('.header');
const bodyTag = document.querySelector('body');*/
const toTop = document.querySelector('.btn-top');
const zoomImg = document.querySelector('#lightboxOverlay');
const html = document.getElementsByTagName('html');

/*let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 1100);
}*/

addEventListener('scroll', () => {
   /* bodyTag.style.setProperty('background', scrolled() > 50 ? "#232b30" : "#ffacb2");
    headerTag.style.setProperty('background', scrolled() > 50 ? "#232b30" : "#ffacb2");*/

    if(window.pageYOffset > 1000) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})


const botonUno = document.querySelector('#botonUno');
const botonTres = document.querySelector('#botonTres');
const posts = document.querySelector('#posts');


//  LISTENERS

cargarEventListeners();

function cargarEventListeners(){
    
    // Se acciona al darle al icono de cuadro
    botonUno.addEventListener('click', unaImagen);

    // Se acciona al darle al icono de 3x3 cuadros
    botonTres.addEventListener('click', tresImagenes);
}


//  FUNCIONES

// Función que habilita la vista de una imagen por columna.
function unaImagen(e){
    e.preventDefault();
    botonTres.classList.remove('active');
    botonUno.classList.add('active');
    posts.classList.add('container-posts-one');
}


// Función que habilita la vista de tres imágenes por columna.
function tresImagenes(e){
    e.preventDefault();
    botonTres.classList.add('active');
    botonUno.classList.remove('active');
    posts.classList.remove('container-posts-one');
}