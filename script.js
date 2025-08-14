let mobileMenuButton = document.getElementById('mobileMenuTrigger')
let mobileNav = document.getElementById('navBar')

mobileMenuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('left-0');
})



// PROGRAMMES ABOUT MODAL

let programmesAboutModal = document.getElementById('programmesModal')

let programmesAboutMessage = document.getElementById('programmeAboutMessage')

let programmesHeading = document.getElementById('programmeHeading')

let aboutPhotograhButton = document.querySelectorAll('#programmes button')[0]

let aboutCampButton = document.querySelectorAll('#programmes button')[1]

let aboutSpellingButton = document.querySelectorAll('#programmes button')[2]

// LISTENERS

let overlay = document.getElementById('overlay')

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

