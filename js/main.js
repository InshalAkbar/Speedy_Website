// ============================================================
// 1. PRODUCT DATA (30 Products with Images)
// ============================================================
const products = [
    // ===== MEN'S PRODUCTS (12) =====
    { id: 1, name: 'Speedster Pro X', category: 'men', type: 'Sports', price: 8999, oldPrice: 12999, rating: 4.8, reviews: 142, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', badge: 'new', inStock: true, sizes: [7,8,9,10,11], colors: ['#FF3D00','#111','#fff'] },
    { id: 2, name: 'Aero Glide Elite', category: 'men', type: 'Sports', price: 11999, oldPrice: 15999, rating: 4.9, reviews: 89, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400', badge: 'sale', inStock: true, sizes: [8,9,10], colors: ['#00B0FF','#111','#fff'] },
    { id: 3, name: 'Hyper Dunk Low', category: 'men', type: 'Sports', price: 6999, oldPrice: null, rating: 4.3, reviews: 56, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400', badge: null, inStock: true, sizes: [8,9,10,11,12], colors: ['#111','#fff','#2ecc71'] },
    { id: 4, name: 'City Rider Mid', category: 'men', type: 'Regular', price: 6499, oldPrice: null, rating: 4.4, reviews: 95, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400', badge: 'new', inStock: true, sizes: [7,8,9,10], colors: ['#fff','#111','#3498db'] },
    { id: 5, name: 'Court Vision Elite', category: 'men', type: 'Regular', price: 8499, oldPrice: 10999, rating: 4.5, reviews: 112, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badge: null, inStock: true, sizes: [7,8,9,10], colors: ['#fff','#111','#e74c3c'] },
    { id: 6, name: 'Retro Runner 85', category: 'men', type: 'Regular', price: 5499, oldPrice: null, rating: 4.2, reviews: 67, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400', badge: null, inStock: true, sizes: [7,8,9,10], colors: ['#fff','#111','#f1c40f'] },
    
    // ✅ FIXED IMAGES (Slides & Sandals)
    { id: 7, name: 'Comfort Slide Pro', category: 'men', type: 'Slippers', price: 2499, oldPrice: null, rating: 4.1, reviews: 43, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badge: null, inStock: true, sizes: [8,9,10,11], colors: ['#111','#fff','#FF3D00'] },
    { id: 8, name: 'Cloud Foam Slides', category: 'men', type: 'Slippers', price: 2999, oldPrice: 3999, rating: 4.3, reviews: 78, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400', badge: 'sale', inStock: true, sizes: [7,8,9,10], colors: ['#fff','#111','#00B0FF'] },
    { id: 9, name: 'Adventure Sandals', category: 'men', type: 'Sandals', price: 3999, oldPrice: 4999, rating: 4.2, reviews: 56, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400', badge: null, inStock: true, sizes: [8,9,10,11], colors: ['#111','#fff','#2ecc71'] },
    { id: 10, name: 'Trail Sandals Pro', category: 'men', type: 'Sandals', price: 4499, oldPrice: null, rating: 4.0, reviews: 34, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', badge: 'new', inStock: true, sizes: [7,8,9,10], colors: ['#fff','#111','#f39c12'] },
    // ✅ FIXED END

    { id: 11, name: 'Mercial Force', category: 'men', type: 'Sports', price: 15999, oldPrice: 19999, rating: 4.8, reviews: 156, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400', badge: 'sale', inStock: true, sizes: [9,10,11,12], colors: ['#111','#FF3D00','#fff'] },
    { id: 12, name: 'Storm Surge Pro', category: 'men', type: 'Sports', price: 9499, oldPrice: 11999, rating: 4.6, reviews: 134, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', badge: 'new', inStock: true, sizes: [7,8,9,10,11], colors: ['#00B0FF','#111','#fff'] },

    // ===== WOMEN'S PRODUCTS (12) =====
    { id: 13, name: 'Stiletto Glide', category: 'women', type: 'Heels', price: 5999, oldPrice: 7999, rating: 4.6, reviews: 89, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400', badge: 'new', inStock: true, sizes: [5,6,7,8], colors: ['#FF3D00','#111','#fff'] },
    { id: 14, name: 'Block Heel Elite', category: 'women', type: 'Heels', price: 4999, oldPrice: null, rating: 4.4, reviews: 67, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400', badge: null, inStock: true, sizes: [5,6,7,8,9], colors: ['#fff','#111','#f5a623'] },
    { id: 15, name: 'Aero Glide Wmn', category: 'women', type: 'Shoes', price: 10999, oldPrice: 14999, rating: 4.8, reviews: 176, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', badge: 'sale', inStock: true, sizes: [5,6,7,8,9], colors: ['#FF3D00','#fff','#111'] },
    { id: 16, name: 'Zen Flow Woven', category: 'women', type: 'Shoes', price: 8999, oldPrice: 10999, rating: 4.7, reviews: 134, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400', badge: null, inStock: true, sizes: [5,6,7,8], colors: ['#f1c40f','#111','#fff'] },
    { id: 17, name: 'City Rider Low', category: 'women', type: 'Shoes', price: 6999, oldPrice: null, rating: 4.5, reviews: 89, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400', badge: 'new', inStock: true, sizes: [6,7,8,9], colors: ['#fff','#111','#e74c3c'] },
    { id: 18, name: 'Speed Glide Elite', category: 'women', type: 'Shoes', price: 13999, oldPrice: 17999, rating: 4.9, reviews: 212, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400', badge: 'sale', inStock: true, sizes: [6,7,8], colors: ['#00B0FF','#111','#fff'] },
    { id: 19, name: 'Comfort Slide Wmn', category: 'women', type: 'Slippers', price: 2499, oldPrice: null, rating: 4.2, reviews: 56, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badge: null, inStock: true, sizes: [5,6,7,8], colors: ['#fff','#111','#FF3D00'] },
    { id: 20, name: 'Cloud Foam Wmn', category: 'women', type: 'Slippers', price: 2799, oldPrice: 3499, rating: 4.3, reviews: 67, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400', badge: 'sale', inStock: true, sizes: [5,6,7,8,9], colors: ['#111','#fff','#00B0FF'] },
    { id: 21, name: 'Summer Sandals', category: 'women', type: 'Sandals', price: 3499, oldPrice: 4499, rating: 4.3, reviews: 78, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400', badge: null, inStock: true, sizes: [5,6,7,8], colors: ['#f1c40f','#fff','#111'] },
    { id: 22, name: 'Gladiator Sandals', category: 'women', type: 'Sandals', price: 3999, oldPrice: null, rating: 4.1, reviews: 45, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', badge: 'new', inStock: true, sizes: [6,7,8,9], colors: ['#fff','#111','#e74c3c'] },
    { id: 23, name: 'Retro Glide 90', category: 'women', type: 'Shoes', price: 5999, oldPrice: null, rating: 4.3, reviews: 54, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400', badge: null, inStock: true, sizes: [6,7,8,9,10], colors: ['#fff','#111','#f1c40f'] },
    { id: 24, name: 'Mercial Glide Wmn', category: 'women', type: 'Shoes', price: 12999, oldPrice: 16999, rating: 4.9, reviews: 245, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400', badge: 'sale', inStock: true, sizes: [6,7,8,9], colors: ['#fff','#111','#f5a623'] },

    // ===== SPORTS CATEGORY (6) =====
    { id: 25, name: 'Pro Football Boots', category: 'sports', type: 'Football', price: 14999, oldPrice: 18999, rating: 4.8, reviews: 167, image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=400', badge: 'sale', inStock: true, sizes: [8,9,10,11], colors: ['#FF3D00','#111','#fff'] },
    { id: 26, name: 'Basketball Elite', category: 'sports', type: 'Basketball', price: 12999, oldPrice: 15999, rating: 4.7, reviews: 134, image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400', badge: null, inStock: true, sizes: [9,10,11,12], colors: ['#00B0FF','#111','#fff'] },
    { id: 27, name: 'Tennis Court Pro', category: 'sports', type: 'Tennis', price: 9999, oldPrice: 12999, rating: 4.6, reviews: 89, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', badge: 'new', inStock: true, sizes: [7,8,9,10], colors: ['#fff','#111','#2ecc71'] },
    { id: 28, name: 'Running Sprint Elite', category: 'sports', type: 'Running', price: 11999, oldPrice: 14999, rating: 4.9, reviews: 203, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400', badge: 'sale', inStock: true, sizes: [8,9,10,11], colors: ['#FF3D00','#111','#00B0FF'] },
    { id: 29, name: 'Training Gym Pro', category: 'sports', type: 'Training', price: 7999, oldPrice: 9999, rating: 4.4, reviews: 112, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400', badge: null, inStock: true, sizes: [8,9,10,11,12], colors: ['#111','#fff','#f39c12'] },
    { id: 30, name: 'Cricket Spike Elite', category: 'sports', type: 'Cricket', price: 10999, oldPrice: 13999, rating: 4.5, reviews: 78, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', badge: 'new', inStock: true, sizes: [7,8,9,10], colors: ['#fff','#111','#e74c3c'] }
];
// ============================================================
// 2. STATE
// ============================================================
let cart = JSON.parse(localStorage.getItem('speedyCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('speedyWishlist')) || [];
let productRatings = JSON.parse(localStorage.getItem('speedyRatings')) || {};
let currentProducts = [...products];
let visibleCount = 8;
const LOAD_INCREMENT = 8;
let quickViewModal = null;

// ============================================================
// 3. DOM REFS
// ============================================================
const productGrid = document.getElementById('productGrid');
const menGrid = document.getElementById('menGrid');
const womenGrid = document.getElementById('womenGrid');
const sportsGrid = document.getElementById('sportsGrid');
const newGrid = document.getElementById('newGrid');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const filterCategory = document.getElementById('filterCategory');
const sortProducts = document.getElementById('sortProducts');
const searchInput = document.getElementById('searchInput');
const searchBar = document.getElementById('searchBar');
const searchToggle = document.getElementById('searchToggle');
const searchClose = document.getElementById('searchClose');
const backToTop = document.getElementById('backToTop');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const wishlistSidebar = document.getElementById('wishlistSidebar');
const wishlistOverlay = document.getElementById('wishlistOverlay');
const cartBody = document.getElementById('cartBody');
const wishlistBody = document.getElementById('wishlistBody');
const cartTotal = document.getElementById('cartTotal');
const closeCart = document.getElementById('closeCart');
const closeWishlist = document.getElementById('closeWishlist');
const navLinks = document.querySelectorAll('.nav-link');
const shopNowBtn = document.getElementById('shopNowBtn');

// ============================================================
// 4. HELPERS
// ============================================================
function getRatingStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '★' : '') + '☆'.repeat(empty);
}

function showToast(message) {
    const container = document.querySelector('.toast-container') || (() => {
        const div = document.createElement('div');
        div.className = 'toast-container';
        document.body.appendChild(div);
        return div;
    })();

    const toast = document.createElement('div');
    toast.className = 'toast-custom';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ============================================================
// 5. RENDER PRODUCT CARD
// ============================================================
function renderProductCard(product) {
    const userRating = productRatings[product.id] || 0;
    const isLiked = wishlist.includes(product.id);
    const inCart = cart.find(item => item.id === product.id);
    const ratingStars = getRatingStars(product.rating);

    return `
    <div class="col-md-3 col-6">
        <div class="product-card" data-id="${product.id}" onclick="openQuickView(${product.id})">
            ${product.badge ? `<span class="badge ${product.badge === 'new' ? 'badge-new' : 'badge-sale-product'}">${product.badge === 'new' ? 'NEW' : 'SALE'}</span>` : ''}
            <button class="wishlist-btn ${isLiked ? 'liked' : ''}" onclick="event.stopPropagation();toggleWishlist(${product.id})">
                <i class="fas fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-img" />
            <span class="click-hint">👆 Click for details</span>
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-category">${product.type || product.category}</div>
                </div>
                <div class="rating">${ratingStars} <span style="font-size:0.7rem;color:#999;">(${product.reviews})</span></div>
            </div>
            
            <div class="mt-2">
                <span class="text-muted small">Your Rating:</span>
                <div class="star-rating" data-id="${product.id}" onclick="event.stopPropagation();">
                    ${[1,2,3,4,5].map(star => `
                        <i class="fas fa-star ${star <= userRating ? 'active' : ''}" data-star="${star}" onclick="event.stopPropagation();setRating(${product.id}, ${star})"></i>
                    `).join('')}
                </div>
            </div>

            <div class="mt-1">
                <span class="price">₹${product.price.toLocaleString()}</span>
                ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toLocaleString()}</span>` : ''}
                ${product.oldPrice ? `<span class="discount">${Math.round((1 - product.price / product.oldPrice) * 100)}% OFF</span>` : ''}
            </div>
            <div class="stock-badge">
                <i class="fas fa-circle" style="color:${product.inStock ? '#00C853' : '#e74c3c'};font-size:0.5rem;"></i> 
                ${product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>
            <button class="add-to-cart-btn" onclick="event.stopPropagation();addToCart(${product.id})" ${!product.inStock ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
                <i class="fas fa-shopping-bag me-2"></i> 
                ${inCart ? `In Cart (${inCart.quantity})` : (product.inStock ? 'Add to Cart' : 'Sold Out')}
            </button>
        </div>
    </div>
    `;
}

// ============================================================
// 6. RENDER PRODUCTS
// ============================================================
function renderProducts(productsArray, container, showLoadMore = true) {
    if (!container) return;
    
    const visibleProducts = productsArray.slice(0, visibleCount);
    const hasMore = productsArray.length > visibleCount;

    if (visibleProducts.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4>No products found 😕</h4>
                <p class="text-muted">Try adjusting your filters or search</p>
            </div>
        `;
        return;
    }

    let html = visibleProducts.map(p => renderProductCard(p)).join('');
    
    if (showLoadMore && hasMore) {
        html += `
            <div class="col-12">
                <div class="load-more-wrapper">
                    <button class="load-more-btn" id="loadMoreBtn" onclick="loadMoreProducts()">
                        <i class="fas fa-plus-circle me-2"></i> Load More Products (${productsArray.length - visibleCount} left)
                    </button>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

// ============================================================
// 7. RENDER ALL SECTIONS
// ============================================================
function renderAllSections() {
    renderProducts(currentProducts, productGrid, true);
    renderProducts(products.filter(p => p.category === 'men'), menGrid, false);
    renderProducts(products.filter(p => p.category === 'women'), womenGrid, false);
    renderProducts(products.filter(p => p.category === 'sports'), sportsGrid, false);
    renderProducts(products.filter(p => p.badge === 'new'), newGrid, false);
}

// ============================================================
// 8. LOAD MORE
// ============================================================
function loadMoreProducts() {
    const totalProducts = currentProducts.length;
    const remaining = totalProducts - visibleCount;
    const addCount = Math.min(LOAD_INCREMENT, remaining);
    
    if (addCount <= 0) return;
    
    visibleCount += addCount;
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = '<span class="spinner"></span> Loading...';
        loadMoreBtn.disabled = true;
    }
    
    setTimeout(() => {
        renderProducts(currentProducts, productGrid, true);
        showToast(`Loaded ${addCount} more products! 🚀`);
        
        const newBtn = document.getElementById('loadMoreBtn');
        if (newBtn) {
            if (visibleCount >= totalProducts) {
                newBtn.innerHTML = '🎉 All Products Loaded';
                newBtn.disabled = true;
            } else {
                newBtn.innerHTML = `<i class="fas fa-plus-circle me-2"></i> Load More Products (${totalProducts - visibleCount} left)`;
                newBtn.disabled = false;
            }
        }
    }, 500);
}

// ============================================================
// 9. RATING
// ============================================================
function setRating(productId, stars) {
    productRatings[productId] = stars;
    localStorage.setItem('speedyRatings', JSON.stringify(productRatings));
    showToast(`⭐ Rated ${stars} stars!`);
    renderAllSections();
}

// ============================================================
// 10. FILTERS
// ============================================================
function applyFilters() {
    let filtered = [...products];

    if (searchInput && searchInput.value.trim()) {
        const query = searchInput.value.toLowerCase().trim();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query) ||
            (p.type && p.type.toLowerCase().includes(query))
        );
    }

    if (filterCategory && filterCategory.value !== 'all') {
        filtered = filtered.filter(p => p.category === filterCategory.value);
    }

    if (sortProducts) {
        const sort = sortProducts.value;
        if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
        else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
        else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
        else if (sort === 'newest') filtered.sort((a, b) => b.id - a.id);
    }

    currentProducts = filtered;
    visibleCount = 8;
    renderProducts(filtered, productGrid, true);
}

function filterByCategory(category) {
    if (filterCategory) filterCategory.value = category;
    visibleCount = 8;
    applyFilters();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// 11. CART
// ============================================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    renderCartSidebar();
    renderAllSections();
    showToast(`${product.name} added to cart! 🛒`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartSidebar();
    renderAllSections();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    saveCart();
    updateCartCount();
    renderCartSidebar();
    renderAllSections();
}

function saveCart() {
    localStorage.setItem('speedyCart', JSON.stringify(cart));
}

function updateCartCount() {
    if (cartCount) {
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = total;
    }
}

function updateWishlistCount() {
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

// ============================================================
// 12. CART SIDEBAR
// ============================================================
function renderCartSidebar() {
    if (!cartBody) return;

    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-bag"></i>
                <h5>Your cart is empty</h5>
                <p class="text-muted small">Start shopping!</p>
            </div>
        `;
        if (cartTotal) cartTotal.textContent = '₹0';
        return;
    }

    cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" />
            <div class="cart-item-info">
                <h6>${item.name}</h6>
                <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString()}</div>
                <div class="cart-item-actions">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button onclick="removeFromCart(${item.id})" style="background:none;color:#e74c3c;width:auto;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `₹${total.toLocaleString()}`;
}

// ============================================================
// 13. WISHLIST
// ============================================================
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist 💔');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist ❤️');
    }
    localStorage.setItem('speedyWishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    renderWishlistSidebar();
    renderAllSections();
}

function renderWishlistSidebar() {
    if (!wishlistBody) return;

    if (wishlist.length === 0) {
        wishlistBody.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart" style="color:#ddd;"></i>
                <h5>Your wishlist is empty</h5>
                <p class="text-muted small">Save your favorite items!</p>
            </div>
        `;
        return;
    }

    const wishlistItems = products.filter(p => wishlist.includes(p.id));
    wishlistBody.innerHTML = wishlistItems.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" />
            <div class="cart-item-info">
                <h6>${item.name}</h6>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                <button class="btn btn-sm btn-primary-cta" onclick="addToCart(${item.id});showToast('Added to cart!');">
                    Add to Cart
                </button>
            </div>
            <button onclick="toggleWishlist(${item.id})" style="background:none;border:none;color:#FF3D00;font-size:1.2rem;">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `).join('');
}

// ============================================================
// 14. SIDEBAR TOGGLES
// ============================================================
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('show');
    renderCartSidebar();
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

function openWishlist() {
    wishlistSidebar.classList.add('open');
    wishlistOverlay.classList.add('show');
    renderWishlistSidebar();
    document.body.style.overflow = 'hidden';
}

function closeWishlistSidebar() {
    wishlistSidebar.classList.remove('open');
    wishlistOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// ============================================================
// 15. QUICK VIEW
// ============================================================
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const content = document.getElementById('quickViewContent');
    const userRating = productRatings[productId] || 0;
    const isLiked = wishlist.includes(productId);
    const inCart = cart.find(item => item.id === productId);

    content.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" alt="${product.name}" class="img-fluid rounded" style="max-height:350px;width:100%;object-fit:contain;" />
                <div class="d-flex gap-2 mt-3 flex-wrap">
                    ${product.colors.map(c => `<span style="display:inline-block;width:28px;height:28px;border-radius:50%;background:${c};border:2px solid #ddd;cursor:pointer;"></span>`).join('')}
                </div>
                <div class="d-flex gap-2 mt-2 flex-wrap">
                    ${product.sizes.map(s => `<span style="display:inline-block;padding:6px 14px;border:1px solid #ddd;border-radius:8px;font-size:0.8rem;cursor:pointer;">${s}</span>`).join('')}
                </div>
            </div>
            <div class="col-md-6">
                <h3>${product.name}</h3>
                <p class="text-muted text-capitalize">${product.category} - ${product.type || ''}</p>
                <div class="rating mb-2">${getRatingStars(product.rating)} ${product.rating} (${product.reviews} reviews)</div>
                
                <div class="mb-3">
                    <span class="text-muted small">Your Rating:</span>
                    <div class="star-rating" data-id="${product.id}">
                        ${[1,2,3,4,5].map(star => `
                            <i class="fas fa-star ${star <= userRating ? 'active' : ''}" data-star="${star}" onclick="setRating(${product.id}, ${star});openQuickView(${product.id})" style="cursor:pointer;font-size:1.4rem;"></i>
                        `).join('')}
                    </div>
                </div>

                <h4 class="price">₹${product.price.toLocaleString()}</h4>
                ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toLocaleString()}</span>` : ''}
                ${product.oldPrice ? `<span class="discount">${Math.round((1 - product.price / product.oldPrice) * 100)}% OFF</span>` : ''}
                <p class="mt-3"><span class="stock-badge"><i class="fas fa-circle" style="color:${product.inStock ? '#00C853' : '#e74c3c'};font-size:0.5rem;"></i> ${product.inStock ? 'In Stock' : 'Out of Stock'}</span></p>
                <div class="d-flex gap-2 flex-wrap">
                    <button class="btn btn-primary-cta" onclick="addToCart(${product.id});quickViewModal.hide();" ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-bag me-2"></i> ${inCart ? `In Cart (${inCart.quantity})` : 'Add to Cart'}
                    </button>
                    <button class="btn ${isLiked ? 'btn-danger' : 'btn-outline-dark'}" onclick="toggleWishlist(${product.id});openQuickView(${product.id})">
                        <i class="fas fa-heart me-2"></i> ${isLiked ? 'Remove from' : 'Add to'} Wishlist
                    </button>
                </div>
            </div>
        </div>
    `;
    
    if (!quickViewModal) {
        quickViewModal = new bootstrap.Modal(document.getElementById('quickViewModal'));
    }
    quickViewModal.show();
}

// ============================================================
// 16. COUNTDOWN TIMER
// ============================================================
function startCountdown(targetDate) {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function update() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

const saleEnd = new Date();
saleEnd.setDate(saleEnd.getDate() + 7);
startCountdown(saleEnd);

// ============================================================
// 17. REVIEWS
// ============================================================
const reviews = [
    { name: 'Rahul S.', rating: 5, text: 'Absolutely love these! The comfort is unmatched and they look killer.' },
    { name: 'Priya M.', rating: 5, text: 'Best running shoes I\'ve ever owned. My pace improved instantly!' },
    { name: 'Amit K.', rating: 4, text: 'Great quality and fast delivery. Will buy again.' },
    { name: 'Sneha R.', rating: 5, text: 'These shoes are a game changer. Style + performance = perfect.' }
];

function renderReviews() {
    const container = document.getElementById('reviewContainer');
    if (!container) return;

    container.innerHTML = reviews.map(r => `
        <div class="col-md-3 col-6">
            <div class="review-card text-center">
                <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                <p class="small mt-2">"${r.text}"</p>
                <strong>${r.name}</strong>
            </div>
        </div>
    `).join('');
}
renderReviews();

// ============================================================
// 18. NEWSLETTER
// ============================================================
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input[type="email"]');
        if (input && input.value && input.value.includes('@') && input.value.includes('.')) {
            showToast('Subscribed successfully! 🎉');
            input.value = '';
        } else {
            showToast('Please enter a valid email address.');
        }
    });
}

// ============================================================
// 19. BACK TO TOP
// ============================================================
window.addEventListener('scroll', () => {
    if (backToTop) {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================================
// 20. NAVBAR
// ============================================================
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(17,17,17,0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.2)';
        } else {
            navbar.style.backgroundColor = 'rgba(17,17,17,0.97)';
            navbar.style.boxShadow = 'none';
        }
    }

    const sections = ['home', 'men', 'women', 'sports', 'new', 'sale', 'contact'];
    let currentSection = 'home';
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150) {
                currentSection = id;
            }
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === currentSection) {
            link.classList.add('active');
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        if (target && target.startsWith('#')) {
            const el = document.querySelector(target);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// ============================================================
// 21. EVENT LISTENERS
// ============================================================
if (filterCategory) filterCategory.addEventListener('change', applyFilters);
if (sortProducts) sortProducts.addEventListener('change', applyFilters);

if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            applyFilters();
            searchBar.classList.remove('show');
        }
    });
}

if (searchToggle) {
    searchToggle.addEventListener('click', (e) => {
        e.preventDefault();
        searchBar.classList.toggle('show');
        if (searchBar.classList.contains('show')) {
            searchInput.focus();
        }
    });
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchBar.classList.remove('show');
        searchInput.value = '';
        applyFilters();
    });
}

if (shopNowBtn) {
    shopNowBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
}

const resetFilters = document.getElementById('resetFilters');
if (resetFilters) {
    resetFilters.addEventListener('click', () => {
        if (filterCategory) filterCategory.value = 'all';
        if (sortProducts) sortProducts.value = 'default';
        if (searchInput) searchInput.value = '';
        visibleCount = 8;
        applyFilters();
        showToast('Filters reset! 🔄');
    });
}

document.getElementById('cartToggle')?.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
});

document.getElementById('wishlistToggle')?.addEventListener('click', (e) => {
    e.preventDefault();
    openWishlist();
});

closeCart?.addEventListener('click', closeCartSidebar);
cartOverlay?.addEventListener('click', closeCartSidebar);
closeWishlist?.addEventListener('click', closeWishlistSidebar);
wishlistOverlay?.addEventListener('click', closeWishlistSidebar);

// ============================================================
// 22. KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        searchToggle?.click();
    }
    if (e.key === 'Escape') {
        closeCartSidebar();
        closeWishlistSidebar();
        if (searchBar) searchBar.classList.remove('show');
    }
});

// ============================================================
// 23. INIT
// ============================================================
console.log('🚀 Speedy Initializing...');

document.addEventListener('DOMContentLoaded', function() {
    quickViewModal = new bootstrap.Modal(document.getElementById('quickViewModal'));
    
    renderAllSections();
    updateCartCount();
    updateWishlistCount();
    renderCartSidebar();
    renderWishlistSidebar();
    
    console.log(`✅ ${products.length} products loaded`);
    console.log(`📦 ${document.querySelectorAll('.product-card').length} cards on page`);
});

// ============================================================
// 24. EXPOSE GLOBALLY
// ============================================================
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleWishlist = toggleWishlist;
window.openQuickView = openQuickView;
window.setRating = setRating;
window.filterByCategory = filterByCategory;
window.loadMoreProducts = loadMoreProducts;
window.quickViewModal = quickViewModal;

console.log('⚡ Speedy loaded successfully!');