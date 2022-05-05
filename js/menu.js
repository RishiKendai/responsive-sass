// VARIABLES
let showMenu = false;
const menuIcon = document.querySelector('.menu-icon');
const hamBurger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navList = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-item');

// SELECTORS
menuIcon.addEventListener('click', handleMenuIcon);

// FUNCTIONS
function handleMenuIcon() {
  if (!showMenu) {
    hamBurger.classList.add('open');
    nav.classList.add('open');
    navList.classList.add('open');
    navItem.forEach((item) => item.classList.add('open'));
    showMenu = true;
    return;
  }
  hamBurger.classList.remove('open');
  nav.classList.remove('open');
  navList.classList.remove('open');
  navItem.forEach((item) => item.classList.remove('open'));
  showMenu = false;
}
