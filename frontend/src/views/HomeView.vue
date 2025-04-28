<template>

    <NavBar />
    <header>

        <BrandHeader id="Branheader" />
    </header>

    <section class="topSection">
        <div class="whatsNew">
            <h3>what's new :</h3>
            <!-- tous les composants nouveautés -->
        </div>
    </section>

    <section class="hoodiesSection">
        <div class="hoodies">
            <h3>hoodies : </h3>
            <!-- tous les composants hoodies -->
        </div>
    </section>

    <section class="tshirtSection">
        <div class="tshirts">
            <h3>tshirts</h3>
            <!-- tous les composants tshirt -->
        </div>
    </section>

    <section class="accessoriesSection">
        <div class="accessories">
            <h3>accessories :</h3>
            <!-- tous les composants accessoires -->
        </div>
    </section>

</template>

<script setup lang="ts">

import NavBar from '../components/NavBar.vue'
import BrandHeader from '../components/BrandHeader.vue';
</script>

<style scoped></style>