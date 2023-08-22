import { useUserStore } from '~/stores/user';

export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore();

    // Check if username or avatarColor is undefined or null
    if (!userStore.username || !userStore.avatarColor) {
        // Redirect to login or any other desired page
        if (to.path !== '/login') {
            return navigateTo('/login');
        }
    }
    else {
        // Redirect to home or any other desired page
        if (to.path === '/login') {
            return navigateTo('/editor');
        }
    }
});