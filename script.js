document.addEventListener('DOMContentLoaded', () => {
    createConfetti();
});

function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff5252', '#ffeb3b', '#2196f3', '#4caf50', '#9c27b0', '#ff9800'];
    
    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.animationDuration = Math.random() * 5 + 5 + 's';
        
        // Random confetti shape
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        } else if (Math.random() > 0.5) {
            confetti.style.width = '7px';
            confetti.style.height = '15px';
        } else {
            confetti.style.width = '15px';
            confetti.style.height = '7px';
        }
        
        // Add animation
        confetti.style.animation = `
            fall ${Math.random() * 5 + 5}s linear infinite, 
            sway ${Math.random() * 5 + 3}s ease-in-out infinite alternate
        `;
        
        confettiContainer.appendChild(confetti);
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            0% {
                transform: translateY(-100px);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh);
                opacity: 0;
            }
        }
        @keyframes sway {
            0% {
                transform: translateX(-10px) rotate(0deg);
            }
            100% {
                transform: translateX(10px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
} 