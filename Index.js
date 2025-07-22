// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay')

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden')
});
overlay.addEventListener('click',()=>{
    mobileMenu.classList.add('-translate-x-full');
    overlay.classList.add('hidden')
})
// Quantity controls
let quantity = 0;
const quantitySpan = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decrease-qty');
const increaseBtn = document.getElementById('increase-qty');

decreaseBtn.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity;
    }
});

increaseBtn.addEventListener('click', () => {
    quantity++;
    quantitySpan.textContent = quantity;
});

// Add to cart functionality
let cartCount = 0;
const addToCartBtn = document.getElementById('add-to-cart');
const cartCountSpan = document.getElementById('cart-count');

addToCartBtn.addEventListener('click', () => {
    if (quantity > 0) {
        cartCount += quantity;
        cartCountSpan.textContent = cartCount;
        cartCountSpan.classList.remove('hidden');
        quantity = 0;
        quantitySpan.textContent = quantity;
        
        // Show success feedback
        addToCartBtn.innerHTML = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Added!</span>
        `;
        
        setTimeout(() => {
            addToCartBtn.innerHTML = `
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6-5V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2"></path>
                </svg>
                <span>Add to cart</span>
            `;
        }, 2000);
    }
});

// Image gallery functionality
const mainImage = document.getElementById('main-image');
const thumbnailBtns = document.querySelectorAll('.thumbnail-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentImageIndex = 0;
const images = [
    '/assets/image-product-1.jpg',
    '/assets/image-product-2.jpg',
    '/assets/image-product-3.jpg',
    '/assets/image-product-4.jpg',
    
];

// Thumbnail click handlers
thumbnailBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentImageIndex = index;
        updateMainImage();
        updateThumbnailSelection();
    });
});

// Mobile navigation arrows
prevBtn.addEventListener('click', () => {
    currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    updateMainImage();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
    updateMainImage();
});

function updateMainImage() {
    mainImage.src = images[currentImageIndex];
}

function updateThumbnailSelection() {
    thumbnailBtns.forEach((btn, index) => {
        if (index === currentImageIndex) {
            btn.classList.add('border-orange-primary');
            btn.classList.remove('border-transparent');
        } else {
            btn.classList.remove('border-orange-primary');
            btn.classList.add('border-transparent');
        }
    });
    
}
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'orange-primary': '#ff7d1a',
                'orange-pale': '#ffede0',
            }
        }
    }
}