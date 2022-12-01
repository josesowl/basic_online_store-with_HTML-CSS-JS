const menuEmail = document.querySelector('.navbar-email');
const profileMenu = document.querySelector('.profile-menu');
const arrow = document.querySelector('.arrow');

//for mouseover in "Email"
menuEmail.addEventListener('mouseover', toggleProfileMenu);
menuEmail.addEventListener('mouseout', outProfileMenu);

function toggleProfileMenu() {
    profileMenu.classList.toggle('inactive');
}
function outProfileMenu() {
    profileMenu.classList.toggle('inactive');
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
