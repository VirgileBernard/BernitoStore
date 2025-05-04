<template>
    <header>
        <NavBar />

        <BrandHeader />
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
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <ProductDetail v-for="cfg in tshirtsConfig" :key="cfg.name" :product="cfg" />
            </div>
        </div>
    </section>

    <section class="accessoriesSection">
        <div class="accessories">
            <h3 class="sectionTitle">accessories :</h3>
            <!-- tous les composants accessoires -->
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <ProductDetail v-for="cfg in accesConfig" :key="cfg.name" :product="cfg" />
            </div>
        </div>
    </section>


    <Footer />

</template>

<script setup lang="ts">

import NavBar from '../components/NavBar.vue'
import BrandHeader from '../components/BrandHeader.vue'
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

import frontShirtWhite from '../assets/img/frontShirtWhite.png'
import backShirtWhite from '../assets/img/backShirtWhite.png'

import frontBlackShirt from '../assets/img/frontBlackShirt.png'
import backBlackShirt from '../assets/img/backBlackShirt.png'

import faceTapis from '../assets/img/faceTapis.png'
import realisteTapis from '../assets/img/realisteTapis.png'

import drapLit from '../assets/img/drapLit.png'

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

const tshirtsConfig = [
    {
        name: 'Classic White Shirt',
        price: 40,
        images: [frontShirtWhite, backShirtWhite],
        descriptionLines: ['This shirt is entirely designed and created in Belgium.',
            'Colors a classic you should have.'],
        availableSizes: ['S', 'M', 'L', 'XL']
    },
    {
        name: 'Classic Black Shirt',
        price: 40,
        images: [frontBlackShirt, backBlackShirt],
        descriptionLines: ['This shirt is entirely designed and created in Belgium.',
            'Colors a classic you should have.'],
        availableSizes: ['S', 'M', 'L']
    },
]

const accesConfig = [{
    name: 'Bernito Carpet',
    price: 60,
    images: [faceTapis, realisteTapis],
    descriptionLines: ['This carpet is entirely designed and created in Belgium.'],
    availableSizes: ['M']
},
{
    name: 'Bernito Bed Sheet',
    price: 40,
    images: [drapLit],
    descriptionLines: ['This bed sheet is entirely designed and created in Belgium.'],
    availableSizes: ['M']
},]

</script>

<style scoped></style>