// Show overlay menu when clicking the hamburger button
document.querySelector('#hamburger').addEventListener('click', () => {
    document.querySelector('#overlay').classList.toggle('overlay-show');
});

// Hide the overlay menu when clicking the cross button
document.querySelector('#cross').addEventListener('click', () => {
    document.querySelector('#overlay').classList.toggle('overlay-show');
});

// Hide overlay menu if any of the menu-links is clicked
let menuLinks = document.querySelectorAll('.overlay-nav__item');
Array.from(menuLinks).forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('#overlay').classList.toggle('overlay-show');
    });
});

// Show menu on top after scrolling to certain point
let menu = document.querySelector('.menu');
window.addEventListener('scroll', () => {
    let yPos = window.pageYOffset;
    if (yPos > 500) {
        menu.classList.add('menu-solid');
    } else {
        menu.classList.remove('menu-solid');
    }
});