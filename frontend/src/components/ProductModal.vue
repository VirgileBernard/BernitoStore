<template>
    <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        @click.self="$emit('update:modelValue', false)">
        <div class="relative rounded-lg shadow-lg overflow-y-auto p-6  bg-[var(--color-lightwhite)]"
            :style="{ width, maxHeight }" @click.stop>
            <div class="mb-4">
                <slot name="header" />
            </div>
            <div class="mb-4">
                <slot />
            </div>
            <div>
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue: boolean
    width?: string
    maxHeight?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

// valeurs par défaut
const width = props.width ?? '600px'
const maxHeight = props.maxHeight ?? '80vh'
</script>

<style scoped>
/* optionnel, votre thème ici */
</style>