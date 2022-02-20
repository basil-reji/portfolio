const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav_links');
const nav_bar = document.getElementById('nav-bar');


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
    toggleNavbar();
});

function toggleNavbar() {
    const body = document.querySelector('html');
    if (body.style.overflowY === "hidden") {
        body.style.overflowY = "auto";
        nav_bar.style.pointerEvents = "none";
    } else {
        body.style.overflowY = "hidden";
        nav_bar.style.pointerEvents = "all";
    }
}

document.querySelectorAll('a[href^="#btn"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});