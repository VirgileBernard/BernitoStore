<template>
    <!-- Tuile du produit qui ouvre la modal -->
    <ProductCard :image="product.images[0]" :name="product.name" :price="product.price" @click="showModal" />

    <!-- Modal générique pour afficher le détail -->
    <ProductModal v-model="openModal" width="600px" maxHeight="80vh">
        <!-- En-tête personnalisé dans la modal -->
        <template #header>
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold">{{ product.name }}</h2>
                <span class="text-2xl font-semibold">{{ product.price }}€</span>
            </div>
        </template>

        <!-- Corps : carousel + description + sélecteur + actions -->
        <div class="space-y-6">
            <Carousel :images="product.images" width="500px" height="400px" v-model:activeIndex="activeImage" />

            <section class="text-lg text-gray-700 space-y-2">
                <p v-for="(line, idx) in product.descriptionLines" :key="idx">
                    {{ line }}
                </p>
            </section>

            <SizeSelector v-model="selectedSize" :sizes="sizes" :available="product.availableSizes" />
        </div>

        <!-- Pied de modal : boutons d'actions -->
        <template #footer>
            <ProductActions @fav="addToFav" @cart="addToCart" />
        </template>
    </ProductModal>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeUnmount } from 'vue'
import ProductCard from '../../components/ProductCard.vue'
import ProductModal from '../../components/ProductModal.vue'
import Carousel from '../../components/Carousel.vue'
import SizeSelector from '../../components/SizeSelector.vue'


// Import des images
import hoodieBlueIncline from '../../assets/img/HoodieBlueIncline.png'
import hoodieBlueFace from '../../assets/img/HoodieBlueFace.png'
import hoodieBlueDosV3 from '../../assets/img/HoodieBlueDosV3.png'
import ProductActions from '../ProductActions.vue'

// Données du produit
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





onBeforeUnmount(() => {
    document.body.style.overflow = ''
})
</script>

<style scoped>
/* Aucun style supplémentaire ici */
</style>