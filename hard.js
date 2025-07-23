// hard.js

// Function to toggle the mobile navigation menu
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show"); // Add/remove 'show' class to control visibility via CSS
}

// Get the contact button
const contactBtn = document.querySelector('.contact');

// Add click event listener to the contact button to toggle 'clicked' class
if (contactBtn) { // Check if the button exists before adding listener
    contactBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from propagating to document and immediately closing the dropdown
        contactBtn.classList.toggle('clicked');
    });
}


// Close contact dropdown if a click occurs outside of the contact container
document.addEventListener('click', (event) => {
    const contactContainer = document.querySelector('.contact-container');
    // Check if contactContainer exists and if the click was outside of it
    if (contactContainer && !contactContainer.contains(event.target)) {
        // If the contact button has the 'clicked' class, remove it
        if (contactBtn && contactBtn.classList.contains('clicked')) {
            contactBtn.classList.remove('clicked');
        }
    }
});


// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href'); // Get the href attribute (e.g., "#projects")
        const targetSection = document.querySelector(targetId); // Find the corresponding section element

        if (targetSection) { // If the target section exists
            // Close mobile menu if it's open
            var menu = document.getElementById("menu");
            if (menu && menu.classList.contains("show")) {
                menu.classList.remove("show");
            }

            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});