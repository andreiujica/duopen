<script setup>
const colorMode = useColorMode();

const currentHeroScreenshot = computed(() => {
  return colorMode.value === "dark"
    ? "/images/hero-dark.png"
    : "/images/hero-light.png";
});
</script>

<template>
  <div class="flex flex-col items-center mt-32 overflow-y-auto w-3/4">
    <span class="text-5xl font-semibold tracking-tighter w-4/5 text-center">
      Collaborate, Code, and Create -
      <span class="text-primary-400"> Together </span>
    </span>
    <span class="mt-4 text-lg font-light w-3/5 text-center mb-4">
      Dive into the ultimate coding sandbox tailored for students and teams.
      Free, open-source, and crafted with collaboration at its core.
    </span>
    <UButton label="Dive In" to="/login" size="xl">
      <template #trailing>
        <UIcon name="i-heroicons-arrow-right-20-solid" />
      </template>
    </UButton>
    <img
      :src="currentHeroScreenshot"
      alt="Duopen App Screenshot"
      class="w-5/6 shadow-2xl dark:shadow-gray-200 rounded-xl mt-8 border border-gray-200 dark:border-gray-700"
    />
  </div>
</template>
