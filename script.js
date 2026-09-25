//Live Local Time (Clock)
function updateClock() {
    const clockElement = document.getElementById('liveClock');
    const now = new Date();
    clockElement.innerText = now.toLocaleTimeString('en-US', { hour12: true });
}
setInterval(updateClock, 1000);
updateClock();

//Bake Sale Countdown
function updateCountdown() {
    const countdownElement = document.getElementById('countdownTimer');
    const targetDate = new Date('December 31, 2026 08:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownElement.innerText = "Sale is Live!";
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

// Night Mode Toggle
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerText = "Day Mode";
    } else {
        themeToggleBtn.innerText = "Night Mode";
    }
});

// Shopping Cart
let cart = [];
const cartContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const clearCartBtn = document.getElementById('clearCartBtn');

if (localStorage.getItem('bakeryCart')) {
    cart = JSON.parse(localStorage.getItem('bakeryCart'));
    renderCart();
}

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const itemPrice = parseInt(this.getAttribute('data-price'));
        
        cart.push({ name: itemName, price: itemPrice });
        localStorage.setItem('bakeryCart', JSON.stringify(cart));
        renderCart();
        
        //feedback
        const originalText = this.innerText;
        this.innerText = "Added!";
        this.style.backgroundColor = "#4caf50";
        setTimeout(() => {
            this.innerText = originalText;
            this.style.backgroundColor = "";
        }, 1000);
    });
});

clearCartBtn.addEventListener('click', function() {
    cart = [];
    localStorage.removeItem('bakeryCart');
    renderCart();
});

function renderCart() {
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        cartTotalElement.innerText = "0";
        return;
    }

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `<span>${item.name}</span> <span>₱${item.price}</span>`;
        cartContainer.appendChild(itemDiv);
        total += item.price;
    });

    cartTotalElement.innerText = total;
}
