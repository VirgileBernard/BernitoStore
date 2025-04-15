<template>

    <NavBar />
    <header>
        <div class="backContainer">
            <BackToShopButton />
        </div>
        <BrandHeader />
    </header>

    <div class="about-container">
        <div class="about-text">
            <h1>About us</h1>
            <p>
                Born out of a passion for sneakers and a desire to unite a community around each new release, the
                Bernito Corporation dedicated itself to buying and reselling rare sneakers, guiding its members through
                prize draws and maximising their chances of acquiring these exclusive pieces. Over time, the resale
                craze faded, but the community spirit and strong identity of Bernito Corporation remained intact.
            </p>
            <p>
                Today, we keep this adventure alive through the creation of merchandise and the development of new
                projects. Every item in our textile collections is designed and handmade in Belgium, from cutting to
                embroidery or printing, to ensure that our products are original and of the highest quality.
            </p>
            <p>
                Our ambition remains the same: to share our ideas, bring enthusiasts together and offer services that
                reflect our values of mutual help and creativity.
            </p>
            <p>Join the Bernito Corporation now!</p>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import BackToShopButton from '@/components/BackToShopButton.vue'
import Footer from '@/components/Footer.vue'
import BrandHeader from '../components/BrandHeader.vue';
</script>


<style scoped>
/* header .backContainer {
    margin-top: 2vh;
    margin-left: 5vw;
} */

.brand-header {
    margin-top: 2vh;
}

.about-container {
    max-width: 90%;
    margin: 0 auto;
}

.about-text p {
    text-align: left;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.5;
}

.about-text p:last-child {
    font-weight: bolder;
    margin-top: 1.5rem;
    text-align: center;

}
</style>
