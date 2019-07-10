/* Cambiar color de fondo con scroll */
"use strict";
const headerTag = document.querySelector('.header');
const bodyTag = document.querySelector('body');

let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 1100);
}

addEventListener('scroll', () => {
    bodyTag.style.setProperty('background', scrolled() > 50 ? "#232b30" : "#ffacb2");
    headerTag.style.setProperty('background', scrolled() > 50 ? "#232b30" : "#ffacb2");
})