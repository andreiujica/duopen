<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["auth", "check-room"],
});
</script>

<template>
  <Whiteboard class="w-full h-full" />
</template>
