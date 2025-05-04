<template>
    <div class="clotheContainer cursor-pointer" @click="$emit('click')">
        <img :src="image" :alt="name" class="hoodie-blue-incline imgHome" />
        <div class="infoClothe">
            <span class="price">{{ price }}€</span>
            <h3 class="nameClothe">{{ name }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    image: string
    name: string
    price: number
}
const props = defineProps<Props>()
</script>

<style scoped>
/* Votre CSS spécifique si besoin */
</style>