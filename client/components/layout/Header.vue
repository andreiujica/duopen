<template lang="pug">
c-box(bg="blue.500" px="8" py="2" h="70px")
  c-flex(align="center" justify="space-between" h="100%")
    
    // Breadcrumbs Section
    c-breadcrumb(separator=">" color="white" fontWeight="bold" align="center")
      c-breadcrumb-item
        c-breadcrumb-link(href="/") Home
      c-breadcrumb-item(v-for="crumb in computedBreadcrumbs" :key="crumb.label")
        c-breadcrumb-link(:href="crumb.path") {{ crumb.label }}

    // Logout Button
    c-button(@click="logout" variantColor="red" size="sm") Logout
</template>

<script>
export default {
  name: 'LayoutHeader',
  computed: {
    computedBreadcrumbs() {
      const pathArray = this.$route.path.split('/').filter((n) => n)

      const breadcrumbs = pathArray.map((path, index) => {
        return {
          label: path.charAt(0).toUpperCase() + path.slice(1), // Capitalize first letter
          path: '/' + pathArray.slice(0, index + 1).join('/'),
        }
      })

      return breadcrumbs
    },
  },
  methods: {
    logout() {
      // this.$router.push('/login')
      console.log('logout')
    },
  },
}
</script>
