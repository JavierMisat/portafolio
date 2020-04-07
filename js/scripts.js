const burgerMenu = document.querySelector('.burguer-button');
const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menu ul');
const ipad = window.matchMedia('screen and (max-width:767px)');

function validation(e) {
    if (e.matches) {
        burgerMenu.addEventListener('click', menuActive);
        menuItems.addEventListener('click', delegateMenuItems);
    } else {
        burgerMenu.removeEventListener('click', menuActive);
        menuItems.removeEventListener('click', delegateMenuItems);
    }
}

function menuActive() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}

function delegateMenuItems(event) {
    if (event.target && event.target.nodeName === 'A') {
        menu.classList.remove('is-active');
    }
}


/**
 * Event listeners
 */
ipad.addEventListener('change', validation);
validation(ipad);

