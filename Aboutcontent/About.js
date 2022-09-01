const close = document.querySelector('.nabar_times');
const menuOpen = document.querySelector('.navbar__toggle');

//display mobile menu
const mobileMenu = () => {
    menuOpen.classList.toggle('inactive');
    close.classList.toggle('inactive');
}
menuOpen.addEventListener('click', mobileMenu);



const closeFunction =() => {
    menuOpen.classList.toggle('inactive');
    close.classList.toggle('inactive');
}
close.addEventListener('click', closeFunction);


