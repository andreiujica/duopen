<script setup>
const state = reactive({
  roomId: "",
});

const roomsStore = useRoomsStore();
const userStore = useUserStore();

const router = useRouter();
const { $io } = useNuxtApp();

const createRoom = () => {
  $io.emit("createRoom", { user: userStore.getUser }, (roomCode) => {
    roomsStore.joinRoom(roomCode);
    router.push({ path: "/editor" });
  });
};

const joinRoom = (roomCode) => {
  $io.emit("joinRoom", { roomCode, user: userStore.getUser }, (success) => {
    if (success) {
      roomsStore.joinRoom(roomCode);
      $io.emit("fetchUsersInRoom", { roomCode }, (users) => {
        console.log(users);
        roomsStore.setParticipants(users);
      });
      router.push({ path: "/editor" });
    } else {
      console.error(response.message);
    }
  });
};
</script>

<template>
  <UCard
    :ui="{
      base: 'w-1/2 h-1/2 shadow-md flex flex-col',
      body: {
        base: 'grow px-0',
      },
    }"
  >
    <template #header>
      <h2 class="font-semibold text-xl leading-tight">
        {{ "Choose your adventure!" }}
      </h2>
    </template>

    <div class="grid grid-cols-1 h-full md:grid-cols-2">
      <div
        class="flex flex-col justify-center items-center h-full md:border-r md:border-r-gray-200 md:dark:border-r-gray-800"
      >
        <h3
          class="w-52 md:w-80 text-sm font-light mb-8 text-slate-600 dark:text-slate-400"
        >
          <span class="font-medium">Create a Room:</span>
          Craft your own space, inviting others to join in for a shared
          experience.
        </h3>
        <UButton color="green" block @click="createRoom" class="w-52 md:w-80">
          {{ "Create Room" }}
        </UButton>
      </div>

      <div class="flex flex-col justify-center items-center h-full">
        <h3
          class="w-52 md:w-80 text-sm font-light mb-8 text-slate-600 dark:text-slate-400"
        >
          <span class="font-medium">Join a Room:</span>
          Step into an existing space, collaborating with fellow participants.
        </h3>

        <div
          class="flex flex-row justify-center items-center w-52 md:w-80 space-x-2"
        >
          <UInput
            v-model="state.roomId"
            placeholder="Room ID"
            class="w-32 md:w-52"
          />
          <UButton color="blue" @click="joinRoom(state.roomId)">
            {{ "Join Room" }}
          </UButton>
        </div>
      </div>
    </div>
  </UCard>
</template>
