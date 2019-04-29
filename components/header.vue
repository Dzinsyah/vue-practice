<template>
  <div
    class="hide-overflow"
    style="position: relative;"
  >
    <v-toolbar
      absolute
      color="teal lighten-3"
      dark
      scroll-off-screen
      scroll-target="#scrolling-techniques"
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title>Berita</v-toolbar-title>

    </v-toolbar>
    <div
      id="scrolling-techniques"
      class="scroll-y"
      style="max-height: 600px;"
    >
      <v-container></v-container>
    </div>
  </div>
</template>