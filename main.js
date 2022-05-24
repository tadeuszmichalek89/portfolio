// Hamburger start
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

// Hamburger end


// typing effect start


const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Web Developer - Freelancer';

// Parametry
let indexText = 0;
const time = 90;

// Implementation add letter
const addLetter = () => {
 spnText.textContent += txt[indexText];
 indexText++;
 if (indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);

