<template>
    <button class="back-btn" @click="goBack">
        <span class="circle">
            <i class="fas fa-arrow-left" :class="{ animate: isAnimating }" @mouseenter="triggerAnimation"></i>
        </span>
        <span class="text">back to shop</span>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
    router.push('/')
}

const isAnimating = ref(false)

function triggerAnimation() {
    if (!isAnimating.value) {
        isAnimating.value = true
        setTimeout(() => {
            isAnimating.value = false
        }, 900) // durée de l’animation en ms
    }
}
</script>


<style scoped>
.back-btn {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background: none;
    border: none;
    font-size: 1rem;
    color: var(--color-primary);
    cursor: pointer;
    font-family: inherit;
    margin: 2vh 0 0 3vw;
}

.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    overflow: hidden;
}

.text {
    font-size: 1rem;
}

.animate {
    animation: fly-around-anticipate-rebound 0.9s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

@keyframes fly-around-anticipate-rebound {
    0% {
        transform: translateX(0) scale(1);
        opacity: 1;
    }

    10% {
        transform: translateX(15px) scale(1);
        opacity: 1;
    }

    25% {
        transform: translateX(-80%) scale(0.85);
        opacity: 0;
    }

    75% {
        transform: translateX(80%) scale(0.85);
        opacity: 0;
    }

    90% {
        transform: translateX(0px) scale(1.2);
        opacity: 1;
    }

    100% {
        transform: translateX(0) scale(1);
        opacity: 1;
    }
}

/* animation la flèche qui fait un petit mouvement de haut en bas */
/* .back-btn:hover .circle i {
animation: wiggle 0.4s ease-in-out;
}

@keyframes wiggle {
0% {
transform: translateY(0);
}

25% {
transform: translateY(-2px);
}

50% {
transform: translateY(2px);
}

75% {
transform: translateY(-1px);
}

100% {
transform: translateY(0);
}
} */
</style>
