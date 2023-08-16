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
        {{ "Participants" }}
      </h2>
    </template>

    <template #footer>
      <UButton color="red" block @click="leaveRoom">
        {{ "Leave Room" }}
      </UButton>
    </template>
  </UCard>
</template>
