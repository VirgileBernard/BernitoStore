<template>
    <!-- Bouton / zone déclencheur pour ouvrir la modal -->
    <div class="clotheContainer cursor-pointer" @click="showModal">
        <img src="../../assets/img/hoodieBlueIncline.png" :alt="product.name" class="hoodie-blue-incline imgHome" />
        <div class="infoClothe">
            <span class="price">{{ product.price }}€</span>
            <h3 class="nameClothe">{{ product.name }}</h3>
        </div>
    </div>

    <!-- Overlay + modal -->
    <div v-if="openModal" class="fixed inset-0 z-50 flex items-center justify-center" @click.self="hideModal">
        <div class="relative bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6"
            @click.stop>
            <!-- Contenu de fichier 2) inséré ici -->
            <div class="product-focus">
                <!-- Back to shop non nécessaire en modal -->
                <header class="focus-header mb-4 flex justify-between items-center">
                    <div class="product-info">
                        <h1 class="product-title text-2xl font-bold">{{ product.name }}</h1>
                        <span class="product-price text-lg">{{ product.price }}€</span>
                    </div>
                    <button @click="hideModal" class="p-1 rounded hover:bg-gray-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>

                <!-- Carrousel remplacant l'image principale -->
                <div class="relative mb-4">
                    <img :src="product.images[activeImage]" :alt="`${product.name} vue ${activeImage + 1}`"
                        class="w-full h-auto object-cover rounded" />
                    <button
                        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full px-2 py-1 hover:bg-opacity-100"
                        @click="prevImage">
                        ‹
                    </button>
                    <button
                        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full px-2 py-1 hover:bg-opacity-100"
                        @click="nextImage">
                        ›
                    </button>
                </div>

                <!-- Description -->
                <section class="product-description mb-4">
                    <p v-for="(line, i) in product.descriptionLines" :key="i" class="mb-2 text-gray-700">
                        {{ line }}
                    </p>
                </section>

                <!-- Sélecteur de taille -->
                <div class="product-sizes mb-6 flex gap-2">
                    <button v-for="size in sizes" :key="size" :disabled="!product.availableSizes.includes(size)"
                        @click="selectSize(size)"
                        :class="['px-3 py-1 border rounded', { 'bg-black text-white': selectedSize === size, 'opacity-50 cursor-not-allowed': !product.availableSizes.includes(size) }]">
                        {{ size }}
                    </button>
                </div>

                <!-- Footer actions -->
                <div class="flex justify-end space-x-3">
                    <button @click="addToFav"
                        class="px-4 py-2 border rounded hover:bg-gray-100 flex items-center gap-2">
                        <i class="fa fa-heart"></i> Add to fav
                    </button>
                    <button @click="addToCart"
                        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2">
                        <i class="fa fa-shopping-cart"></i> Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeUnmount } from 'vue'

// Données produit (ancien fichier 2)
const product = reactive({
    name: 'Hoodie Deep Blue',
    price: 80,
    imageUrl: '../../assets/img/HoodieBlueIncline.png',
    images: [
        '../../assets/img/HoodieBlueIncline.png',
        '../../assets/img/HoodieBlueBack.png',
        '../../assets/img/HoodieBlueSide.png'
    ],
    descriptionLines: [
        'This hoodie is entirely designed and created in Belgium.',
        'Color’s inspired by the deep blue from Pantone.'
    ],
    availableSizes: ['S', 'M', 'L']
})

const sizes = ['S', 'M', 'L', 'XL']
const selectedSize = ref<string | null>(null)
const openModal = ref(false)
const activeImage = ref(0)

function selectSize(size: string) {
    if (product.availableSizes.includes(size)) {
        selectedSize.value = size
    }
}

function addToFav() {
    // logique d'ajout aux favoris
}

function addToCart() {
    // logique d'ajout au panier (mettre à jour ShoppingCart.view)
}

function showModal() {
    openModal.value = true
    document.body.style.overflow = 'hidden'
}

function hideModal() {
    openModal.value = false
    document.body.style.overflow = ''
    activeImage.value = 0
}

function nextImage() {
    activeImage.value = (activeImage.value + 1) % product.images.length
}

function prevImage() {
    activeImage.value = (activeImage.value - 1 + product.images.length) % product.images.length
}

onBeforeUnmount(() => {
    document.body.style.overflow = ''
})
</script>

<style scoped>
/* Styles globaux ou spécifiques à la modal */
</style>