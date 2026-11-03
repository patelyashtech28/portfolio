// Sample Clothing Catalog Dataset
const clothingProducts = [
    {
        id: 1,
        title: "Oversized Minimalist Hoodie",
        category: "men",
        price: 65.00,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop",
        description: "Premium heavy-weight organic cotton fleece with dropped shoulders for a relaxed luxury silhouette."
    },
    {
        id: 2,
        title: "Vintage Denim Jacket",
        category: "men",
        price: 89.00,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
        description: "Classic washed denim jacket with branded silver hardware and interior utility pockets."
    },
    {
        id: 3,
        title: "Ribbed Knit Sweater",
        category: "women",
        price: 54.00,
        image: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?q=80&w=600&auto=format&fit=crop",
        description: "Soft wool blend knit features a high turtleneck and cozy wide sleeves."
    },
    {
        id: 4,
        title: "Tailored Linen Blazer",
        category: "women",
        price: 110.00,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
        description: "Breathable natural linen blazer featuring structure shoulders and double-breasted buttons."
    },
    {
        id: 5,
        title: "Urban Minimalist Sneakers",
        category: "footwear",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
        description: "Handcrafted genuine leather low-top sneakers with ergonomic cushioned insoles."
    },
    {
        id: 6,
        title: "Leather Crossbody Bag",
        category: "accessories",
        price: 75.00,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop",
        description: "Compact full-grain leather shoulder bag with adjustable strap and interior card slots."
    }
];

let cart = JSON.parse(localStorage.getItem('aura_cart')) || [];
let selectedSize = 'M';

// DOM Elements
const productGrid = document.getElementById('product-grid');
const categoryFilters = document.getElementById('category-filters');
const searchInput = document.getElementById('search-input');
const cartBtn = document.getElementById('cart-btn');
const cartDrawer = document.getElementById('cart-drawer');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const checkoutBtn = document.getElementById('checkout-btn');

const productModal = document.getElementById('product-modal');
const closeModal = document.getElementById('close-modal');
const modalBody = document.getElementById('modal-body');

// Initialize Store
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(clothingProducts);
    updateCartUI();
});

// Render Clothing Cards
function renderProducts(items) {
    productGrid.innerHTML = '';
    if (items.length === 0) {
        productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #6b7280; margin: 40px 0;">No apparel matches your search.</p>`;
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('clothing-card');
        card.innerHTML = `
            <div class="card-img-container" onclick="openQuickView(${product.id})">
                <span class="category-badge">${product.category}</span>
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="card-info">
                <h3 class="card-title">${product.title}</h3>
                <div class="card-price">$${product.price.toFixed(2)}</div>
                <button class="add-btn" onclick="addToCart(${product.id}, 'M')">Add to Bag</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Category & Live Search Filter Logic
function filterCatalog() {
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    const query = searchInput.value.toLowerCase().trim();

    let filtered = clothingProducts;

    if (activeCategory !== 'all') {
        filtered = filtered.filter(item => item.category === activeCategory);
    }

    if (query) {
        filtered = filtered.filter(item => item.title.toLowerCase().includes(query));
    }

    renderProducts(filtered);
}

categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        filterCatalog();
    }
});

searchInput.addEventListener('input', filterCatalog);

// Cart Operations & LocalStorage Persistence
function addToCart(productId, size = 'M') {
    const product = clothingProducts.find(p => p.id === productId);
    const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, size, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    openCartDrawer();
}

function updateQuantity(productId, size, change) {
    const itemIndex = cart.findIndex(item => item.id === productId && item.size === size);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('aura_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align: center; color: #9ca3af; margin-top: 50px;">Your shopping bag is empty.</p>`;
        cartTotalPrice.textContent = '$0.00';
        return;
    }

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-meta">Size: ${item.size}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <div class="qty-btn-group">
                    <button onclick="updateQuantity(${item.id}, '${item.size}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, '${item.size}', 1)">+</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotalPrice.textContent = `$${subtotal.toFixed(2)}`;
}

// Drawer Visibility Handlers
function openCartDrawer() {
    cartDrawer.classList.add('open');
    overlay.classList.add('active');
}

function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    productModal.classList.remove('active');
    overlay.classList.remove('active');
}

cartBtn.addEventListener('click', openCartDrawer);
closeCart.addEventListener('click', closeCartDrawer);
overlay.addEventListener('click', closeCartDrawer);

// Quick-View Product Modal
function openQuickView(productId) {
    const product = clothingProducts.find(p => p.id === productId);
    if (!product) return;

    selectedSize = 'M'; // Default size

    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div style="flex: 1;">
            <h2 style="font-size: 1.4rem; font-weight: 800;">${product.title}</h2>
            <div style="font-size: 1.3rem; font-weight: 800; color: #6366f1; margin: 8px 0;">$${product.price.toFixed(2)}</div>
            <p style="color: #4b5563; font-size: 0.9rem; line-height: 1.5;">${product.description}</p>
            
            <div style="margin-top: 15px;">
                <label style="font-size: 0.85rem; font-weight: 700;">SELECT SIZE:</label>
                <div class="size-selector">
                    <button class="size-btn" onclick="selectSize(this, 'S')">S</button>
                    <button class="size-btn selected" onclick="selectSize(this, 'M')">M</button>
                    <button class="size-btn" onclick="selectSize(this, 'L')">L</button>
                    <button class="size-btn" onclick="selectSize(this, 'XL')">XL</button>
                </div>
            </div>

            <button class="add-btn" style="width: 100%; margin-top: 15px;" onclick="addToCart(${product.id}, selectedSize); closeCartDrawer();">
                Add to Shopping Bag
            </button>
        </div>
    `;

    productModal.classList.add('active');
    overlay.classList.add('active');
}

function selectSize(element, size) {
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    selectedSize = size;
}

closeModal.addEventListener('click', closeCartDrawer);

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    alert('Thank you for your order! Your fashion delivery is on the way.');
    cart = [];
    saveCart();
    updateCartUI();
    closeCartDrawer();
});