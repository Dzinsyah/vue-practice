<template>
  <v-app>
  <TopBar/>
    <v-content>
      <v-container
      >
        <nuxt />
      </v-container>
    </v-content>
  <BottomNav />
  </v-app>
</template>

<script>

import BottomNav from "~/components/BottomNav.vue"
import TopBar from "~/components/TopBar.vue"

export default {

  components: {
      BottomNav,
      TopBar
    },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
