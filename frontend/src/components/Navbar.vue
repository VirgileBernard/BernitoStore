<template>
    <nav class="navbar">
        <div class="navbar-left">
            <img src="../assets/img/bernitologo2k24.png" alt="Logo" class="logo" />
            <span class="brand">Bernito Corporation</span>
        </div>

        <div class="navbar-right">
            <i class="fas fa-shopping-cart icon"></i>
            <i class="fas fa-bars icon"></i>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-white);
    border-bottom: 1px solid #ccc;
}

.navbar-left {
    display: flex;
    align-items: center;
}

.logo {
    height: 40px;
    margin-right: 1rem;
}

.brand {
    font-weight: bold;
    font-size: 1.2rem;
}

.navbar-right .icon {
    font-size: 1.4rem;
    margin-left: 1rem;
    cursor: pointer;
}
</style>