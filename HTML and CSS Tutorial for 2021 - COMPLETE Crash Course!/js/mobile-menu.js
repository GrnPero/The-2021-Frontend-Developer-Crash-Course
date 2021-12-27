/*
 * Author: Rodrigo Alvarez
 * Date: 12/27/2021
 * File: mobile-menu.js
 * Purpose: To show the Mobile Menu with a slide animation
 */

// Grabs the needed DOM elements
const mobileBtn = document.getElementById('mobile-cta')
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById('mobile-exit');

// Adds an event listener when the Hamburger Menu is clicked
mobileBtn.addEventListener('click', () => { 
    // Added sliding from the left animation using the Web Animations API
    nav.animate([
        { transform: 'translateX(66%)' },
        { transform: 'translateX(0%)' }
    ], {
        duration: 150,
        iterations: 1
    });

    // Display the mobile menu
    nav.classList.add('menu-btn');
});

// When the 'X' is clicked remove menu
mobileBtnExit.addEventListener('click', () => {
    // Adds slide to the right animation to close the mobile menu
    nav.animate([
        { transform: 'translateX(0%)' },
        { transform: 'translateX(100%)' }
    ], {
        duration: 160, // Animation is slightly longer to hide 'X' button
        iterations: 1
    });

    // Closes the mobile menu, added delay so animation can show
    setTimeout(() => {
        nav.classList.remove('menu-btn');
    }, 150);
})