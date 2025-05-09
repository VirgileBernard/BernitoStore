<template>
    <transition name="fade">
        <div v-if="show" class="snackbar">
            {{ message }}
            <button @click="close" class="ml-4 font-bold">&times;</button>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { watch } from 'vue'

// 1) On définit les props que le parent va passer
const props = defineProps<{
    show: boolean
    message: string
    type?: 'success' | 'error' | 'info'
}>()

// 2) On émet l'événement update:show pour supporter v-model:show
const emit = defineEmits<{
    (e: 'update:show', v: boolean): void
}>()

// 3) Quand `show` devient true, on lance un timer qui fermera tout seul
watch(
    () => props.show,
    (val) => {
        if (val) {
            setTimeout(() => emit('update:show', false), 3000)
        }
    }
)

function close() {
    emit('update:show', false)
}
</script>

<style scoped>
.snackbar {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f44336;
    color: white;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
