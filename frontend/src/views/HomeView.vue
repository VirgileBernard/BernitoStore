<template>
    <div>
        <h1>Bienvenue sur Bernito Store, {{ username }} !</h1>

    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../store/auth'

const auth = useAuthStore()
const username = auth.username
</script>