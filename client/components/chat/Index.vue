<script setup>
// Composables
const roomsStore = useRoomsStore();
const userStore = useUserStore();
const codeStore = useCodeStore();
const chatStore = useChatStore();
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

$io.on("newMessage", (message) => {
  console.log("new message", message);
  chatStore.addMessage({
    user: message.user,
    message: message.message,
  });
});

// Methods
const leaveRoom = () => {
  $io.emit("leaveRoom", {
    roomCode: roomsStore.getCurrentRoom,
    user: userStore.getUser,
  });
  roomsStore.leaveRoom();
  codeStore.clearCode();
  chatStore.clearMessages();
  router.push({ path: "/join-room" });
};
</script>

<template>
  <UCard
    :ui="{
      base: 'w-96 flex flex-col border border-gray-200 dark:border-gray-700 h-[calc(100vh-8rem)]',
      body: {
        base: 'flex flex-col h-[calc(100vh-12rem)]',
      },
    }"
  >
    <template #header>
      <div class="flex flex-row space-x-2 items-center justify-between">
        <h2 class="font-semibold text-lg leading-tight">
          {{ "Room: " }}
          {{ roomsStore.getCurrentRoom }}
        </h2>
        <UButton color="red" @click="leaveRoom">
          {{ "Leave Room" }}
        </UButton>
      </div>
    </template>

    <ChatParticipants class="h-[calc(1/3 * (100vh-12rem))]" />
    <ChatMessages class="h-[calc(2/3 * (100vh-12rem))]" />
  </UCard>
</template>
