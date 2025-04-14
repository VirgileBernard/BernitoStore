import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: '',
        refreshToken: '',
        username: ''
    }),
    actions: {
        loginSuccess(access: string, refresh: string, username: string) {
            this.accessToken = access
            this.refreshToken = refresh
            this.username = username
        }
    },
    persist: false
})
