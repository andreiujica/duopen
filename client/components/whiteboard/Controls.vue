<script setup>
const currentColor = ref("#000000");
const currentLineWidth = ref(2);
const currentTool = ref("pen");

const emit = defineEmits([
  "update:tool",
  "update:color",
  "update:lineWidth",
  "clearDrawing",
]);

const setTool = (tool) => {
  currentTool.value = tool;
  emitUpdate();
};

const emitUpdate = () => {
  emit("update:tool", currentTool.value);
  emit("update:color", currentColor.value);
  emit("update:lineWidth", currentLineWidth.value);
};

watch(currentColor, emitUpdate);
watch(currentLineWidth, emitUpdate);
</script>

<template>
  <div class="controls flex flex-row p-2">
    <UButtonGroup size="xl">
      <UButton
        :color="currentTool === 'pen' ? 'primary' : 'gray'"
        icon="i-heroicons-pencil-20-solid"
        @click="setTool('pen')"
      />
      <UButton
        :color="currentTool === 'square' ? 'primary' : 'gray'"
        icon="i-heroicons-stop-20-solid"
        @click="setTool('square')"
      />
      <UButton
        :color="currentTool === 'circle' ? 'primary' : 'gray'"
        icon="i-tabler-circle-filled"
        @click="setTool('circle')"
      />
      <UButton
        :color="currentTool === 'text' ? 'primary' : 'gray'"
        icon="i-tabler-text-recognition"
        @click="setTool('text')"
      />
      <UButton
        :color="currentTool === 'eraser' ? 'primary' : 'gray'"
        icon="i-mdi-eraser"
        @click="setTool('eraser')"
      />
    </UButtonGroup>

    <div
      class="flex flex-row rounded-md grow border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 items-center space-x-4 pr-4 ml-4"
    >
      <input
        class="rounded-md p-2 bg-primary w-11 h-11 cursor-pointer"
        type="color"
        v-model="currentColor"
      />
      <URange v-model="currentLineWidth" :min="1" :max="10" size="sm" />
    </div>

    <UButton
      icon="i-heroicons-trash-20-solid"
      color="gray"
      @click="$emit('clearDrawing')"
      size="xl"
      :ui="{ base: 'ml-4' }"
    />
  </div>
</template>
