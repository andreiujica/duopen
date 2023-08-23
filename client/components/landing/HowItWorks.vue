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
  <div class="flex flex-col items-center w-full sm:w-3/4 lg:w-2/3">
    <div class="text-3xl sm:text-4xl font-bold text-center mb-8 mt-16 sm:mt-32">
      How does it work?
    </div>
    <div class="relative mx-4 sm:m-10">
      <!-- Vertical Line -->
      <div
        class="sm:absolute sm:left-1/2 sm:h-full sm:border-l-2 sm:border-gray-300"
      ></div>

      <!-- Steps -->
      <div class="flex flex-col">
        <div
          v-for="content in contents"
          :key="content.title"
          class="flex mb-8 w-full sm:w-1/2"
          :class="
            content.direction === 'left' ? 'sm:self-start' : 'sm:self-end'
          "
        >
          <div
            :class="
              content.direction === 'left'
                ? 'text-center sm:text-right sm:mr-8'
                : 'text-center sm:text-left sm:ml-8'
            "
          >
            <UIcon
              :name="content.icon"
              class="w-8 h-8 mx-auto sm:mx-0 bg-primary-400"
            />
            <div class="font-semibold text-lg mt-2">{{ content.title }}</div>
            <div class="font-light mt-2 sm:mt-4">
              {{ content.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
