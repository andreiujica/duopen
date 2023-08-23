<script setup>
useSeoMeta({
  title: "Whiteboard",
});

definePageMeta({
  layout: "dashboard",
  middleware: ["auth", "check-room"],
});
</script>

<template>
  <Whiteboard class="w-full h-full" />
</template>
