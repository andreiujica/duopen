<script setup>
const { duopen } = useAppConfig();

useHead({
  title: duopen.name,
  titleTemplate: `%s - ${duopen.name}`,
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
