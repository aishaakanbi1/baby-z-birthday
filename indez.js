document.addEventListener('DOMContentLoaded', () => {
    const celebrationContainer = document.getElementById('celebration-container');
    const birthdayMessage = document.getElementById('birthday-message');
    const gallery = document.getElementById('gallery');
    const reasons = document.getElementById('reasons');

    // Start the celebration animation
    startCelebration();

    // Show the birthday message after 5 seconds
    setTimeout(() => {
        celebrationContainer.style.display = 'none';
        birthdayMessage.classList.remove('hidden');
    }, 5000);

    // Show the gallery after 8 seconds
    setTimeout(() => {
        gallery.classList.remove('hidden');
    }, 8000);

    // Show the reasons after 12 seconds
    setTimeout(() => {
        reasons.classList.remove('hidden');
    }, 12000);
});

function startCelebration() {
    const flowersContainer = document.getElementById('flowers-container');
    const confettiContainer = document.getElementById('confetti-container');

    for (let i = 0; i < 100; i++) {
        createFlower(flowersContainer);
        createConfetti(confettiContainer);
    }
}

function createFlower(container) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.top = Math.random() * 100 + 'vh';
    container.appendChild(flower);
}

function createConfetti(container) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = Math.random() * 100 + 'vh';
    container.appendChild(confetti);
}
