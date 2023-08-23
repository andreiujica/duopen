<script setup></script>

<template>
  <div class="flex flex-col w-screen h-screen bg-white dark:bg-gray-900">
    <TopNavbar />
    <div class="h-[calc(100vh-4rem)]">
      <slot />
    </div>
  </div>
</template>
