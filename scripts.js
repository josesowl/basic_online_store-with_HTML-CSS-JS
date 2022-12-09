const menuEmail = document.querySelector('.navbar-email');
const profileMenu = document.querySelector('.profile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.shopping-cart1');
const arrow = document.querySelector('.arrow');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//for click in "shopping cart"
shoppingCartIcon.addEventListener('click', toggleAside);

function toggleAside() {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    profileMenu.classList.add('inactive');
}

//Mobile menu hide/show
iconMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

//for mouseover in "Email"
menuEmail.addEventListener('click', toggleProfileMenu);

function toggleProfileMenu() {
    profileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

//For the arrow to rotate when "Emails" mouseover
menuEmail.addEventListener('mouseover', arrowDown);
menuEmail.addEventListener('mouseout', arrowUp);

function arrowDown() {    
    arrow.style.transform = 'rotate(90deg)';
}
function arrowUp() {
    arrow.style.transform = 'rotate(0deg)';
}

