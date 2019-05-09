<template>
  <div class="headBar">
    <div class="container">
      <v-toolbar flat color="transparent">
        <v-btn icon :ripple="false" class="btnBack" @click="back">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title class="headTitle">Gadget.Inc</v-toolbar-title>
        <div></div>
      </v-toolbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Gadget.inc'
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.headBar {
  padding: 0 15px;
  background: #fff;
  z-index: 1;
  box-shadow: 0 -0.1px 6px 0 rgba(0, 0, 0, 0.08);
  clear: both;
  position: fixed;
  width: 100%;
}
.headBar >>> .container {
  padding: 0;
}
.headBar >>> .v-toolbar__content {
  padding: 0;
  justify-content: space-between; /* supaya bisa di set align center utk title */
}

/* penyeragaman margin */
.headBar >>> .v-toolbar__content div {
  margin: 0;
}
.headBar >>> .v-toolbar__content > *:first-child {
  margin: 0;
}
/* supaya align center, tambahkan margin sebesar lebar dari left menu */
.headBar >>> .v-toolbar__content > .v-toolbar__title {
  margin-right: 32px;
}
.headTitle {
  font-size: 15px;
  font-weight: 500;
}
</style>