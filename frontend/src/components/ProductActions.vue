<template>
    <div class="flex justify-between mt-8">
        <button @click="$emit('fav')" class="px-4 py-2  flex items-center gap-2 btn-grad">
            add to fav <i class="fa fa-heart"></i>
        </button>
        <button @click="$emit('cart')" class="px-4 py-2  flex items-center gap-2 btn-secondGrad">
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
.btn-secondGrad {
    background-image: linear-gradient(to right, #948E99 0%, #2E1437 51%, #948E99 100%)
}

.btn-secondGrad {
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 4px;
    display: block;
}

.btn-secondGrad:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
}
</style>