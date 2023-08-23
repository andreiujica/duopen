<script setup>
const contents = [
  {
    icon: "i-tabler-users-group",
    title: "Collaborative Coding",
    description:
      "Real-time code collaboration that brings your ideas to life seamlessly.",
  },
  {
    icon: "i-tabler-message",
    title: "Chat Integration",
    description:
      "Communicate effortlessly. Built-in chat ensures you're always in sync with your teammates.",
  },
  {
    icon: "i-tabler-paint",
    title: "Whiteboard",
    description:
      "Visualize your ideas with our built-in whiteboard. Brainstorming has never been easier.",
  },
  {
    icon: "i-tabler-arrows-join",
    title: "Room Support",
    description:
      "Create a room and invite your friends. It's that simple. No sign-up required.",
  },
  {
    icon: "i-tabler-color-swatch",
    title: "Dark & White Themes",
    description: "Choose between dark and white themes. Crafted for your eyes.",
  },
  {
    icon: "i-tabler-code",
    title: "Instant Preview",
    description:
      "See your code in action. As you code, get live previews of your HTML, CSS, and JavaScript.",
  },
  {
    icon: "i-tabler-brand-vscode",
    title: "Full-Featured Editor",
    description:
      "Our editor is powered by CodeMirror, the same editor that powers VS Code.",
  },
  {
    icon: "i-tabler-brand-nuxt",
    title: "Great Tech Stack",
    description:
      "Powered by cutting-edge technologies: Nuxt 3, Express, and Socket.io for real-time brilliance.",
  },
];
</script>

<template>
  <div
    class="flex flex-col items-center mt-8 sm:mt-16 lg:mt-32 w-11/12 sm:w-4/5 lg:w-3/4"
  >
    <span class="text-3xl sm:text-4xl font-semibold tracking-tighter">
      Features
    </span>
    <span
      class="mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg font-light w-11/12 sm:w-3/5 text-center mb-2 sm:mb-4"
    >
      Duopen is packed with features that make it the ultimate coding sandbox
      for students and teams.
    </span>
  </div>
  <div
    class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 w-11/12 sm:w-4/5 lg:w-3/4 divide-x divide-y divide-gray-200 dark:divide-gray-600 rounded-lg border border-gray-200 dark:border-gray-700"
  >
    <div v-for="content in contents" class="p-2 sm:p-4">
      <UIcon :name="content.icon" class="w-6 sm:w-8 h-6 sm:h-8" />
      <div class="mt-2 text-xs sm:text-sm font-semibold">
        {{ content.title }}
      </div>
      <div class="text-xs sm:text-sm font-light mt-2">
        {{ content.description }}
      </div>
    </div>
  </div>
</template>
