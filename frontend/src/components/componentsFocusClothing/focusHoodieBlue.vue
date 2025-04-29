<template>

    <div class="product-focus">
        <!-- Back to shop + titre + prix -->
        <header class="focus-header">
            <BackToShopButton />
            <div class="product-info">
                <h1 class="product-title">{{ product.name }}</h1>
                <span class="product-price">{{ product.price }}€</span>
            </div>
        </header>

        <!-- Image principale -->
        <div class="product-image">
            <img src="../../assets/img/hoodieBlueIncline.png" :alt="product.name" />
        </div>

        <!-- Description -->
        <section class="product-description">
            <p v-for="(line, i) in product.descriptionLines" :key="i">
                {{ line }}
            </p>
        </section>

        <!-- Sélecteur de tailles -->
        <div class="product-sizes">
            <button v-for="size in sizes" :key="size" :disabled="!product.availableSizes.includes(size)"
                @click="selectSize(size)" :class="{ selected: selectedSize === size }">
                {{ size }}
            </button>
        </div>

        <!-- Actions -->
        <div class="product-actions">
            <button class="btn btn-fav" @click="addToFav">
                add to fav <i class="fa fa-heart"></i>
            </button>
            <button class="btn btn-cart" @click="addToCart">
                add to cart <i class="fa fa-shopping-cart"></i>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// import NavBar from '@/components/NavBar.vue'
import BackToShopButton from '../BackToShopButton.vue'

const product = reactive({
    name: 'Hoodie Deep Blue',
    price: 80,
    imageUrl: '/path/to/image.jpg',
    descriptionLines: [
        'This hoodie is entirely designed and created in Belgium.',
        'Color’s inspired by the deep blue from Pantone.'
    ],
    availableSizes: ['S', 'M', 'L'] // XL non dispo
})

const sizes = ['S', 'M', 'L', 'XL']
const selectedSize = ref<string | null>(null)

function selectSize(size: string) {
    if (product.availableSizes.includes(size)) {
        selectedSize.value = size
    }
}

function addToFav() {
    // ...
}

function addToCart() {
    // ...
}
</script>

<style scoped>
.product-focus {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1rem;
}

.focus-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.product-info {
    display: flex;
    align-items: baseline;
    gap: 1rem;
}

.product-title {
    font-size: 1.2rem;
    font-weight: bold;
}

.product-price {
    font-size: 1rem;
}

.product-image img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border: 1px solid #000;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}

.product-description p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.product-sizes {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
}

.product-sizes button {
    padding: 0.5rem;
    border: 1px solid #000;
    background: transparent;
    width: 50px;
    cursor: pointer;
}

.product-sizes button.selected {
    background: #000;
    color: #fff;
}

.product-sizes button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.product-actions {
    display: flex;
    gap: 1rem;
    margin-top: auto;
}

.btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.6rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: bold;
}

.btn-fav {
    background: transparent;
}

.btn-cart {
    background: #000;
    color: #fff;
}
</style>