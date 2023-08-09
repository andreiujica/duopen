<template lang="pug">
c-box(d="flex" flexDirection="column" alignItems="center" justifyContent="center" bg="gray.900" flex="1" p="5")
  c-button(variantColor="green" size="lg" @click="createNewRoom") Create a Room
  c-divider(my="5")
  c-stack(spacing="3" direction="row" align="center")
    c-input(v-model="roomCode" placeholder="Enter room code" size="lg")
    c-button(variantColor="blue" @click="joinTheRoom" size="lg") Join
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'RoomsPage',
  data() {
    return {
      roomCode: '',
    }
  },
  methods: {
    async createNewRoom() {
      try {
        await this.$store.dispatch('room/createRoom')
        const roomCode = this.$store.state.room.roomCode
        this.$router.push('/app/rooms/' + roomCode)
      } catch (error) {
        console.error('Error creating room:', error.message)
      }
    },
    async joinTheRoom() {
      try {
        await this.$store.dispatch('room/joinRoom', this.roomCode)
        const roomCode = this.$store.state.room.roomCode
        this.$router.push('/app/rooms/' + roomCode)
      } catch (error) {
        console.error('Error joining room:', error.message)
      }
    },
  },
})
</script>
