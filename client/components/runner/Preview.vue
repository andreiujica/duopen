<script>
import { ref, computed, h, watch } from "vue";

export default {
  setup() {
    const codeStore = useCodeStore();
    const combinedCode = ref("");

    watch(
      () => ({
        html: codeStore.getHtmlCode,
        css: codeStore.getCssCode,
      }),
      (newValues) => {
        combinedCode.value = `
          <html>
            <head>
              <style>
                ${newValues.css}
              </style>
            </head>
            <body>
              ${newValues.html}
            </body>
          </html>
        `;
      },
      { immediate: true }
    );
    return {
      combinedCode,
    };
  },
  render() {
    return h("iframe", {
      srcdoc: this.combinedCode,
      style: {
        width: "100%",
        height: "100%",
      },
    });
  },
};
</script>
