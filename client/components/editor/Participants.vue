<script setup>
// Composables
const roomsStore = useRoomsStore();
const userStore = useUserStore();
const codeStore = useCodeStore();
const router = useRouter();
const { $io } = useNuxtApp();

$io.on("userJoined", (user) => {
  console.log("user joined", user);
  roomsStore.addParticipant(user);
});

$io.on("userLeft", (user) => {
  console.log("user left", user);
  roomsStore.removeParticipant(user);
});

// Computed
const participants = computed(() => {
  return roomsStore.getParticipants;
});

// Methods
const leaveRoom = () => {
  $io.emit("leaveRoom", {
    roomCode: roomsStore.getCurrentRoom,
    user: userStore.getUser,
  });
  roomsStore.leaveRoom();
  codeStore.clearCode();
  router.push({ path: "/join-room" });
};
</script>

<template>
  <UCard
    :ui="{
      base: 'h-full w-96 flex flex-col border border-gray-200 dark:border-gray-700',
      body: {
        base: 'grow',
      },
    }"
  >
    <template #header>
      <h2 class="font-semibold text-lg leading-tight">
        {{ "Participants ◦ Room: " }}
        {{ roomsStore.getCurrentRoom }}
      </h2>
    </template>

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

    <template #footer>
      <UButton color="red" block @click="leaveRoom">
        {{ "Leave Room" }}
      </UButton>
    </template>
  </UCard>
</template>
