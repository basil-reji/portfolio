const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav_links');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    toggleNavbar();
});

function toggleNavbar() {
    const body = document.querySelector('html');
    if (body.style.overflow === "hidden") {
        body.style.overflow = "auto";
    } else {
        body.style.overflow = "hidden";
    }
}