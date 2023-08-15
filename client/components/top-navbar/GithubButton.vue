<script setup>
const { duopen } = useAppConfig();
</script>

<template>
  <UButton
    :to="duopen.project.links.github"
    target="_blank"
    icon="i-heroicons-square-2-stack-solid"
    color="gray"
    variant="ghost"
  />
</template>
