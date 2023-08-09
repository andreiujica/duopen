<template lang="pug">
c-box(width="70px" height="100vh" bg="black")
  c-image(:src="require('~/assets/img/logo-small.svg')" alt="Logo" width="40px" height="40px" margin="auto" marginTop="4" marginBottom="8")
  c-stack(spacing="8" align="center")
    c-tooltip(v-for="link in links" :key="link.label" :label="link.label" placement="right")
      c-pseudo-box(
        as="a" 
        @click="setActiveLink(link.path)" 
        w="100%" 
        p="2" 
        borderRadius="md" 
        :_hover="{ bg: 'blue.500' }" 
        cursor="pointer" 
        px="8"
        py="4" 
        d="flex" 
        alignItems="center" 
        justifyContent="center"
        :bg="link.label === activeLink ? 'blue.500' : 'transparent'"
        )
        c-icon(:name="link.icon" size="25px" color="white")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { sidebarLinks } from '../../constants/sidebarLinks'

export default {
  name: 'LayoutSidebar',
  data() {
    return {
      links: sidebarLinks,
    }
  },
  computed: {
    ...mapState('sidebar', ['activeLink']),
  },
  methods: {
    ...mapActions('sidebar', ['setActiveLink']),
  },
}
</script>
