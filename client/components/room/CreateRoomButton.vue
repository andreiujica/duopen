<template lang="pug">
div
  button(@click="createRoom" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded") Create Room
  div(v-if="roomCode" class="mt-4 text-lg font-semibold") Your Room Code: {{ roomCode }}
</template>

<script>
export default {
  data() {
    return {
      roomCode: '',
    }
  },
  methods: {
    createRoom() {
      this.$socket.emit('create-room', {}, (code) => {
        this.roomCode = code
        this.$emit('room-created', code)
      })
    },
  },
}
</script>
