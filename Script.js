// Toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Scroll section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Active sections for animation on scroll
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 300);

    // Remove toggle icon and navbar when clicked navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
}

// Get the theme switch element (toggle icon)
const themeSwitch = document.getElementById('themeSwitch');

// Check if the user has a previously saved theme preference in localStorage
const currentTheme = localStorage.getItem('theme');

// If a saved theme is found, apply it
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeSwitch.classList.replace('bx-toggle-left', 'bx-toggle-right');
    }
}

// Event listener for theme toggle
themeSwitch.addEventListener('click', () => {
    // Toggle between dark and light modes
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Change the icon based on the current theme
    if (document.body.classList.contains('dark-mode')) {
        themeSwitch.classList.replace('bx-toggle-left', 'bx-toggle-right');
        // Save the dark theme preference in localStorage
        localStorage.setItem('theme', 'dark-mode');
    } else {
        themeSwitch.classList.replace('bx-toggle-right', 'bx-toggle-left');
        // Save the light theme preference in localStorage
        localStorage.setItem('theme', 'light-mode');
    }
});

