let overlay = document.getElementById('overlay')
let hamburgerOverlay = document.getElementById('hamburgerOverlay')
let mobileMenuButton = document.getElementById('mobileMenuTrigger')
let mobileNav = document.getElementById('navBar')

let openMenuIcon = mobileMenuButton.querySelectorAll('i')[0]
let closeMenuIcon = mobileMenuButton.querySelectorAll('i')[1]

mobileMenuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('left-0');
closeMenuIcon.classList.toggle('scale-0')
openMenuIcon.classList.toggle('scale-0')
hamburgerOverlay.classList.toggle('hidden')
})

hamburgerOverlay.addEventListener('click', () => {
    mobileNav.classList.toggle('left-0')
    closeMenuIcon.classList.toggle('scale-0')
    openMenuIcon.classList.toggle('scale-0')
    hamburgerOverlay.classList.toggle('hidden')
})





// PROGRAMMES ABOUT MODAL

let programmesAboutModal = document.getElementById('programmesModal')

let programmesAboutMessage = document.getElementById('programmeAboutMessage')

let programmesHeading = document.getElementById('programmeHeading')

let aboutPhotograhButton = document.querySelectorAll('#programmes button')[0]

let aboutCampButton = document.querySelectorAll('#programmes button')[1]

let aboutSpellingButton = document.querySelectorAll('#programmes button')[2]

// LISTENERS

aboutPhotograhButton.addEventListener('click', () => {
    programmesAboutModal.classList.toggle('scale-150')
    programmesHeading.innerHTML = 'PHOTOGRAPH WORKSHOP'
    programmesAboutMessage.innerText = "This is organized by the State officials in other to get good photographs of the Boys' for remebrance purposes"
    overlay.classList.toggle('hidden')
})

aboutCampButton.addEventListener('click', () => {
    programmesAboutModal.classList.toggle('scale-150')
    programmesHeading.innerHTML = 'CAMP'
    programmesAboutMessage.innerText = 'Every year we organize a state training camp for the members of the Boys Brigade to expose them mentally, spiritually, socially and physically'
    overlay.classList.toggle('hidden')
})

aboutSpellingButton.addEventListener('click', () => {
    programmesAboutModal.classList.toggle('scale-150')
    programmesHeading.innerHTML = 'SPELLING COMPETITION'
    programmesAboutMessage.innerText = "The Brigade really focus on the Boys so we organize spellings competitions for all the sections in the Brigade "
    overlay.classList.toggle('hidden')
})

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden')
   programmesAboutModal.classList.toggle('scale-150')
})

// PROGRAMME CARDS SLIDE IN EFFECT

// Function to observe when the elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'in-view' class to trigger animation
            entry.target.classList.add('in-view');
        } else {
            // Remove the 'in-view' class when the element is out of view
            entry.target.classList.remove('in-view');
        }
    });
}, {
    threshold: 0.5, // Trigger when 50% of the element is in view
    rootMargin: '0px 0px -20px 0px', // Trigger when the element is about to enter the viewport
});

// Target each programme-card element for the scroll animation
const leftCard = document.querySelector('.left-card');
const bottomCard = document.querySelector('.bottom-card');
const rightCard = document.querySelector('.right-card');

// Observe the cards for when they enter the viewport
observer.observe(leftCard);
observer.observe(bottomCard);
observer.observe(rightCard);

