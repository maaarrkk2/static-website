// 1. Live Time Counter
function updateClock() {
    const clockElement = document.getElementById('liveClock');
    const now = new Date();
    clockElement.innerText = "Current Time: " + now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// 2. Countdown Timer
function updateCountdown() {
    const countdownElement = document.getElementById('countdownTimer');
    const targetDate = new Date('January 1, 2027 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownElement.innerText = "Event Started!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerText = `${days} Days | ${hours} Hours | ${minutes} Minutes | ${seconds} Seconds`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 3. Interactive Button (Dark Mode Toggle)
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerText = "Toggle Light Mode";
    } else {
        themeToggleBtn.innerText = "Toggle Dark Mode";
    }
});
