<script setup>
useSeoMeta({
  title: "Home",
});
</script>

<template>
  <div class="flex flex-col w-screen bg-white dark:bg-gray-900 items-center">
    <TopNavbar />
    <LandingHero />
    <LandingFeatures />
    <LandingHowItWorks />
  </div>
</template>
