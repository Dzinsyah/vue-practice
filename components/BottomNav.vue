<template>
  <v-bottom-nav :active.sync="activeBtn" :value="true" fixed app class="bottomNavSeller">
    <v-btn :ripple="false" flat to="/homeEcommerce">
      <span>Home</span>
      <img
        v-if="routeName==='homeEcommerce'"
        src="~/assets/images/product1.svg"
        alt="H"
        class="icon-btm-nav"
      >
      <img v-else src="~/assets/images/product.svg" alt="H" class="icon-btm-nav">
    </v-btn>
    <v-btn :ripple="false" flat to="/products">
      <span>Produk</span>
      <img
        v-if="routeName==='products'"
        src="~/assets/images/product.svg"
        alt="H"
        class="icon-btm-nav"
      >
      <img v-else src="~/assets/images/product.svg" alt="H" class="icon-btm-nav">
    </v-btn>
    <v-btn :ripple="false" flat to="/home">
      <span>Berita</span>
      <img
        v-if="routeName==='order-new'"
        src="~/assets/images/product.svg"
        alt="H"
        class="icon-btm-nav"
      >
      <img v-else src="~/assets/images/product.svg" alt="H" class="icon-btm-nav">
    </v-btn>
    
    <!-- <v-btn :ripple="false" flat :to="linkChat">
      <span>Chat</span>
      <img
        v-if="routeName==='chat'"
        src="~/assets/images/product.svg"
        alt="H"
        class="icon-btm-nav"
      >
      <img v-else src="~/assets/images/product.svg" alt="H" class="icon-btm-nav">
    </v-btn> -->
  </v-bottom-nav>
</template>
<script>
// console.warn('.$route.path', this.$nuxt.$route.path)
// const envProd = process.env.NODE_ENV === 'production'
export default {
  data() {
    return {
      activeBtn: '/home',
      // linkOrder: envProd ? '/ongoing' : '/order/new',
      // linkChat: envProd ? '/ongoing' : '/chat'
    }
  },
  computed: {
    routeName: {
      get() {
        return this.$route.name
      }
    }
  }
}
</script>

<style>
/* start: hardstyle to remove transition effect on bottomNav active */
.v-item-group.v-bottom-nav .v-btn--active {
  padding-top: 8px;
}
/* end: hardstyle to remove transition effect on bottomNav active */
</style>