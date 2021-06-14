const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menu.style.display = 'flex';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menu.style.display = 'none';
    }
});
