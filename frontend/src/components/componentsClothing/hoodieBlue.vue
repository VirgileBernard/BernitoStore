<template>
    <div class="clotheContainer" @click="$emit('openModal')">
        <img src="../../assets/img/HoodieBlueIncline.png" alt="hoodie blue incliné"
            class="hoodie-blue-incline imgHome" />
        <div class="infoClothe">
            <span class="price">80€</span>
            <h3 class="nameClothe">Hoodie deep blue</h3>
        </div>
    </div>

</template>


<script lang="ts">
export default {
    name: 'HoodieBlue',
    data() {
        return {
            // Ajoutez ici les données nécessaires pour le composant
        }
    },
    methods: {
        // Ajoutez ici les méthodes nécessaires pour le composant
    }
}



</script>


<style scoped></style>