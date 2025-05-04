<template>
    <div class="flex gap-2">
        <label v-for="s in sizes" :key="s" class="relative cursor-pointer"
            :class="{ 'opacity-50 cursor-not-allowed': !available.includes(s) }">
            <input type="radio" class="sr-only peer" :value="s" :checked="modelValue === s"
                @change="$emit('update:modelValue', s)" :disabled="!available.includes(s)" />
            <span class="
            px-3 py-1 border rounded transition
            peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
            peer-hover:bg-sky-100
            peer-checked:bg-[var(--color-primary)] peer-checked:text-[var(--color-white)] peer-checked:border-[var(--color-primary)]
            hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]
          ">
                {{ s }}
            </span>
        </label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    sizes: string[]
    available: string[]
    modelValue: string | null
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', val: string): void
}>()
</script>

<style scoped>
/* tes overrides si besoin */
</style>