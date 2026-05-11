document.addEventListener('DOMContentLoaded', () => {

    // SCROLL REVEAL LOGIC
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });

    // HEADER SCROLL EFFECT
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '1rem 5%';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        } else {
            header.style.padding = '1.5rem 5%';
            header.style.boxShadow = 'none';
        }
    });

    // MOBILE MENU TOGGLE
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuToggle = document.getElementById('menu-toggle');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
        });
    });

});