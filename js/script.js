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
    if (body.style.overflow === "hidden") {
        body.style.overflow = "auto";
        nav_bar.style.pointerEvents = "none";
    } else {
        body.style.overflow = "hidden";
        nav_bar.style.pointerEvents = "all";
    }
}