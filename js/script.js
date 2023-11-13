/*====scroll==*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Corrected typo in offsetTop
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Use querySelector without square brackets and add double quotes for the attribute selector
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
  
    /*====Stricttly navbaer==*/
let header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY > 100);
 /*====remove toggle icone and nav bar when click nav bar links=*/
 let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navbarLinks = document.querySelectorAll('.navbar a');

// Function to close the navbar and remove "bx-exit" class
function closeNavbar() {
    navbar.style.display = 'none';
    menuIcon.classList.remove('bx-exit');
}

menuIcon.onclick = () => {
    if (navbar.style.display === 'block') {
        closeNavbar();
    } else {
        navbar.style.display = 'block';
        menuIcon.classList.add('bx-exit');
    }
};

// Add click event listeners to navbar links to close navbar
navbarLinks.forEach(link => {
    link.addEventListener('click', closeNavbar);
});

};
/*---scroll reveal--*/
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });
 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*---typed js--*/
const typed =new Typed('.multiple-text', {
    strings : ['Frontend Developer', 'Graphics Designer', 'Digital Marketer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
})
