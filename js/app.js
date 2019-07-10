/* Cambiar color de fondo con scroll */
"use strict";
const headerTag = document.querySelector('.header');
const bodyTag = document.querySelector('body');
const toTop = document.querySelector('.btn-top');

let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 1100);
}

addEventListener('scroll', () => {
    bodyTag.style.setProperty('background', scrolled() > 50 ? "#232b30" : "#ffacb2");
    headerTag.style.setProperty('background', scrolled() > 50 ? "#232b30" : "#ffacb2");

    if(window.pageYOffset > 1000) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})