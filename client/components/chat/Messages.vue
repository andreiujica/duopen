<script setup>
const chatStore = useChatStore();
const userStore = useUserStore();
const roomStore = useRoomsStore();

const state = reactive({
  message: "",
});
const { $io } = useNuxtApp();

const chatVisible = ref(true);

const messages = computed(() => chatStore.getMessages);

const isFirstInSequence = (index) => {
  if (index === 0) return true;
  const currentMessage = messages.value[index];
  const previousMessage = messages.value[index - 1];

  // Check if current and previous messages are defined
  if (!currentMessage || !previousMessage) return false;

  return currentMessage.user.username !== previousMessage.user.username;
};

const sendMessage = () => {
  if (state.message.trim() === "") return;
  console.log("Sending message", state.message);

  $io.emit("sendMessage", {
    message: state.message,
    user: userStore.getUser,
    room: roomStore.getCurrentRoom,
  });

  chatStore.addMessage({
    user: userStore.getUser,
    message: state.message,
  });

  state.message = "";
};
</script>

<template>
  <div class="flex flex-col grow overflow-y-auto">
    <div
      class="flex flex-row w-full justify-between border-b py-2 mt-8 border-b-gray-200 dark:border-b-gray-700 items-center mb-4"
    >
      <h3 class="w-full font-medium text-slate-600 dark:text-slate-400">
        {{ "Chat" }}
      </h3>
      <UToggle
        on-icon="i-heroicons-eye-20-solid"
        off-icon="i-heroicons-eye-slash-20-solid"
        v-model="chatVisible"
        class="ml-auto"
      />
    </div>

    <div
      v-if="chatVisible"
      class="flex flex-col grow justify-between overflow-y-auto"
    >
      <div class="flex flex-col grow overflow-y-auto">
        <div
          v-if="messages.length != 0"
          v-for="(message, idx) in messages"
          :key="message.user.username"
          class="flex space-x-2 mb-2 items-end"
          :class="{
            'flex-row-reverse space-x-reverse':
              message.user.username === userStore.getUser.username,
            'flex-row': message.user.username !== userStore.getUser.username,
          }"
        >
          <UserAvatar
            :username="message.user.username"
            :color="message.user.avatarColor"
            :size="8"
            class="flex-shrink-0"
          />
          <div class="flex flex-col max-w-full overflow-y-auto">
            <span
              v-if="isFirstInSequence(idx)"
              class="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1"
            >
              {{ message.user.username }}
            </span>
            <div
              class="text-sm px-2 py-1 rounded-md max-w-full break-normal"
              :class="{
                'bg-primary-200 dark:bg-primary-600':
                  message.user.username === userStore.getUser.username,
                'bg-gray-200 dark:bg-gray-700':
                  message.user.username !== userStore.getUser.username,
              }"
            >
              {{ message.message }}
            </div>
          </div>
        </div>

        <div
          v-else
          class="flex flex-row grow items-center justify-center space-x-2 mb-2"
        >
          <span class="text-sm font-medium text-slate-600 dark:text-slate-400">
            No messages yet :(
          </span>
        </div>
      </div>

      <UInput
        v-model="state.message"
        placeholder="Send a message..."
        @keyup.enter="sendMessage"
        :ui="{
          wrapper: 'relative grow mx-2 mb-2 mt-4 flex items-end',
        }"
      >
      </UInput>
    </div>
  </div>
</template>
