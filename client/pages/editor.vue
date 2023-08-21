<script setup>
const { $io } = useNuxtApp();

const items = [
  {
    key: "html",
    label: "HTML",
  },
  {
    key: "css",
    label: "CSS",
  },
  {
    key: "js",
    label: "JS",
  },
];

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<template>
  <div class="flex flex-row w-full h-full">
    <UTabs :items="items" class="w-[calc(100vw-24rem)] h-full">
      <template #item="{ item }">
        <EditorMain v-if="$io" class="w-full h-full" :lang="item.key" />
      </template>
    </UTabs>
    <Chat v-if="$io" class="w-96 h-full" />
  </div>
</template>
