<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<template>
  <RunnerPreview class="w-full h-full" />
</template>
