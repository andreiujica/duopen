import { useRoomsStore } from '~/stores/rooms';

export default defineNuxtRouteMiddleware((to, from) => {
    const roomsStore = useRoomsStore();

    // Check if username or avatarColor is undefined or null
    if (!roomsStore.getCurrentRoom()) {
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