<template>
    <button class="btn btn-white back-btn" @click="goBack">
        <i class="fa-solid fa-arrow-left"></i> back to shop
    </button>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
    router.push('/home') // ou '/' selon ce que tu veux
}
</script>

<style scoped>
.back-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    border: none;
    background: none;
    font-size: 0.9rem;
    cursor: pointer;
    margin-bottom: 1rem;
    margin-top: 2vh;
    margin-left: 5vw;
}
</style>
