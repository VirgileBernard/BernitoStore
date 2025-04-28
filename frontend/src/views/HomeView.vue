<template>

    <NavBar />
    <header>

        <BrandHeader id="Branheader" />
    </header>

    <section class="topSection">
        <div class="whatsNew">
            <h3 class="sectionTitle">what's new :</h3>
            <!-- tous les composants nouveautés -->
        </div>
    </section>

    <section class="hoodiesSection">
        <h3 class="sectionTitle">hoodies : </h3>
        <!-- tous les composants hoodies -->
        <div class="clothesdiv">
            <HoodieBlue class="item" />
            <HoodieBrun class="item" />
            <HoodieGris class="item" />
            <HoodieGreen class="item" />
        </div>
    </section>

    <section class="tshirtSection">
        <div class="tshirts">
            <h3 class="sectionTitle">tshirts :</h3>
            <!-- tous les composants tshirt -->
        </div>
    </section>

    <section class="accessoriesSection">
        <div class="accessories">
            <h3 class="sectionTitle">accessories :</h3>
            <!-- tous les composants accessoires -->
        </div>
    </section>

</template>

<script setup lang="ts">

import NavBar from '../components/NavBar.vue'
import BrandHeader from '../components/BrandHeader.vue';
import HoodieGris from '../components/componentsClothing/hoodieGris.vue'
import HoodieBlue from '../components/componentsClothing/hoodieBlue.vue'
import HoodieBrun from '../components/componentsClothing/hoodieBrun.vue'
import HoodieGreen from '../components/componentsClothing/hoodieGreen.vue'

</script>

<style scoped>
.clothesdiv {
    width: 80%;
    margin: 0 auto;
    /* gap: 1rem; */
}

.sectionTitle {
    font-weight: bolder;
    margin-left: 5vw;
}
</style>