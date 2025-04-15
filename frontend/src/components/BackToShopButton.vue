<template>
    <button class="btn btn-white back-btn" @click="goBack">
        ← back to shop
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
    font-size: 0.9rem;
    margin: 1rem 0;
}
</style>
