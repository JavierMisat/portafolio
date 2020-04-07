const burgerMenu = document.querySelector('.burguer-button');
const menu = document.querySelector('.menu');
const ipad = window.matchMedia('screen and (max-width:767px)');

function validation(e) {
    if (e.matches) {
        burgerMenu.addEventListener('click', menuActive);
    } else {
        burgerMenu.removeEventListener('click', menuActive);
    }
}

function menuActive() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}

/**
 * Event listeners
 */
ipad.addEventListener('change', validation);
validation(ipad);

