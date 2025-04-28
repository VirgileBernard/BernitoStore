import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/cart',
        name: 'Cart',
        component: ShoppingCartView
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
