document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(9, 13, 22, 0.85)';
            header.style.padding = '1rem 5%';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(9, 13, 22, 0.75)';
            header.style.padding = '1.2rem 5%';
            header.style.boxShadow = 'none';
        }
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    const menuToggle = document.getElementById('menu-toggle');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(menuToggle.checked) menuToggle.checked = false;
        });
    });

    const modal = document.getElementById('project-modal');
    const btnOpen = document.getElementById('open-modal');
    const btnClose = document.querySelector('.close-modal');

    if (btnOpen && modal) {
        btnOpen.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    if (btnClose && modal) {
        btnClose.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

});
