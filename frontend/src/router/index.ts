import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ShoppingCart from '../views/ShoppingCart.vue'


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/home',
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
        component: ShoppingCart
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
