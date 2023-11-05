const menuBar = document.querySelector('#menu-bar');
const navMenu = document.querySelector('#nav-menu');


menuBar.addEventListener('click',() => {
    menuBar.classList.toggle('menu-bar-active');
    navMenu.classList.toggle('hidden');
});

window.onscroll = () => {
    const header = document.querySelector('header');
    const navBarFixed = header.offsetTop;

    if(window.scrollY > navBarFixed) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}