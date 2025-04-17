// 
document.addEventListener('DOMContentLoaded', () => {
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
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const overlay = document.getElementById('overlay');
    const closeCartBtn = document.getElementById('close-cart');
    const checkoutForm = document.getElementById('checkout-form');

    cartBtn?.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        overlay.style.display = 'block';
    });

    // ❌ Փակել զամբյուղի պատուհանը
    function closeCart() {
        cartModal.style.display = 'none';
        overlay.style.display = 'none';
    }

    closeCartBtn?.addEventListener('click', closeCart);
    overlay?.addEventListener('click', closeCart);

    // 💳 Օրդեր ձևակերպում
    checkoutForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ Պատվերը հաջողությամբ ձևակերպված է։ Շնորհակալություն։');

        cart = [];
        total = 0;
        updateCart();
        closeCart();
    });

    // Արտահանում ենք addToCart-ը գլոբալ օգտագործման համար
    window.addToCart = addToCart;
});
