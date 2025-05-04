<template>
    <header>
        <NavBar />

        <BrandHeader id="Branheader" />
    </header>

    <section class="hoodiesSection">
        <h3 class="sectionTitle">hoodies : </h3>
        <!-- Grille responsive 2 colonnes -->
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <ProductDetail v-for="cfg in hoodieConfigs" :key="cfg.name" :product="cfg" />
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
            <!-- <h3 class="sectionTitle">accessories :</h3> -->
            <!-- tous les composants accessoires -->
        </div>
    </section>


    <Footer />

</template>

<script setup lang="ts">

import NavBar from '../components/NavBar.vue'
import BrandHeader from '../components/BrandHeader.vue'
// import HoodieGris from '../components/componentsClothing/hoodieGris.vue'
// import HoodieBlue from '../components/componentsClothing/hoodieBlue.vue'
// import HoodieBrun from '../components/componentsClothing/hoodieBrun.vue'
// import HoodieGreen from '../components/componentsClothing/hoodieGreen.vue'
import Footer from '../components/Footer.vue'


import ProductDetail from '../components/ProductDetail.vue'

import hoodieBlueIncline from '../../src/assets/img/HoodieBlueIncline.png'
import hoodieBlueFace from '../../src/assets/img/HoodieBlueFace.png'
import hoodieBlueDosV3 from '../../src/assets/img/HoodieBlueDosV3.png'

import hoodieBrunIncline from '../../src/assets/img/HoodieBrunIncline.png'
import hoodieBrunFondClair from '../../src/assets/img/HoodieBrunFondClair.png'
import hoodieBrunDosV3 from '../../src/assets/img/HoodieBrunDosV3.png'

// etc. pour vert et gris

import hoodieGreenIncline from '../../src/assets/img/HoodieGreenIncline.png'
import hoodieGreenFace from '../../src/assets/img/HoodieGreenFace.png'
import hoodieGreenDosV3 from '../../src/assets/img/HoodieGreenDosV3.png'

import hoodieGrisIncline from '../../src/assets/img/HoodieGrisIncline.png'
import hoodieGrisFace from '../../src/assets/img/HoodieGrisFace.png'
import hoodieGrisDosV1 from '../../src/assets/img/HoodieGrisDosV1.png'

const hoodieConfigs = [
    {
        name: 'Hoodie Grey',
        price: 80,
        images: [hoodieGrisIncline, hoodieGrisFace, hoodieGrisDosV1],
        descriptionLines: ['This hoodie is entirely designed and created in Belgium.',
            'Color’s inspired by the grey weather from Belgium.'],
        availableSizes: ['S', 'M', 'L', 'XL']
    },
    {
        name: 'Hoodie Deep Blue',
        price: 80,
        images: [hoodieBlueIncline, hoodieBlueFace, hoodieBlueDosV3],
        descriptionLines: ['This hoodie is entirely designed and created in Belgium.',
            'Color’s inspired by the deep blue from Pantone.'],
        availableSizes: ['S', 'M', 'L']
    },
    {
        name: 'Hoodie Brun',
        price: 80,
        images: [hoodieBrunIncline, hoodieBrunFondClair, hoodieBrunDosV3],
        descriptionLines: ['This hoodie is entirely designed and created in Belgium.',
            'Color’s inspired by the cacao marron from Travis Scott.'],
        availableSizes: ['S', 'M', 'L', 'XL']
    },
    {
        name: 'Hoodie Green',
        price: 80,
        images: [hoodieGreenIncline, hoodieGreenFace, hoodieGreenDosV3],
        descriptionLines: ['This hoodie is entirely designed and created in Belgium.',
            'Color’s inspired by the green racing from Porsche.'],
        availableSizes: ['S', 'M', 'L', 'XL']
    }
]

</script>

<style scoped></style>