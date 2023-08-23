<script setup>
const contents = [
  {
    icon: "i-tabler-hexagon-1-filled",
    title: "Create or Join",
    description:
      "Kickstart your collaborative journey by creating a room or joining an existing one.",
    direction: "left",
  },
  {
    icon: "i-tabler-hexagon-2-filled",
    title: "Collaborate & Code",
    description:
      "Dive into coding with integrated chat. Experience seamless collaboration.",
    direction: "right",
  },
  {
    icon: "i-tabler-hexagon-3-filled",
    title: "Run & Preview",
    description:
      "Execute your code seamlessly with our code runner. Instantly preview HTML, CSS, and JavaScript outputs in real-time.",
    direction: "left",
  },
  {
    icon: "i-tabler-hexagon-4-filled",
    title: "Brainstorm on Whiteboard",
    description:
      "Bring your ideas to life. Sketch, draw, and visualize your ideas with our built-in whiteboard.",
    direction: "right",
  },
];
</script>

<template>
  <div class="flex flex-col items-center w-3/4">
    <div class="text-4xl font-bold text-center mb-8 mt-32">
      How does it work?
    </div>
    <div class="relative m-10">
      <!-- Vertical Line -->
      <div class="absolute left-1/2 h-full border-l-2 border-gray-300"></div>

      <!-- Steps -->
      <div class="flex flex-col">
        <div
          v-for="content in contents"
          :key="content.title"
          class="flex mb-8 w-1/2"
          :class="content.direction === 'left' ? 'self-start' : 'self-end'"
        >
          <div
            :class="
              content.direction === 'left'
                ? 'text-right mr-8'
                : 'text-left ml-8'
            "
          >
            <UIcon :name="content.icon" class="w-8 h-8" />
            <div class="font-semibold text-lg">{{ content.title }}</div>
            <div class="font-light">
              {{ content.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
