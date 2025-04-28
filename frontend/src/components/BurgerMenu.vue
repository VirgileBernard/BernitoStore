<template>
    <div class="burger-container">
        <i class="fas fa-bars burger-icon" @click="toggleMenu"></i>
        <transition name="slide">
            <!-- Utilisation de v-if pour que Vue puisse gérer l'animation de l'apparition/disparition -->
            <div v-if="isOpen" class="menu-overlay" @click.self="closeMenu">
                <div class="menu-content">
                    <button class="close-button" @click="closeMenu">×</button>
                    <ul>
                        <li><router-link to="/home" @click="closeMenu">Home</router-link></li>
                        <li><router-link to="/about" @click="closeMenu">About</router-link></li>
                        <li><router-link to="/cart" @click="closeMenu">Cart</router-link></li>
                        <li><router-link to="/login" @click="closeMenu">Login</router-link></li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>




<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
function toggleMenu() {
    isOpen.value = !isOpen.value
}
function closeMenu() {
    isOpen.value = false
}
</script>

<style scoped>
.burger-container {
    position: relative;
}

.burger-icon {
    font-size: 1.5rem;
    cursor: pointer;
}

/* Styles de l'overlay inchangés */
.menu-overlay {
    position: fixed;
    inset: 0;
    /* background: rgba(0, 0, 0, 0.5); */
    z-index: 99;
}

/* Styles de base du menu sans la transformation initiale */
.menu-content {
    position: fixed;
    top: 0;
    right: 0;
    /* height: 100vh; */
    width: 70vw;
    background: var(--color-white);
    padding: 2rem 1rem;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
    z-index: 100;
    max-height: 90vh;
    /* sécurité pour écrans petits */
    border-radius: var(--radius);
    overflow-y: auto;

}

.close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: var(--color-primary);
    cursor: pointer;
    transition: transform 0.35s ease;
    z-index: 101;
}

/* Ajout d'une animation de rotation pour le bouton de fermeture */
.close-button:hover {
    transform: rotate(90deg);
}

/* Styles des listes et liens du menu */
.menu-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu-content li {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 1rem;
}

.menu-content li:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}

.menu-content a {
    text-decoration: none;
    color: var(--color-primary);
    font-weight: bold;
}


/* Classes de transition définies par Vue pour le nom "slide" */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}
</style>
