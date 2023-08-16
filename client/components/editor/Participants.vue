<template>
  <UCard
    :ui="{
      base: 'h-full w-96 shadow-md flex flex-col',
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
