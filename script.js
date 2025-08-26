document.addEventListener('DOMContentLoaded', function() {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navLinks = document.querySelector('.nav-links');

    menuHamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Opcional: Fechar o menu ao clicar em um link (útil em one-page sites)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});