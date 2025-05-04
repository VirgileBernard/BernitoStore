<template>
    <!-- Bouton / zone déclencheur pour ouvrir la modal -->
    <div class="clotheContainer cursor-pointer" @click="showModal">
        <img :src="product.images[activeImage]" :alt="`${product.name} vue ${activeImage + 1}`"
            class="hoodie-blue-incline imgHome" />
        <div class="infoClothe">
            <span class="price">{{ product.price }}€</span>
            <h3 class="nameClothe">{{ product.name }}</h3>
        </div>
    </div>

    <!-- Overlay + modal -->
    <div v-if="openModal" class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl"
        @click.self="hideModal">
        <div class="relative bg-(--color-bg) rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 border border-(--color-black)"
            @click.stop>
            <!-- Contenu du modal -->
            <div class="product-focus">
                <!-- Header modal -->
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

                <!-- Corps : carousel Vue avec transition -->
                <div class="relative mb-4 mx-auto overflow-hidden" style="width:50vw; height:40vh;">
                    <transition :name="transitionName">
                        <img :key="activeImage" :src="product.images[activeImage]"
                            :alt="`${product.name} vue ${activeImage + 1}`"
                            class="w-full h-full object-contain rounded absolute top-0 left-0" />
                    </transition>
                    <button
                        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full px-2 py-1 hover:bg-opacity-100"
                        @click="prevImage">‹</button>
                    <button
                        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full px-2 py-1 hover:bg-opacity-100"
                        @click="nextImage">›</button>
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
                        @click="selectSize(size)" :class="[
                            'px-3 py-1 border rounded',
                            {
                                'bg-black text-white': selectedSize === size,
                                'opacity-50 cursor-not-allowed': !product.availableSizes.includes(size)
                            }
                        ]">
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
import { ref, reactive, onBeforeUnmount, computed } from 'vue'
import hoodieBlueIncline from '../../assets/img/HoodieBlueIncline.png'
import hoodieBlueFace from '../../assets/img/HoodieBlueFace.png'
import hoodieBlueDosV3 from '../../assets/img/HoodieBlueDosV3.png'

// Données produit
const product = reactive({
    name: 'Hoodie Deep Blue',
    price: 80,
    images: [hoodieBlueIncline, hoodieBlueFace, hoodieBlueDosV3],
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
const direction = ref<'left' | 'right'>('left')

const transitionName = computed(() =>
    direction.value === 'left' ? 'slide-left' : 'slide-right'
)

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
    direction.value = 'left'
    activeImage.value = (activeImage.value + 1) % product.images.length
}

function prevImage() {
    direction.value = 'right'
    activeImage.value = (activeImage.value - 1 + product.images.length) % product.images.length
}

onBeforeUnmount(() => {
    document.body.style.overflow = ''
})
</script>

<style scoped>
/* Transitions sliding */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.5s ease;
}

.slide-left-enter-from {
    transform: translateX(100%);
}

.slide-left-enter-to {
    transform: translateX(0);
}

.slide-left-leave-from {
    transform: translateX(0);
}

.slide-left-leave-to {
    transform: translateX(-100%);
}

.slide-right-enter-from {
    transform: translateX(-100%);
}

.slide-right-enter-to {
    transform: translateX(0);
}

.slide-right-leave-from {
    transform: translateX(0);
}

.slide-right-leave-to {
    transform: translateX(100%);
}
</style>