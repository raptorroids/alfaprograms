// Urban Marketplace - Main JavaScript File
// Handles all interactive functionality for the marketplace

class UrbanMarketplace {
    constructor() {
        this.currentUser = null;
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        this.products = this.generateProductData();
        this.users = this.generateUserData();
        this.init();
    }

    init() {
        this.checkUserSession();
        this.initializeAnimations();
        this.bindEvents();
        this.updateCartDisplay();
        this.initializeSearch();
    }

    // Generate realistic product data
    generateProductData() {
        return [
            {
                id: 1,
                name: "Wireless Bluetooth Headphones",
                price: 79.99,
                category: "Electronics",
                subcategory: "Audio",
                image: "https://kimi-web-img.moonshot.cn/img/img.freepik.com/b5ba1f2da291910da8607b9b867272551b3ce702.jpg",
                description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
                seller: "TechHub Store",
                rating: 4.5,
                reviews: 128,
                condition: "New",
                shipping: "Free"
            },
            {
                id: 2,
                name: "Smart Fitness Watch",
                price: 199.99,
                category: "Electronics",
                subcategory: "Wearables",
                image: "https://kimi-web-img.moonshot.cn/img/gd-hbimg.huaban.com/f1a3c7c65d579323e0d3b4a43951577d74d83c14",
                description: "Advanced fitness tracking with heart rate monitor and GPS",
                seller: "FitTech Pro",
                rating: 4.8,
                reviews: 89,
                condition: "New",
                shipping: "Free"
            },
            {
                id: 3,
                name: "Designer Leather Wallet",
                price: 49.99,
                category: "Fashion",
                subcategory: "Accessories",
                image: "https://kimi-web-img.moonshot.cn/img/bucket.pk/c6fc3a56850b795bba5adf516058200b6f00e007.jpg",
                description: "Genuine leather wallet with RFID protection and multiple card slots",
                seller: "Luxury Leather Co",
                rating: 4.7,
                reviews: 156,
                condition: "New",
                shipping: "$5.99"
            },
            {
                id: 4,
                name: "Wireless Gaming Mouse",
                price: 89.99,
                category: "Electronics",
                subcategory: "Gaming",
                image: "https://kimi-web-img.moonshot.cn/img/giftone.com.hk/e15ace28ec74cb0e7108fd33047a59cd544af97f.jpg",
                description: "High-precision gaming mouse with customizable RGB lighting",
                seller: "GameZone Electronics",
                rating: 4.6,
                reviews: 203,
                condition: "New",
                shipping: "Free"
            },
            {
                id: 5,
                name: "Premium Running Shoes",
                price: 129.99,
                category: "Fashion",
                subcategory: "Footwear",
                image: "https://kimi-web-img.moonshot.cn/img/pic3.zhimg.com/5a5dc1a9c3aa02f65639ece00e871903754aeed5.jpg",
                description: "Lightweight running shoes with advanced cushioning technology",
                seller: "SportStyle Outlet",
                rating: 4.4,
                reviews: 92,
                condition: "New",
                shipping: "$8.99"
            },
            {
                id: 6,
                name: "Modern Table Lamp",
                price: 69.99,
                category: "Home",
                subcategory: "Lighting",
                image: "https://kimi-web-img.moonshot.cn/img/cdn.thewirecutter.com/c163fa4d63f19d07d4073ac46e55342e113d79ba.jpg",
                description: "Adjustable LED desk lamp with touch controls and USB charging",
                seller: "HomeBright Solutions",
                rating: 4.3,
                reviews: 67,
                condition: "New",
                shipping: "$6.99"
            },
            {
                id: 7,
                name: "Ceramic Vase Set",
                price: 34.99,
                category: "Home",
                subcategory: "Decor",
                image: "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/efd5114d93efedb464c546ddfcafce211678baa7.jpg",
                description: "Set of 3 ceramic vases in modern minimalist design",
                seller: "Artisan Home Decor",
                rating: 4.9,
                reviews: 45,
                condition: "New",
                shipping: "$4.99"
            },
            {
                id: 8,
                name: "Luxury Wristwatch",
                price: 299.99,
                category: "Fashion",
                subcategory: "Accessories",
                image: "https://kimi-web-img.moonshot.cn/img/assets.lummi.ai/9d05450e7e03683913d1255ecaee191fd31de0d3",
                description: "Classic analog watch with leather strap and water resistance",
                seller: "Timepiece Collection",
                rating: 4.8,
                reviews: 178,
                condition: "New",
                shipping: "Free"
            },
            {
                id: 9,
                name: "Wireless Earbuds Pro",
                price: 159.99,
                category: "Electronics",
                subcategory: "Audio",
                image: "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/92721342ccc503ecd9b768f0b242a46f703d4564.jpg",
                description: "Premium wireless earbuds with active noise cancellation",
                seller: "AudioTech Store",
                rating: 4.7,
                reviews: 234,
                condition: "New",
                shipping: "Free"
            },
            {
                id: 10,
                name: "Decorative Wall Mirror",
                price: 89.99,
                category: "Home",
                subcategory: "Decor",
                image: "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/8e21ed31c621298f2cb7ce3a7fc6c1c1f4f0fd21.jpg",
                description: "Modern circular wall mirror with gold frame",
                seller: "MirrorWorks Studio",
                rating: 4.5,
                reviews: 89,
                condition: "New",
                shipping: "$9.99"
            },
            {
                id: 11,
                name: "Gaming Mechanical Keyboard",
                price: 119.99,
                category: "Electronics",
                subcategory: "Gaming",
                image: "https://kimi-web-img.moonshot.cn/img/static.turbosquid.com/8fcd5f1030f5441a0ceda2587576b023dbae0afe.jpg",
                description: "RGB mechanical keyboard with cherry MX switches",
                seller: "GameTech Pro",
                rating: 4.6,
                reviews: 156,
                condition: "New",
                shipping: "Free"
            },
            {
                id: 12,
                name: "Premium Leather Belt",
                price: 39.99,
                category: "Fashion",
                subcategory: "Accessories",
                image: "https://kimi-web-img.moonshot.cn/img/awessories.com/fcb1297f5628c78c51d6a3581ac1aef7f34877d0.jpg",
                description: "Handcrafted leather belt with classic buckle design",
                seller: "LeatherCraft Co",
                rating: 4.4,
                reviews: 73,
                condition: "New",
                shipping: "$3.99"
            },
            {
                id: 13,
                name: "Modern Storage Basket",
                price: 24.99,
                category: "Home",
                subcategory: "Storage",
                image: "https://kimi-web-img.moonshot.cn/img/www.therange.co.uk/45dff6a37bf5572829f401d723f0639cbd89f31c.jpg",
                description: "Woven storage basket with handles for organization",
                seller: "OrganizeIt Solutions",
                rating: 4.2,
                reviews: 91,
                condition: "New",
                shipping: "$4.99"
            },
            {
                id: 14,
                name: "Designer Evening Dress",
                price: 189.99,
                category: "Fashion",
                subcategory: "Clothing",
                image: "https://kimi-web-img.moonshot.cn/img/www.papilioboutique.com/d173c791eb968e2878071c05b0584a25004389a5.jpg",
                description: "Elegant evening dress with intricate beadwork",
                seller: "Couture Boutique",
                rating: 4.9,
                reviews: 34,
                condition: "New",
                shipping: "$12.99"
            },
            {
                id: 15,
                name: "Premium Denim Jeans",
                price: 79.99,
                category: "Fashion",
                subcategory: "Clothing",
                image: "https://kimi-web-img.moonshot.cn/img/img.junonastore.com/6d31bae1be696cb6c7c53ae577b9cdc75cb5e57e.jpg",
                description: "High-quality denim jeans with perfect fit",
                seller: "Denim Masters",
                rating: 4.3,
                reviews: 167,
                condition: "New",
                shipping: "$7.99"
            }
        ];
    }

    // Generate user data
    generateUserData() {
        return [
            {
                email: "demo@urbanmarketplace.com",
                password: "demo123",
                name: "Demo User",
                profile: {
                    address: "123 Market Street, Urban City",
                    phone: "+1 (555) 123-4567",
                    joinDate: "2024-01-15",
                    rating: 4.8,
                    totalTransactions: 23
                }
            }
        ];
    }

    // Check if user is logged in
    checkUserSession() {
        const userEmail = localStorage.getItem('currentUser');
        if (userEmail) {
            this.currentUser = this.users.find(user => user.email === userEmail);
            this.updateUserInterface();
        }
    }

    // Initialize animations
    initializeAnimations() {
        // Initialize Anime.js animations
        if (typeof anime !== 'undefined') {
            // Hero text animation
            anime({
                targets: '.hero-title',
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 1000,
                easing: 'easeOutQuart',
                delay: 500
            });

            // Product cards animation
            anime({
                targets: '.product-card',
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                easing: 'easeOutQuart',
                delay: anime.stagger(100, {start: 800})
            });
        }

        // Initialize Typed.js for hero text
        if (typeof Typed !== 'undefined' && document.querySelector('.typed-text')) {
            new Typed('.typed-text', {
                strings: ['Discover Amazing Products', 'Connect with Trusted Sellers', 'Shop with Confidence'],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true
            });
        }

        // Initialize Splide carousel
        if (typeof Splide !== 'undefined' && document.querySelector('.splide')) {
            new Splide('.splide', {
                type: 'loop',
                perPage: 4,
                perMove: 1,
                gap: '1rem',
                autoplay: true,
                interval: 3000,
                breakpoints: {
                    768: { perPage: 2 },
                    480: { perPage: 1 }
                }
            }).mount();
        }
    }

    // Bind event listeners
    bindEvents() {
        // Navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-action]')) {
                this.handleAction(e.target.dataset.action, e.target);
            }
        });

        // Form submissions
        document.addEventListener('submit', (e) => {
            if (e.target.matches('.login-form')) {
                e.preventDefault();
                this.handleLogin(e.target);
            }
            if (e.target.matches('.register-form')) {
                e.preventDefault();
                this.handleRegister(e.target);
            }
            if (e.target.matches('.listing-form')) {
                e.preventDefault();
                this.handleListingSubmit(e.target);
            }
        });

        // Search functionality
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // Category filters
        document.addEventListener('click', (e) => {
            if (e.target.matches('.category-filter')) {
                this.filterByCategory(e.target.dataset.category);
            }
        });

        // Price range slider
        const priceRange = document.querySelector('.price-range');
        if (priceRange) {
            priceRange.addEventListener('input', (e) => {
                this.filterByPrice(e.target.value);
            });
        }
    }

    // Handle various actions
    handleAction(action, element) {
        switch (action) {
            case 'add-to-cart':
                this.addToCart(element.dataset.productId);
                break;
            case 'add-to-watchlist':
                this.addToWatchlist(element.dataset.productId);
                break;
            case 'remove-from-cart':
                this.removeFromCart(element.dataset.productId);
                break;
            case 'logout':
                this.logout();
                break;
            case 'toggle-mobile-menu':
                this.toggleMobileMenu();
                break;
            case 'quick-view':
                this.showQuickView(element.dataset.productId);
                break;
        }
    }

    // User authentication
    handleLogin(form) {
        const email = form.querySelector('[name="email"]').value;
        const password = form.querySelector('[name="password"]').value;
        
        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', email);
            this.showNotification('Login successful!', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            this.showNotification('Invalid email or password', 'error');
        }
    }

    handleRegister(form) {
        const email = form.querySelector('[name="email"]').value;
        const password = form.querySelector('[name="password"]').value;
        const name = form.querySelector('[name="name"]').value;
        
        if (this.users.find(u => u.email === email)) {
            this.showNotification('Email already registered', 'error');
            return;
        }
        
        const newUser = {
            email,
            password,
            name,
            profile: {
                address: '',
                phone: '',
                joinDate: new Date().toISOString().split('T')[0],
                rating: 0,
                totalTransactions: 0
            }
        };
        
        this.users.push(newUser);
        this.currentUser = newUser;
        localStorage.setItem('currentUser', email);
        this.showNotification('Registration successful!', 'success');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.showNotification('Logged out successfully', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }

    // Shopping cart functionality
    addToCart(productId) {
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        const existingItem = this.cart.find(item => item.id == productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateCartDisplay();
        this.showNotification(`${product.name} added to cart!`, 'success');
        
        // Animate cart icon
        this.animateCartIcon();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id != productId);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateCartDisplay();
        this.showNotification('Item removed from cart', 'info');
    }

    updateCartDisplay() {
        const cartCount = document.querySelector('.cart-count');
        const cartTotal = document.querySelector('.cart-total');
        
        if (cartCount) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'block' : 'none';
        }
        
        if (cartTotal) {
            const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `$${total.toFixed(2)}`;
        }
    }

    animateCartIcon() {
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon && typeof anime !== 'undefined') {
            anime({
                targets: cartIcon,
                scale: [1, 1.2, 1],
                duration: 300,
                easing: 'easeOutQuart'
            });
        }
    }

    // Watchlist functionality
    addToWatchlist(productId) {
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        if (!this.watchlist.find(item => item.id == productId)) {
            this.watchlist.push(product);
            localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
            this.showNotification(`${product.name} added to watchlist!`, 'success');
        } else {
            this.showNotification('Item already in watchlist', 'info');
        }
    }

    // Search functionality
    initializeSearch() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            // Show search suggestions
            searchInput.addEventListener('focus', () => {
                this.showSearchSuggestions();
            });
            
            // Hide suggestions when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.search-container')) {
                    this.hideSearchSuggestions();
                }
            });
        }
    }

    handleSearch(query) {
        if (query.length < 2) {
            this.hideSearchSuggestions();
            return;
        }
        
        const suggestions = this.products
            .filter(product => 
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase())
            )
            .slice(0, 5);
        
        this.displaySearchSuggestions(suggestions);
    }

    showSearchSuggestions() {
        const suggestions = this.products.slice(0, 5);
        this.displaySearchSuggestions(suggestions);
    }

    displaySearchSuggestions(suggestions) {
        const container = document.querySelector('.search-suggestions');
        if (!container) return;
        
        container.innerHTML = suggestions.map(product => `
            <div class="suggestion-item" onclick="marketplace.selectSuggestion(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="suggestion-image">
                <div class="suggestion-info">
                    <div class="suggestion-name">${product.name}</div>
                    <div class="suggestion-price">$${product.price}</div>
                </div>
            </div>
        `).join('');
        
        container.style.display = 'block';
    }

    hideSearchSuggestions() {
        const container = document.querySelector('.search-suggestions');
        if (container) {
            container.style.display = 'none';
        }
    }

    selectSuggestion(productId) {
        const product = this.products.find(p => p.id == productId);
        if (product) {
            window.location.href = `listing.html?id=${productId}`;
        }
    }

    // Product filtering
    filterByCategory(category) {
        const filteredProducts = category === 'all' 
            ? this.products 
            : this.products.filter(p => p.category === category);
        
        this.displayProducts(filteredProducts);
        this.updateActiveFilter(category);
    }

    filterByPrice(maxPrice) {
        const filteredProducts = this.products.filter(p => p.price <= maxPrice);
        this.displayProducts(filteredProducts);
    }

    displayProducts(products) {
        const container = document.querySelector('.products-grid');
        if (!container) return;
        
        container.innerHTML = products.map(product => this.createProductCard(product)).join('');
        
        // Animate new products
        if (typeof anime !== 'undefined') {
            anime({
                targets: '.product-card',
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 600,
                easing: 'easeOutQuart',
                delay: anime.stagger(50)
            });
        }
    }

    createProductCard(product) {
        return `
            <div class="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="relative">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                    <button class="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors" 
                            data-action="add-to-watchlist" data-product-id="${product.id}">
                        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </button>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">${product.name}</h3>
                    <p class="text-gray-600 text-sm mb-2 line-clamp-2">${product.description}</p>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-2xl font-bold text-orange-600">$${product.price}</span>
                        <div class="flex items-center">
                            <div class="flex text-yellow-400">
                                ${this.generateStars(product.rating)}
                            </div>
                            <span class="text-gray-500 text-sm ml-1">(${product.reviews})</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>Seller: ${product.seller}</span>
                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">${product.condition}</span>
                    </div>
                    <div class="flex gap-2">
                        <button class="flex-1 bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors font-medium" 
                                data-action="add-to-cart" data-product-id="${product.id}">
                            Add to Cart
                        </button>
                        <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors" 
                                data-action="quick-view" data-product-id="${product.id}">
                            Quick View
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
        }
        
        if (hasHalfStar) {
            stars += '<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0v15z"/></svg>';
        }
        
        return stars;
    }

    // Utility functions
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-500 text-white' :
            type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        if (typeof anime !== 'undefined') {
            anime({
                targets: notification,
                translateX: [300, 0],
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutQuart'
            });
        }
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: notification,
                    translateX: [0, 300],
                    opacity: [1, 0],
                    duration: 300,
                    easing: 'easeInQuart',
                    complete: () => notification.remove()
                });
            } else {
                notification.remove();
            }
        }, 3000);
    }

    updateUserInterface() {
        const userMenu = document.querySelector('.user-menu');
        const loginButton = document.querySelector('.login-button');
        
        if (this.currentUser) {
            if (userMenu) userMenu.style.display = 'block';
            if (loginButton) loginButton.style.display = 'none';
            
            // Update user name
            const userNameElements = document.querySelectorAll('.user-name');
            userNameElements.forEach(el => el.textContent = this.currentUser.name);
        } else {
            if (userMenu) userMenu.style.display = 'none';
            if (loginButton) loginButton.style.display = 'block';
        }
    }

    updateActiveFilter(category) {
        document.querySelectorAll('.category-filter').forEach(btn => {
            btn.classList.remove('bg-orange-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        });
        
        const activeBtn = document.querySelector(`[data-category="${category}"]`);
        if (activeBtn) {
            activeBtn.classList.remove('bg-gray-200', 'text-gray-700');
            activeBtn.classList.add('bg-orange-600', 'text-white');
        }
    }

    toggleMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    }

    showQuickView(productId) {
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-2xl font-bold">${product.name}</h2>
                        <button class="text-gray-500 hover:text-gray-700" onclick="this.closest('.fixed').remove()">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded-lg">
                        <div>
                            <p class="text-gray-600 mb-4">${product.description}</p>
                            <div class="mb-4">
                                <span class="text-3xl font-bold text-orange-600">$${product.price}</span>
                                <div class="flex items-center mt-2">
                                    <div class="flex text-yellow-400">
                                        ${this.generateStars(product.rating)}
                                    </div>
                                    <span class="text-gray-500 text-sm ml-2">(${product.reviews} reviews)</span>
                                </div>
                            </div>
                            <div class="mb-4">
                                <p class="text-sm text-gray-600">Seller: ${product.seller}</p>
                                <p class="text-sm text-gray-600">Condition: ${product.condition}</p>
                                <p class="text-sm text-gray-600">Shipping: ${product.shipping}</p>
                            </div>
                            <button class="w-full bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition-colors font-medium" 
                                    data-action="add-to-cart" data-product-id="${product.id}">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Animate modal
        if (typeof anime !== 'undefined') {
            anime({
                targets: modal.querySelector('.bg-white'),
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutQuart'
            });
        }
    }
}

// Initialize marketplace when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.marketplace = new UrbanMarketplace();
});

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 600,
                        easing: 'easeOutQuart'
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', initScrollAnimations);