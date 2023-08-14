<template lang="pug">
p lalala
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      roomCode: undefined,
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
