<template>
<div>
  <v-card>
    <v-carousel
    class="test"
    >
      <v-carousel-item
        v-for="(item,i) in carousel"
        :key="i"
        reverse-transition="fade"
        transition="fade"
        class="carousel-images"
      ><img :src="require(`assets/images/${ item.src }`)"  width="100%"></v-carousel-item>
    </v-carousel>
  </v-card>
  <v-container>
    <v-layout row wrap v-for="product in allList" :key="product.id">
      <v-flex xs5>
        <nuxt-link :to="`/productdetail/${product.product_id}`">
        <v-img
          :src="product.url_image"
          :lazy-src="``"
          class="img"
        />
        </nuxt-link>        
      </v-flex>
      <v-flex xs7
        class="marginT-50"
      >
        <div class="product-name">{{ product.name }}</div>
        <div class="stock">penjual : {{ product.seller }}</div>
        <v-layout class="product-layout" row wrap>
          <v-flex xs6>
            <p class="green-text">Tersedia</p>
            <p>>= {{ product.stock}}</p>
          </v-flex>
          <v-flex xs6>
            <p class="green-text">Harga</p>                  
            <p class="red-text">Rp {{ Math.trunc(product.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') }}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
      <v-speed-dial v-model="fabProduct" direction="top" transition="slide-y-reverse-transition">
      <template v-slot:activator :fixed="true">
        <v-btn v-model="fabProduct" class="fabIcon" color="error" fixed bottom right fab>
          <v-icon>add</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
      </template>
      <nuxt-link to="/products">
        <v-btn class="button-inside text-none" dark color="secondary" >Pengajuan Produk Baru</v-btn>
      </nuxt-link>
      <!-- <nuxt-link to="/product/add">
        <v-btn class="button-inside" dark color="secondary">Tambah Produk</v-btn>
      </nuxt-link>-->
    </v-speed-dial>
</div>

</template>

<style scoped>

.fabIcon {
  top: 70%;
  width: 64px;
  height: 64px;
  position: fixed;
}
/* start:: readjust style FAB & speed dial */
.fabIcon.v-btn--floating .v-btn__content .v-icon {
  font-size: 32px;
  font-weight: 600;
  display: inline-flex;
}
.fabIcon.v-btn--active {
  border: solid 1px #e3e3e3 !important;
  background-color: #f5f5f5 !important;
  color: #383838 !important;
}

.customToolbar >>> .v-toolbar__content {
  height: 0px !important;
  /* text-align: center !important; */
}
.img{
  margin-top:20px !important;
  max-height: 300px !important;
  max-width: 100px !important;
  height: auto;
  width: auto;
}
.product-name {
  text-align: left;
  font-weight: bold;
}
.product-layout {
  text-align: left;
  overflow: hidden;
  padding-bottom: 10px;
}
p {
  padding: 0px;
  margin: 0px !important;
}
.green-text {
  color: #00bcb8;
}
.stock {
  text-align: left;
  color: #fe4544;
  font-weight: bold;
  /* margin-bottom: 10px; */
}
.marginT-50{
  margin-top: 20px !important;
  /* margin-left: 10px !important; */
}
.gray--text {
  font-size: 10px;
  line-height: 1.3;
  color: #969696;
  padding-bottom: 3px;
}
.product-name {
  text-align: left;
  font-weight: bold;
}
</style>

<script>
  import { mapState } from 'vuex'
  export default {
    layout: 'Top_bottom_nav',

    data () {
      return {
        carousel: [
          {
            src: 'ads1.jpg'
          },
          {
            src: 'ads2.jpg'
          },
          {
            src: 'ads3.jpg'
          },
          {
            src: 'ads4.jpeg'
          }
        ]
      }
    },

    computed: {
      ...mapState({
        allList: state => state.ecommerce.listProduct
      })
      
    },

    mounted: async function(store = this.$store) {
        const Header = {
          xRequested: "http://13.58.84.95"
        }
        const gadget = await store.dispatch('ecommerce/getAllProduct', Header)
        // const produk = await store.dispatch('ecommerce/setDefaultListProduct', {
        //     data: gadget.data
        //   })
        console.warn('gadget', gadget)
        console.warn('cekdataproduct', gadget.product)

        let dataProduct = gadget.product
        if (
          gadget.hasOwnProperty('product')
          // gadget !== undefined 
          // gadget.product.length > 0 &&
          // gadget.product[0] !== null
        ) {
          await store.dispatch('ecommerce/setDefaultListProduct', dataProduct)
        }
    },

  //   async fetch({ store }) {

  //   const Header = {
  //     xRequested: "http://13.58.84.95"
  //   }
  //   const gadget = await store.dispatch('ecommerce/getAllProduct', Header)
  //   // const produk = await store.dispatch('ecommerce/setDefaultListProduct', {
  //   //     data: gadget.data
  //   //   })
  //   console.warn('gadget', gadget)
  //   console.warn('cekdataproduct', gadget.product)

  //   let dataProduct = gadget.product
  //   if (
  //     gadget.hasOwnProperty('product')
  //   ) {
  //     await store.dispatch('ecommerce/setDefaultListProduct', dataProduct)
  //   }
  // },

  }
</script>


