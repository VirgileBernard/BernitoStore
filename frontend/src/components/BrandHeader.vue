<template>
    <div class="brand-header">
        <video :src="videoSrc" autoplay loop muted playsinline class="brand-video" />
    </div>
</template>

<script setup>
import videoFile from '../assets/video/logo+texte+background.mp4'
const videoSrc = videoFile
</script>

<style scoped>
.brand-header {
    display: flex;
    justify-content: center;
    padding: 2rem;
    border-bottom: 1px solid #ccc;
    background-color: #f4f4f4;
    /* si vous voulez étendre le fond derrière la vidéo */
}

.brand-video {
    max-width: 80%;
    height: 30vh;

    object-fit: contain;
}
</style>