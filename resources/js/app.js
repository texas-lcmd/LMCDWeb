document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu');
    const navbarLinks = document.querySelectorAll('.navbar__links');
    const currentPath = window.location.pathname;
  
    // Set active state for current page
    navbarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
  
    // Mobile menu toggle
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
  
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !navbarMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
            navbarMenu.classList.remove('active');
        }
    });
  
    // Close mobile menu when clicking a link
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
  });
  