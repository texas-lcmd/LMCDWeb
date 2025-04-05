document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.gallery');
    const prevButton = document.querySelector('.gallery-nav.prev');
    const nextButton = document.querySelector('.gallery-nav.next');
    const pageDots = document.querySelectorAll('.page-dot');
    let currentPage = 1;
    const totalPages = galleries.length;

    // Initialize navigation state
    updateNavigation();

    // Handle next button click
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            changePage(currentPage + 1);
        }
    });

    // Handle previous button click
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            changePage(currentPage - 1);
        }
    });

    // Handle page dot clicks
    pageDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const page = parseInt(dot.dataset.page);
            changePage(page);
        });
    });

    function changePage(newPage) {
        // Remove active class from current gallery and dot
        document.querySelector(`.gallery[data-page="${currentPage}"]`).classList.remove('active');
        document.querySelector(`.page-dot[data-page="${currentPage}"]`).classList.remove('active');

        // Add active class to new gallery and dot
        document.querySelector(`.gallery[data-page="${newPage}"]`).classList.add('active');
        document.querySelector(`.page-dot[data-page="${newPage}"]`).classList.add('active');

        // Update current page
        currentPage = newPage;
        updateNavigation();
    }

    function updateNavigation() {
        // Update button states
        prevButton.style.opacity = currentPage === 1 ? '0.5' : '1';
        prevButton.style.pointerEvents = currentPage === 1 ? 'none' : 'auto';
        
        nextButton.style.opacity = currentPage === totalPages ? '0.5' : '1';
        nextButton.style.pointerEvents = currentPage === totalPages ? 'none' : 'auto';
    }
}); 