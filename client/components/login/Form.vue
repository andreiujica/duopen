<script setup>
const userStore = useUserStore();
const router = useRouter();

const state = ref({
  username: undefined,
  color: undefined,
});

const colorOptions = [
  { label: "Red", color: "red" },
  { label: "Blue", color: "blue" },
  { label: "Green", color: "green" },
  { label: "Orange", color: "orange" },
  { label: "Purple", color: "purple" },
];

const userIsOnMobile = computed(() => {
  const { isMobile } = useDevice();
  console.log(isMobile);
  return isMobile === true;
});

const validate = (state) => {
  const errors = [];
  if (!state.username) errors.push({ path: "username", message: "Required" });
  if (!state.color) errors.push({ path: "color", message: "Required" });
  return errors;
};

const form = ref();

function submit() {
  const isValid = form.value?.validate();
  if (!isValid) return;

  const { username, color } = state.value;
  userStore.setUser(username, color);
  router.push({ path: "/join-room" });
}
</script>

<template>
  <UCard
    v-if="userIsOnMobile"
    :ui="{
      base: 'mx-8',
    }"
  >
    <template #header>
      <h2 class="font-semibold text-lg leading-tight">
        {{ "Sorry!" }}
      </h2>
    </template>

    <h3
      class="w-full text-sm font-light mb-4 text-slate-600 dark:text-slate-400"
    >
      Duopen is not available on mobile devices yet. Please try again on a
      desktop or laptop.
    </h3>

    <UButton to="/" block> Go Back </UButton>
  </UCard>

  <UCard
    v-else
    :ui="{
      base: 'w-2/5 shadow-md',
    }"
  >
    <template #header>
      <h2 class="font-semibold text-xl leading-tight">
        {{ "Welcome to Duopen!" }}
      </h2>
    </template>

    <h3
      class="w-full text-sm font-light mb-4 text-slate-600 dark:text-slate-400"
    >
      Let's create your avatar. It will be displayed to your friends when you
      join a room.
    </h3>

    <div class="flex flex-row w-full">
      <UForm ref="form" :validate="validate" :state="state" class="w-2/3">
        <UFormGroup label="Username" name="username" class="mb-4">
          <UInput v-model="state.username" />
        </UFormGroup>

        <UFormGroup label="Color" name="color" class="mb-6">
          <div class="flex flex-row justify-between space-x-4 mt-2">
            <UButton
              v-for="option in colorOptions"
              :key="option.color"
              :color="option.color"
              @click="state.color = option.color"
            >
              {{ option.label }}
            </UButton>
          </div>
        </UFormGroup>
      </UForm>

      <div class="w-1/3 flex flex-col justify-center items-center">
        <UserAvatar
          :username="state.username"
          :color="state.color"
          :size="16"
        />
        <h3 class="text-sm font-light mt-4 text-slate-600 dark:text-slate-400">
          This will be you.
        </h3>
      </div>
    </div>

    <UButton type="submit" block @click="submit"> Start </UButton>
  </UCard>
</template>
