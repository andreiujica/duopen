<template lang="pug">
c-box(d="flex" flexDirection="column" flex="1" p="5" bg="gray.900")
  // Main Section
  c-box(d="flex" flex="1")
    
    // Code Editor
    c-box(flex="1" pr="4")
      CodeEditor(:roomCode="$route.params.code")

    // Participants Sidebar
    c-box(width="20%" bg="gray.800" borderRadius="md" p="4" d="flex" flexDir="column" justifyContent="space-between")
      c-box
        c-text(fontWeight="bold" mb="3" color="white") Participants
        c-stack(spacing="2")
          c-box(v-for="user in participants" :key="user.id") {{ user.name }}
      c-button(variantColor="red" mt="4" @click="leaveTheRoom") Leave Room
</template>

<script>
export default {
  name: 'RoomPage',
  data() {
    return {
      participants: [
        { id: '1', name: 'John' },
        { id: '2', name: 'Jane' },
      ],
    }
  },
  methods: {
    async leaveTheRoom() {
      try {
        await this.$store.dispatch('room/leaveRoom', this.$route.params.code)
        this.$router.push('/app/rooms/').catch((err) => {
          console.error('Router push error:', err)
        })
      } catch (error) {
        console.error('Error leaving room:', error.message)
      }
    },
  },
}
</script>
