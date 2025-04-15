<template>
    <NavBar />
    <div class="about-container">
        <BackToShopButton />

        <div class="about-content">
            <h1>About the Bernito Corporation</h1>
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
            <p><strong>Join the Bernito Corporation now!</strong></p>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import BackToShopButton from '@/components/BackToShopButton.vue'
import Footer from '@/components/Footer.vue'
</script>


<style scoped>
.about-container {
    padding: 2rem;
    max-width: 700px;
    margin: 0 auto;
    text-align: left;
    line-height: 1.6;
}

.about-content h1 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
}

.about-content p {
    margin-bottom: 1rem;
}
</style>
