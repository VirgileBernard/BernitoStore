<template>
    <div class="flex justify-between mt-8">
        <button @click="$emit('fav')"
            class="px-4 py-2 border rounded hover:bg-[var(--redLiked)] flex items-center gap-2">
            add to fav <i class="fa fa-heart"></i>
        </button>
        <button @click="$emit('cart')"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2">
            add to cart <i class="fa fa-shopping-cart"></i>
        </button>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'fav'): void
    (e: 'cart'): void
}>()
</script>

<style scoped>
/* ajustements si besoin */
</style>