<template lang="pug">
textarea(v-model="code" @input="onCodeChange")
</template>

<script>
export default {
  props: {
    roomCode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      socket: null,
      code: '',
    }
  },
  mounted() {
    this.$socket.on('code-update', (updatedCode) => {
      this.code = updatedCode
    })
  },
  methods: {
    onCodeChange() {
      this.$socket.emit('code-change', { room: this.roomCode, code: this.code })
    },
  },
}
</script>
