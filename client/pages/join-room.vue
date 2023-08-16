<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<template>
  <div class="flex items-center justify-center h-full w-full">
    <RoomPlaceholder />
  </div>
</template>
