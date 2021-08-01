window.addEventListener('load', () => {
    const body = document.querySelector('html');
    const preload = document.querySelector('.preloader');
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
        preload.style.opacity= 0;
        body.style.overflow = "auto";
        setInterval(function() {
            preload.style.display = "none";
        },2000)
    }, 4500)
});