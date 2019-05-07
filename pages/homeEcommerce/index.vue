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
        <v-img
          :src="product.url_image"
          :lazy-src="``"
          aspect-ratio="1.3"
          class="grey lighten-2 imageproduct"
        />
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
</div>


</template>

<style scoped>

.customToolbar >>> .v-toolbar__content {
  height: 0px !important;
  /* text-align: center !important; */
}
.imageproduct{
  margin-top:20px !important;
  /* height: 100% !important; */
  width: 100%;
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


