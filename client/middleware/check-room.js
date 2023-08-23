import { useRoomsStore } from '~/stores/rooms';

export default defineNuxtRouteMiddleware((to, from) => {
    const roomsStore = useRoomsStore();

    // If we're in build mode (i.e., prerendering), skip the middleware check.
    if (process.server && process.static) return;

    // Check if username or avatarColor is undefined or null
    if (!roomsStore.getCurrentRoom) {
        // Redirect to join-room or any other desired page
        if (to.path !== '/join-room') {
            return navigateTo('/join-room');
        }
    }
    else {
        // Redirect to home or any other desired page
        if (to.path === '/join-room') {
            return navigateTo('/editor');
        }
    }
});