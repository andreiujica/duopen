<template>
  <codemirror
    v-model="text"
    placeholder="Code goes here..."
    :style="{
      height: '100%',
      width: '100%',
    }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="handleCodeChange"
    @blur="log('blur', $event)"
  />
</template>

<script>
import { defineComponent, ref, shallowRef } from "vue";
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import darkDuopen from "~/themes/darkDuopen";
import lightDuopen from "~/themes/lightDuopen";

export default defineComponent({
  components: {
    Codemirror,
  },
  props: {
    lang: {
      type: String,
      default: "html",
      validator(value) {
        // The value must match one of these strings
        return ["html", "css", "js"].includes(value);
      },
    },
  },
  setup(props) {
    const colorMode = useColorMode();
    const code = ref(`console.log('Hello, world!')`);

    const roomsStore = useRoomsStore();
    const codeStore = useCodeStore();

    const { $io } = useNuxtApp();

    const text = computed({
      get() {
        switch (props.lang) {
          case "js":
            return codeStore.getJsCode;
          case "html":
            return codeStore.getHtmlCode;
          case "css":
            return codeStore.getCssCode;
          default:
            return codeStore.getHtmlCode;
        }
      },
      set(newValue) {
        code.value = newValue;
        codeStore.setCode(newValue, props.lang);
      },
    });

    $io.on("codeChanged", ({ code, lang }) => {
      console.log("Socket ID:", $io.id);
      if (lang === props.lang) {
        codeStore.setCode(code, lang);
      }
    });

    const handleCodeChange = (newCode) => {
      $io.emit("codeUpdate", {
        room: roomsStore.getCurrentRoom,
        code: newCode,
        lang: props.lang,
      });
    };

    const extensions = computed(() => {
      const baseExtensions =
        colorMode.value === "dark" ? [darkDuopen] : [lightDuopen];

      switch (props.lang) {
        case "js":
          return [...baseExtensions, javascript()];
        case "html":
          return [...baseExtensions, html()];
        case "css":
          return [...baseExtensions, css()];
        default:
          return baseExtensions;
      }
    });

    // Codemirror EditorView instance ref
    const view = shallowRef();
    const handleReady = (payload) => {
      view.value = payload.view;
    };

    // Status is available at all times via Codemirror EditorView
    const getCodemirrorStates = () => {
      const state = view.value.state;
      const ranges = state.selection.ranges;
      const selected = ranges.reduce(
        (r, range) => r + range.to - range.from,
        0
      );
      const cursor = ranges[0].anchor;
      const length = state.doc.length;
      const lines = state.doc.lines;
      // more state info ...
      // return ...
    };

    return {
      code,
      extensions,
      handleReady,
      log: console.log,
      handleCodeChange,
      text,
    };
  },
});
</script>
