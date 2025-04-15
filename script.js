// 🛒 Զամբյուղի տվյալները
let cart = [];
let total = 0;

// ➕ Ավելացնել ապրանք զամբյուղ
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

// 🔁 Թարմացնել զամբյուղի բովանդակությունը
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Ձեր զամբյուղը դատարկ է</div>';
    } else {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <span class="item-name">${item.name}</span>
                <span class="item-price">${item.price} դր</span>
            `;
            cartItems.appendChild(div);
        });
    }

    cartCount.textContent = cart.length;
    totalElement.textContent = `ընդհանուր: ${total} դր`;
}

// 🧺 Բացել զամբյուղի պատուհանը
document.getElementById('cart-btn')?.addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'flex';
});

// ❌ Փակել զամբյուղի պատուհանը
document.getElementById('close-cart')?.addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// 💳 Օրդեր ձևակերպում
document.getElementById('checkout-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Պատվերը հաջողությամբ ձևակերպված է։ Շնորհակալություն։');

    cart = [];
    total = 0;
    updateCart();
    document.getElementById('cart-modal').style.display = 'none';
});
document.getElementById('cart-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block'; // բացում է ֆոնը
});

document.getElementById('close-cart').addEventListener('click', closeCart);

// ⬇️ Ավելացնում ենք ֆունկցիա
document.getElementById('overlay').addEventListener('click', closeCart);

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none'; // փակում է ֆոնը
}
