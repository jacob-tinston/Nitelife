let nav = document.getElementById('mobile-nav');
let menu = document.getElementById('menu');
let closeIcon = document.getElementById('close');

const displayMenu = () => nav.style.display = 'block';
const hideMenu = () => nav.style.display = 'none';

menu.addEventListener('click', displayMenu);
closeIcon.addEventListener('click', hideMenu);