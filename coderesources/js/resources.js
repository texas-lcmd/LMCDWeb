document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentItems = document.querySelectorAll('.content-item');

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(item => item.classList.remove('active'));

            // Hide all content items
            contentItems.forEach(item => item.style.display = 'none');

            // Add active class to the clicked menu item
            this.classList.add('active');

            // Show the corresponding content item
            const contentId = this.dataset.content;
            document.getElementById(contentId).style.display = 'block';
        });
    });
});