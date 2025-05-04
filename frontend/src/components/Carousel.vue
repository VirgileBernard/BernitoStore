<template>
    <div class="mx-auto relative overflow-hidden" :style="{ width, height }">
        <transition :name="transitionName">
            <img :key="activeIndex" :src="images[activeIndex]"
                class="w-full h-full object-contain rounded absolute top-0 left-0 justify-center"
                :alt="`slide ${activeIndex}`" />
        </transition>
        <button class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/75 rounded-full p-2" @click="prev">
            <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/75 rounded-full p-2" @click="next">
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
    images: string[]
    width?: string
    height?: string
    startIndex?: number
}>()

const emit = defineEmits<{
    (e: 'update:activeIndex', idx: number): void
}>()

const activeIndex = ref(props.startIndex ?? 0)
const direction = ref<'left' | 'right'>('left')

const transitionName = computed(() =>
    direction.value === 'left' ? 'slide-left' : 'slide-right'
)

function next() {
    direction.value = 'left'
    activeIndex.value = (activeIndex.value + 1) % props.images.length
    emit('update:activeIndex', activeIndex.value)
}

function prev() {
    direction.value = 'right'
    activeIndex.value =
        (activeIndex.value - 1 + props.images.length) % props.images.length
    emit('update:activeIndex', activeIndex.value)
}

const width = props.width ?? '100%'
const height = props.height ?? '300px'
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.5s ease;
}

.slide-left-enter-from {
    transform: translateX(100%);
}

.slide-left-enter-to {
    transform: translateX(0);
}

.slide-left-leave-from {
    transform: translateX(0);
}

.slide-left-leave-to {
    transform: translateX(-100%);
}

.slide-right-enter-from {
    transform: translateX(-100%);
}

.slide-right-enter-to {
    transform: translateX(0);
}

.slide-right-leave-from {
    transform: translateX(0);
}

.slide-right-leave-to {
    transform: translateX(100%);
}
</style>