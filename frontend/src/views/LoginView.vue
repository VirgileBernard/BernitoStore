<template>
    <NavBar></NavBar>


    <div class="login-container">
        <img src="../assets/img/bernitologo2k24.png" alt="Bernito Logo" class="logo" />



        <form @submit.prevent="handleLogin" class="login-form">
            <button type="button" class="back-button">← back to shop</button>

            <label for="email">your mail :</label>
            <input type="text" id="email" v-model="username" />

            <label for="password">your password :</label>
            <input type="password" id="password" v-model="password" />

            <p class="forgot">I forgot my password</p>

            <button type="submit" class="login-button">login</button>
            <button type="button" class="register-button">i’m new here</button>
        </form>
    </div>


</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { useAuthStore } from '..//store/auth'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import Navbar from '../components/NavBar.vue'


defineComponent({
    name: 'LoginView',
    components: {
        Navbar
    }
})

onMounted(() => {
    if (authStore.accessToken) {
        router.push('/home')
    }
})


const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

async function handleLogin() {
    try {
        console.log('Tentative de login :', username.value, password.value)

        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        })

        if (!response.ok) throw new Error('Erreur de connexion')

        const data = await response.json()


        authStore.loginSuccess(data.access_token, data.refresh_token, username.value)
        router.push('/home')
    } catch (err) {
        alert('Échec de la connexion')
        console.error(err)
    }
}
</script>


<style>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-width: 400px;
    margin: auto;
    font-family: sans-serif;
    background-color: var(--color-bg);
    border: 1px solid #ccc;
    margin-top: 5vh;
    width: 90vw;
}

.logo {
    width: 150px;
    margin-bottom: 0.5rem;
}



.login-form {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.back-button {
    align-self: flex-start;
    background: none;
    border: none;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    cursor: pointer;
}



.forgot {
    text-align: right;
    font-size: 0.8rem;
    color: grey;
    margin-bottom: 1.5rem;
}

.login-button {
    background: white;
    border: 1px solid black;
    padding: 0.6rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 1rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.register-button {
    background: #444;
    color: white;
    border: none;
    padding: 0.6rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
