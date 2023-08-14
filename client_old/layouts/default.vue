<template lang="pug">
CThemeProvider
  CReset
  c-box(d="flex" height="100vh")
    LayoutSidebar
    c-box(flex="1" overflowY="auto" flexDir="column" d="flex")
      LayoutHeader
      Nuxt(flex="1")
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
