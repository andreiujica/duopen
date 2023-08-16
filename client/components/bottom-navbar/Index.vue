<script setup>
import { storeToRefs } from "pinia";

const router = useRouter();

// Get the active tab from the store, we will use it to highlight the active tab
const tabStore = useTabStore();
const activeTab = storeToRefs(tabStore);

const tabs = [
  {
    label: "Code Editor",
    icon: "i-heroicons-code-bracket-square-solid",
    route: "/editor",
  },
  {
    label: "Code Runner",
    icon: "i-heroicons-forward-solid",
    route: "/runner",
  },
  {
    label: "Chat",
    icon: "i-heroicons-chat-bubble-left-solid",
    route: "/chat",
  },
  {
    label: "Whiteboard",
    icon: "i-heroicons-paint-brush-solid",
    route: "/whiteboard",
  },
];

function goToPage(tab) {
  // Set the active tab to the one that was clicked
  tabStore.setCurrentTab(tab.label);
  // Navigate to the page
  router.push({ path: tab.route });
}
</script>

<template>
  <div
    class="w-full flex flex-row justify-around items-center h-16 px-4 space-x-2 border-t border-t-gray-200 dark:border-t-gray-600"
  >
    <div
      v-for="tab in tabs"
      :key="tab.label"
      class="flex flex-row items-center justify-center py-3 px-3 rounded-md shadow-sm cursor-pointer grow space-x-2 bg-gray-100 hover:bg-primary-200 dark:bg-gray-800 dark:hover:bg-primary-900"
      :class="{
        'bg-primary-200 dark:bg-primary-900':
          activeTab.currentTab.value === tab.label,
      }"
      @click="goToPage(tab)"
    >
      <UIcon :name="tab.icon" class="bg-primary-400 w-6 h-6" />
      <p class="text-sm font-medium">{{ tab.label }}</p>
    </div>
  </div>
</template>
