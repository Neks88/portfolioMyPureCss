document.querySelector(".nav-btn").addEventListener("click", showNav);

function showNav() {
    document.querySelector('.nav__list').classList.toggle('nav_list_shown');
}