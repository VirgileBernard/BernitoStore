<template>
    <div class="login-container">
        <img src="../assets/img/logoSansTexte.png" alt="Bernito Logo" class="logo" />



        <form @submit.prevent="handleLogin" class="login-form">

            <label for="email">your mail :</label>
            <input type="text" id="email" v-model="username" placeholder="your mail" />

            <label for="password">your password :</label>
            <input type="password" id="password" v-model="password" placeholder="your password" />

            <p class="forgot">I forgot my password</p>

            <button type="submit" class="btn login-button btn-grad">login</button>
            <button type="button" class="btn register-button btn-secondGrad">i’m new here</button>
        </form>
    </div>

    <AppSnackbar ref="snackbarRef" v-model:show="snackbar.show" :message="snackbar.message" :type="snackbar.type" />


</template>

<script setup lang="ts">
import { defineComponent, onBeforeUnmount, reactive, ref } from 'vue'
import { useAuthStore } from '..//store/auth'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import AppSnackbar from '../components/AppSnackbar.vue'


defineComponent({
    name: 'LoginView',
})

onMounted(() => {
    if (authStore.accessToken) {
        router.push('/')
    }
})
// ref vers ton composant
// ton état local snackbar})




const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()
// État de la snackbar
const snackbar = reactive({
    show: false,
    message: '',
    type: 'error' as 'success' | 'error' | 'info'
})
const snackbarRef = ref<InstanceType<typeof AppSnackbar> | null>(null)

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
        if (!response.ok) {
            snackbar.message = 'Échec de la connexion. Vérifiez vos identifiants.'
            snackbar.type = 'error'
            snackbar.show = true
            return
        }


        const data = await response.json()
        authStore.loginSuccess(data.access_token, data.refresh_token, username.value)
        router.push('/')
    } catch (err) {
        snackbar.message = 'Une erreur est survenue. Réessayez plus tard.'
        snackbar.type = 'error'
        snackbar.show = true
        console.error(err)
    }
}

onBeforeUnmount(() => {
    document.body.style.overflow = ''
})

</script>


<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    max-width: 700px;
    margin: auto;
    margin-top: 10vh;
}

.logo {
    scale: 110%;
    width: 150px;
    margin-bottom: 5vh;
}



.login-form {
    width: 100%;
    display: flex;
    flex-direction: column;
}



.btn-secondGrad {
    background-image: linear-gradient(to right, #948E99 0%, #2E1437 51%, #948E99 100%)
}

.btn-secondGrad {
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
}

.btn-secondGrad:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
}




.forgot {
    text-align: right;
    font-size: 0.8rem;
    color: grey;
    margin-bottom: 1.5rem;
}
</style>
