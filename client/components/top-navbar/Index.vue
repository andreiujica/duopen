<script setup>
const userStore = useUserStore();

const router = useRouter();
const isIndexPage = computed(() => router.currentRoute.value.path === "/");
</script>

<template>
  <div
    class="w-full flex flex-row justify-between items-center h-16 border-b border-b-gray-200 dark:border-b-gray-600 px-4"
  >
    <Logo />
    <div class="flex flex-row items-center space-x-1">
      <TopNavbarColorModeButton />
      <TopNavbarGithubButton />
      <TopNavbarUserMenu v-if="userStore.getUserIsLoggedIn" class="ml-16" />
      <UButton v-else-if="isIndexPage" to="/login" class="ml-16">
        Try Duopen Now
      </UButton>
    </div>
  </div>
</template>
