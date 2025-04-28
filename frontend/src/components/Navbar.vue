<script setup lang="ts">
import BurgerMenu from './BurgerMenu.vue';

</script>

<template>
    <nav class="navbar">
        <div class="navbar-left">
            <img src="../assets/img/logoSansTexte.png" alt="Logo" class="logo" />
            <!-- <span class="brand">Bernito Store</span> -->
        </div>

        <div class="navbar-right">
            <!-- <i class="fas fa-shopping-cart icon"></i> -->
            <BurgerMenu />
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-white);
    border-bottom: 1px solid #ccc;
    height: 2vh
}

.navbar-left {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo {
    width: 50px;
    cursor: pointer;
    margin-top: 7px;
}


.navbar-right {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.icon {
    font-size: 1.2rem;
    cursor: pointer;
}
</style>