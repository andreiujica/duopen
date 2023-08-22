<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<template>
  <Whiteboard class="w-full h-full" />
</template>
