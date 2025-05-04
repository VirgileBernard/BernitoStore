<template>


    <ProductCard :image="product.images[0]" :name="product.name" :price="product.price" @click="showModal" />

    <ProductModal v-model="openModal" width="600px" maxHeight="80vh">

        <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold">{{ product.name }}</h2>
            <span class="text-2xl font-semibold">{{ product.price }}€</span>
        </div>

        <div class="space-y-6">
            <Carousel :images="product.images" width="500px" height="400px" v-model:activeIndex="activeImage" />

            <section class="text-lg text-gray-700 space-y-2">
                <p v-for="(line, idx) in product.descriptionLines" :key="idx">
                    {{ line }}
                </p>
            </section>

            <SizeSelector v-model="selectedSize" :sizes="sizes" :available="product.availableSizes" />
        </div>


        <ProductActions @fav="addToFav" @cart="addToCart" />

    </ProductModal>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, watch } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import ProductModal from '../components/ProductModal.vue'
import Carousel from '../components/Carousel.vue'
import SizeSelector from '../components/SizeSelector.vue'
import ProductActions from '../components/ProductActions.vue'

interface Product {
    name: string
    price: number
    images: string[]
    descriptionLines: string[]
    availableSizes: string[]
}

// on reçoit le produit de l’extérieur
const props = defineProps<{ product: Product }>()

const sizes = ['S', 'M', 'L', 'XL']
const selectedSize = ref<string | null>(null)
const openModal = ref(false)
const activeImage = ref(0)

function addToFav() {/* ... */ }
function addToCart() {/* ... */ }
function showModal() { openModal.value = true; document.body.style.overflow = 'hidden' }

watch(openModal, (isOpen) => {
    if (!isOpen) {
        document.body.style.overflow = ''
        activeImage.value = 0
    }
})

onBeforeUnmount(() => { document.body.style.overflow = '' })
</script>

<style scoped>
/* juste votre CSS habituel */
</style>