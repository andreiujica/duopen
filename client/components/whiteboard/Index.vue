<script setup>
import { ref } from "vue";

const tool = ref("pen");
const color = ref("#000000");
const lineWidth = ref(2);
</script>

<template>
  <div class="whiteboard">
    <WhiteboardControls
      :tool="tool"
      :color="color"
      :lineWidth="lineWidth"
      @update:tool="tool = $event"
      @update:color="color = $event"
      @update:lineWidth="lineWidth = $event"
      @clearDrawing="$refs.canvasio.clear()"
      class="absolute top-16 left-0 z-10 w-2/5"
    />
    <WhiteboardCanvas
      ref="canvasio"
      :tool="tool"
      :color="color"
      :lineWidth="lineWidth"
      class="w-full h-full block"
    />
  </div>
</template>
