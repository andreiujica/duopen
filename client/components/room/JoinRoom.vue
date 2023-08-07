<template lang="pug">
div
  input(v-model="codeToJoin" placeholder="Enter room code" class="border-2 border-gray-300 p-2 rounded")
  button(@click="joinRoom" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2") Join
  div(v-if="joined" class="mt-4 text-lg font-semibold") You have joined room: {{ codeToJoin }}
  div(v-if="error" class="mt-4 text-red-600 font-semibold") {{ error }}
</template>

<script>
export default {
  data() {
    return {
      codeToJoin: '',
      joined: false,
      error: '',
    }
  },
  methods: {
    joinRoom() {
      this.$socket.emit('join-room', this.codeToJoin, (success) => {
        if (success) {
          this.joined = true
          this.error = ''
          this.$emit('room-joined', this.codeToJoin)
        } else {
          this.error = 'Failed to join room. Please check the code.'
        }
      })
    },
  },
}
</script>
