<template>
    <NavBar />
    <div class="cart-container">
        <header>
            <div class="backContainer">
                <BackToShopButton />
            </div>
        </header>

        <main class="cart-content">
            <div v-if="cartIsEmpty" class="empty-cart">
                <h2>Your cart is empty :(</h2>
                <div class="back-stack">
                    <BackToShopButton v-for="n in 5" :key="n" :class="'btn-stack btn-stack-' + n" />
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>



<script setup lang="ts">
import NavBar from '../components/Navbar.vue'
import BackToShopButton from '../components/BackToShopButton.vue'
import Footer from '../components/Footer.vue'

const cartIsEmpty = true // temporairement hardcodé
</script>


<style scoped>
.cart-container {
    display: flex;
    flex-direction: column;
    min-height: 93vh;
}

.cart-content {
    flex: 1;
}

.empty-cart h2 {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    margin-left: 3vw;
}

.back-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 2rem;
}

.btn-stack {
    position: relative;
    width: fit-content;
    margin-bottom: -1.5rem;
    /* pour qu’ils se collent */
    z-index: 1;
}

/* Décalage progressif */
.btn-stack-2 {
    left: 15px;
    z-index: 2;
}

.btn-stack-3 {
    z-index: 3;
}

.btn-stack-4 {
    left: 15px;
    z-index: 4;
}

.btn-stack-5 {
    z-index: 5;
}
</style>
