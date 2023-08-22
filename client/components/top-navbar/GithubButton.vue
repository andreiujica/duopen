<script setup>
const { duopen } = useAppConfig();
</script>

<template>
  <UButton
    :to="duopen.project.links.github"
    target="_blank"
    icon="i-mdi-github"
    color="gray"
    variant="ghost"
  />
</template>
