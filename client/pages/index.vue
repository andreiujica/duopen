<template lang="pug">
.flex.flex-col.items-center.justify-center.h-screen.w-screen.bg-violet-950
  .flex.flex-row.space-x-2
    RoomCreateRoomButton(@room-created="onRoomCreated")
    RoomJoinRoom(@room-joined="onRoomJoined")
  
  CodeEditor(v-if="roomCode" :roomCode="roomCode")
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
