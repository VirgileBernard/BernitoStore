<template>
    <header>
        <NavBar />

        <BrandHeader id="Branheader" />
    </header>

    <!-- <section class="topSection">
        <div class="whatsNew">
            <h3 class="sectionTitle">what's new :</h3> -->
    <!-- tous les composants nouveautés -->
    <!-- </div>
    </section> -->


    <button data-modal-target="quote-modal" data-modal-toggle="quote-modal" class="flex items-center space-x-2 text-white bg-yellow-600
           hover:bg-yellow-500 px-4 py-2 rounded-full transition" type="button">
        <i class="fa-solid fa-plus mr-4"> </i> Créer un devis
    </button>
    <!-- Modal pour CLothe Focus -->
    <div id="quote-modal" tabindex="-1" aria-hidden="true" class="fixed inset-0 z-50 hidden
         bg-black/50 backdrop-blur-sm flex items-center justify-center overflow-y-auto closable:false">
        <!-- Modal wrapper -->
        <div class="relative w-full h-full">


            <!-- MODAL CONTENT -->
            <div class="relative bg-[var(--TextBlack)] rounded-lg shadow  w-3/6 m-auto mt-20 mb-20 ">
                <!-- Stepper -->
                <FocusHoodieBlue />
            </div>
        </div>
    </div>

    <section class="hoodiesSection">
        <h3 class="sectionTitle">hoodies : </h3>
        <!-- tous les composants hoodies -->
        <div class="clothesdiv">
            <HoodieBlue />
            <HoodieBrun />
            <HoodieGreen />
            <HoodieGris />
        </div>
    </section>

    <section class="tshirtSection">
        <div class="tshirts">
            <!-- <h3 class="sectionTitle">tshirts :</h3> -->
            <!-- tous les composants tshirt -->
        </div>
    </section>

    <section class="accessoriesSection">
        <div class="accessories">
            <!-- <h3 class="sectionTitle">accessories :</h3> -->
            <!-- tous les composants accessoires -->
        </div>
    </section>


    <Footer />

</template>

<script setup lang="ts">

import NavBar from '../components/NavBar.vue'
import BrandHeader from '../components/BrandHeader.vue'
import HoodieGris from '../components/componentsClothing/hoodieGris.vue'
import HoodieBlue from '../components/componentsClothing/hoodieBlue.vue'
import HoodieBrun from '../components/componentsClothing/hoodieBrun.vue'
import HoodieGreen from '../components/componentsClothing/hoodieGreen.vue'
import Footer from '../components/Footer.vue'
import FocusHoodieBlue from '../components/componentsFocusClothing/focusHoodieBlue.vue'

</script>

<style scoped>
.clothesdiv {
    width: 80%;
    margin: 0 auto;
    /* gap: 1rem; */
    display: flex;
}

.sectionTitle {
    font-weight: bolder;
    margin-left: 5vw;
}
</style>