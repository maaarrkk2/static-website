function updateClock() {
    const clockElement = document.getElementById('liveClock');
    const now = new Date();
    clockElement.innerText = now.toLocaleTimeString('en-US', { hour12: true });
}
setInterval(updateClock, 1000);
updateClock();

// Countdown
function updateCountdown() {
    const countdownElement = document.getElementById('countdownTimer');
    const targetDate = new Date('January 1, 2027 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownElement.innerText = "Deployment Active";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Theme Toggle
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerText = "Enable Light Mode";
    } else {
        themeToggleBtn.innerText = "Enable Dark Mode";
    }
});
