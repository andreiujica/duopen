<template lang="pug">
textarea(v-model="code" @input="onCodeChange")
</template>

<script>
import io from 'socket.io-client'

export default {
  data() {
    return {
      socket: null,
      code: '',
    }
  },
  mounted() {
    this.socket = io('http://localhost:8000') // Point to your server address

    this.socket.on('code-update', (updatedCode) => {
      this.code = updatedCode
    })
  },
  methods: {
    onCodeChange() {
      console.log('onCodeChange triggered, emitting send-code')
      this.socket.emit('code-change', this.code)
    },
  },
}
</script>
