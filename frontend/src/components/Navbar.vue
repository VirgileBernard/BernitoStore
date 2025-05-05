<script setup lang="ts">
import BurgerMenu from './BurgerMenu.vue';

</script>

<template>
    <nav class="navbar">
        <a href="/">
            <div class="navbar-left">
                <img src="../assets/img/logoSansTexte.png" alt="Logo" class="logo" />
            </div>
        </a>

        <div class="navbar-right">
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
    height: 10vh;
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