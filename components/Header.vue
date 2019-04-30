
<template>
  <v-layout
    class="title-menu"
  >
      <v-toolbar-side-icon
      @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="title-menu">Baca Berita</v-toolbar-title>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Jono</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile >
          <v-list-tile-action>
               <nuxt-link to="/homeEcommerce"><v-icon >dashboard</v-icon></nuxt-link>
          </v-list-tile-action>

          <v-list-tile-content>
            <nuxt-link to="/homeEcommerce"><v-list-tile-title>E-commerce</v-list-tile-title></nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Berita', icon: 'dashboard' },
          { title: 'Film', icon: 'question_answer' }
        ]
      }
    }
  }
</script>

// flat to="/home"