<script setup>
const roomsStore = useRoomsStore();

// Computed
const participants = computed(() => {
  return roomsStore.getParticipants;
});
const participantsVisible = ref(true);
</script>

<template>
  <div
    class="flex flex-row w-full justify-between border-b py-2 border-b-gray-200 dark:border-b-gray-700 items-center mb-4 max-h-[1/2]"
  >
    <h3 class="w-full font-medium text-slate-600 dark:text-slate-400">
      {{ "Participants" }}
    </h3>

    <UToggle
      on-icon="i-heroicons-eye-20-solid"
      off-icon="i-heroicons-eye-slash-20-solid"
      v-model="participantsVisible"
      class="ml-auto"
    />
  </div>

  <div v-if="participantsVisible" class="flex flex-col">
    <div
      v-for="participant in participants"
      class="flex flex-row items-center space-x-2 mb-2"
    >
      <UserAvatar
        :username="participant.username"
        :color="participant.avatarColor"
        :size="8"
      />
      <span class="text-sm font-medium text-slate-600 dark:text-slate-400">{{
        participant.username
      }}</span>
    </div>
  </div>
</template>
