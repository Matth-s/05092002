const menu = document.querySelector('#container-header');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const test = document.querySelector('.test');

toggle.addEventListener('click', function() {
    body.classList.toggle('scale');
    test.classList.toggle('background');
});

const sous_menu1 = document.querySelector('#un');
const sous_menu2 = document.querySelector('#deux');
const fleche1 = document.querySelector('#fleche-un');
const fleche2 = document.querySelector('#fleche-deux');
const lien = document.querySelectorAll('.menu');

lien.forEach((item) => {
    item.addEventListener('click', function(e) {

        switch (e.target.id) {
            case "menu-un": 
                fleche1.classList.toggle('rotation');
                sous_menu1.classList.toggle('display-block');
                break;
            case "menu-deux": 
                fleche2.classList.toggle('rotation');
                sous_menu2.classList.toggle('display-block');
                break;
        }
    });
});

fleche1.addEventListener('click', function() {
    fleche1.classList.toggle('rotation');
    sous_menu1.classList.toggle('display-block');
});

fleche2.addEventListener('click', function() {
    fleche2.classList.toggle('rotation');
    sous_menu2.classList.toggle('display-block');
});