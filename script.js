
const letterContent = document.getElementById('letterContent');
const revealButton = document.getElementById('revealButton');
const signature = document.querySelector('.signature');
const heartsContainer = document.getElementById('hearts');
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicIcon = musicToggle.querySelector('i');

const love_messages = [
    "From the moment I first saw you, my world changed forever.",
    "Your smile lights up my darkest days, and your love is my greatest treasure.",
    "Every moment with you feels like a beautiful dream I never want to wake from.",
    "You are not just my wife, but my best friend, my soulmate, and my everything.",
    "Your love gives me strength, your kindness inspires me, and your heart completes mine."
];

function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heartsContainer.appendChild(heart);
    }
}

  // Touch/Click Effect
  function createTouchEffect(e) {
    const touchEffect = document.createElement('div');
    touchEffect.classList.add('touch-effect');
    touchEffect.style.left = `${e.clientX}px`;
    touchEffect.style.top = `${e.clientY}px`;
    document.body.appendChild(touchEffect);

    // Remove the effect after animation
    touchEffect.addEventListener('animationend', () => {
        touchEffect.remove();
    });
}

// Shake effect for elements
function shakeElement(element) {
    element.classList.add('animate__animated', 'animate__headShake');
    element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', 'animate__headShake');
    }, { once: true });
}

// Global touch/click event listener
document.addEventListener('click', (e) => {
    // Create touch ripple effect
    createTouchEffect(e);

    // Random element shake on click
    const shakableElements = [
        loveLetter.querySelector('h1'), 
        revealButton, 
        musicToggle
    ];
    const randomElement = shakableElements[Math.floor(Math.random() * shakableElements.length)];
    
    if (randomElement) {
        shakeElement(randomElement);
    }
});

revealButton.addEventListener('click', () => {
    letterContent.innerHTML = love_messages.map(msg => `<p class="animate__animated animate__fadeIn">${msg}</p>`).join('');
    letterContent.style.display = 'block';
    signature.textContent = 'Forever Yours - Anubhav';
    signature.classList.add('animate__animated', 'animate__fadeIn');
    revealButton.style.display = 'none';
});

// Music Toggle Functionality
musicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
        musicToggle.innerHTML = `<i class="fas fa-pause"></i> Pause Song`;
    } else {
        backgroundMusic.pause();
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
        musicToggle.innerHTML = `<i class="fas fa-play"></i> Play Song`;
    }
});

createHearts();
