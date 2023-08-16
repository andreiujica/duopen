<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<template>
  <div class="flex flex-row w-full h-full">
    <EditorMain class="w-[calc(100vw-24rem)] h-full" />
    <EditorParticipants class="w-96 h-full" />
  </div>
</template>
