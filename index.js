// Button toggle nav-bar
const toggleButton = document.getElementsByClassName('nav__hamburger')[0];
const navbarLinks = document.getElementsByClassName('nav-bar')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

// Button toggle menu
const toggleButtonMenu = document.getElementsByClassName('menu-expand')[0];
const menuLinks = document.getElementsByClassName('menu__block')[0];

toggleButtonMenu.addEventListener('click', () => {
  menuLinks.classList.toggle('active')
});