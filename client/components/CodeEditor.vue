<template>
  <client-only>
    <codemirror
      ref="cmEditor"
      :value="code"
      :options="cmOptions"
      @input="onCmCodeChange"
    />
  </client-only>
</template>

<script>
import 'codemirror/theme/base16-dark.css'

export default {
  name: 'CodeMirror',
  props: {
    roomCode: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.$socket.on('code-update', (updatedCode) => {
      this.code = updatedCode
    })
  },
  data() {
    return {
      code: 'console.log("Hello, Nuxt and Vue 2!")',
      cmOptions: {
        mode: 'javascript',
        lineNumbers: true,
        theme: 'base16-dark',
      },
    }
  },
  methods: {
    onCmCodeChange(newCode) {
      this.code = newCode
      this.$socket.emit('code-change', { room: this.roomCode, code: this.code })
    },
  },
}
</script>
