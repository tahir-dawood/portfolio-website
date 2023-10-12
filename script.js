

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                });
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            }
        });

        let header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('sticky', window.scrollY > 100);

            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    };
});

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 1000,
    delay: 10
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.img,.services-container,.portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img, .home-content h1 ', { origin: 'left' });
ScrollReveal().reveal('.about-content, .home-content p ', { origin: 'right' });

var typed = new Typed('.multiple-text', {
    strings: ['Mechanical Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});