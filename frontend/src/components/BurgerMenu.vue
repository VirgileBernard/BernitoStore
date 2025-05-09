<template>
    <!-- Mobile: burger menu -->
    <div class="mobile-nav burger-container">
        <i class="fas fa-bars burger-icon" @click="toggleMenu"></i>
        <transition name="slide">
            <div v-if="isOpen" class="menu-overlay" @click.self="closeMenu">
                <div class="menu-content">
                    <button class="close-button" @click="closeMenu">×</button>
                    <ul>
                        <li><router-link to="/" @click="closeMenu" class="navLink">Home</router-link></li>
                        <li><router-link to="/about" @click="closeMenu" class="navLink">About</router-link></li>
                        <li><router-link to="/cart" @click="closeMenu" class="navLink">Cart</router-link></li>
                        <li><router-link to="/login" @click="closeMenu" class="navLink">Login</router-link></li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>

    <!-- Desktop: horizontal nav buttons -->
    <nav class="desktop-nav">
        <ul class="desktop-menu">
            <li><router-link to="/" class="navButton">Home</router-link></li>
            <li><router-link to="/about" class="navButton">About</router-link></li>
            <li><router-link to="/cart" class="navButton">Cart</router-link></li>
            <li><router-link to="/login" class="navButton">Login</router-link></li>
        </ul>
    </nav>
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
    display: block;
    position: relative;
}

.burger-icon {
    font-size: 1.5rem;
    cursor: pointer;
}

/* Desktop nav hidden by default */
.desktop-nav {
    display: none;
}

/* Desktop menu styling */
.desktop-menu {
    display: flex;
}

.navButton {
    padding: 1.5rem;
    text-decoration: none;
    transition: all 0.3s;
}

.navButton:hover {
    box-shadow: 0 0 10px var(--color-borderShadow) inset;
}

.clotheContainer {
    border-radius: 4px;
    max-width: 90%;
    margin: 0 auto;
    padding: 2rem;
    transition: all 0.3s ease;
}



/* Responsive: show desktop nav, hide burger on wider screens */
@media (min-width: 450px) {
    .mobile-nav {
        display: none;
    }

    .desktop-nav {
        display: block;
    }
}

/* existing overlay/menu-content styles… */
.menu-overlay {
    position: fixed;
    inset: 0;
    z-index: 99;
}

.menu-content {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    background: var(--color-white);
    padding: 2rem 1rem;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
    z-index: 100;
    max-height: 90vh;
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

.close-button:hover {
    transform: rotate(90deg);
}

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

/* slide transition */
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

.navLink {
    text-decoration: none;
    color: var(--color-primary);
    font-weight: bold;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}
</style>
