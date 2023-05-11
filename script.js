// script.js
window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const navLinks = document.querySelectorAll('nav ul li a');

    timelineItems.forEach(function(item, index) {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            navLinks[index].classList.add('active');
        }
    });
});

document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // prevent the default action

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - (window.innerHeight / 2),
            behavior: 'instant' // change this to 'instant'
        });

        // Close the navigation menu after clicking a link
        document.getElementById('nav-toggle').parentElement.classList.remove('active');
    });
});

document.getElementById('nav-toggle').addEventListener('click', function() {
    this.parentElement.classList.toggle('active');
});