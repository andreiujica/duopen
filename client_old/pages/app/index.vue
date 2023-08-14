<template lang="pug">
p lalala
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      roomCode: undefined,
    }
  },
  head() {
    return {
      title: 'Dashboard - DuoPen',
    }
  },
  methods: {
    onRoomCreated(code) {
      this.roomCode = code
    },
    onRoomJoined(code) {
      this.roomCode = code
    },
  },
})
</script>
