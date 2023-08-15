<script setup>
const props = defineProps({
  username: {
    type: String,
    default: "?",
  },
  color: {
    type: String,
    default: "blue",
  },
  size: {
    type: Number,
    default: 16,
  },
});

// Derive the initials from the username prop
const initials = computed(() => {
  if (props.username && typeof props.username === "string") {
    // Split by one or more whitespace characters
    const splitName = props.username.trim().toUpperCase().split(/\s+/);
    if (splitName.length > 1) {
      return splitName[0][0] + splitName[1][0];
    }
    return splitName[0][0];
  }
  return "";
});

// Map the color prop to Tailwind's class
const colorClass = computed(() => {
  return `bg-${props.color}-500`;
});

// Map the size prop to a CSS class
const sizeClass = computed(() => {
  return `w-${props.size} h-${props.size}`;
});
</script>

<template>
  <div
    class="rounded-full flex items-center justify-center"
    :class="[colorClass, sizeClass]"
  >
    <span class="text-white font-semibold">{{ initials }}</span>
  </div>
</template>
