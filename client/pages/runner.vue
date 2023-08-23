<script setup>
useSeoMeta({
  title: "Runner",
});

definePageMeta({
  layout: "dashboard",
  middleware: ["auth", "check-room"],
});
</script>

<template>
  <RunnerPreview class="w-full h-full" />
</template>
