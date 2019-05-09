<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <!-- <v-card class="img-align">
          <v-img
            :src="url_image"
            class="imageproduct"
          >
          </v-img>
        </v-card> -->
        <v-img
          :src="url_image"
          class="imageproduct"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{nameProduct}}</div>
            <span class="grey--text">Rp {{price}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn @click="show = !show" flat>Lihat deskripsi</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show" class="margin-btn">
            <table style="width:100%">
              <tr>
                <td>Produk</td>
                <td>:</td> 
                <td>{{nameProduct}}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>:</td> 
                <td>{{status}}</td>
              </tr>
              <tr>
                <td>Harga</td>
                <td>:</td> 
                <td>Rp {{price}}</td>
              </tr>
              <tr>
                <td>Penjual</td>
                <td>:</td> 
                <td>{{seller}}</td>
              </tr>
              <tr>
                <td>Camera</td>
                <td>:</td> 
                <td>{{camera}}</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>:</td> 
                <td>{{processor}}</td>
              </tr>
              <tr>
                <td>Ram</td>
                <td>:</td> 
                <td>{{ram}}</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>:</td> 
                <td>{{memory}}</td>
              </tr>
              <tr>
                <td>Stok</td>
                <td>:</td> 
                <td>{{stock}}</td>
              </tr>
              <tr>
                <td>Deskripsi lainnya</td>
                <td>:</td> 
                <td>{{otherDescription}}</td>
              </tr>
              <tr>
                <td>Lokasi</td>
                <td>:</td> 
                <td>{{location}}</td>
              </tr>                                                            
            </table>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<!-- <div>
  <v-container>
    <v-layout row wrap>
      <v-flex xs5>
        <h1>aaa</h1>
        <img :src="url_image" class= "imageproduct" alt="">
      </v-flex>
      <v-flex xs7
        class="marginT-50"
      >
        <div class="product-name">{{nameProduct}}</div>
        <div class="stock">penjual : {{nameProduct}}</div>
        <v-layout class="product-layout" row wrap>
          <v-flex xs6>
            <p class="green-text">Tersedia</p>
            <p>>= 12</p>
          </v-flex>
          <v-flex xs6>
            <p class="green-text">Harga</p>                  
            <p class="red-text">Rp {{ Math.trunc(1000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') }}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</div> -->


<style scoped>

.margin-btn{
  margin-bottom: 100px !important;
}

.img-align{
  padding: 10px 0 10px 80px !important;
}
.imageproduct{
  margin-top:20px !important;
  max-height: 200px;
  max-width: 150px;
  height: auto;
  width: auto;
  margin-top: 50px !important;
  text-align: center !important;
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
        fabProduct:false,
        show: false
      }
    },

    computed: {
      ...mapState({
        nameProduct: state => state.ecommerce.productName,
        seller: state => state.ecommerce.seller,
        price: state => state.ecommerce.price,
        url_image: state => state.ecommerce.productImg,
        camera: state => state.ecommerce.camera,
        location: state => state.ecommerce.location,
        memory: state => state.ecommerce.memory,
        processor: state => state.ecommerce.processor,
        ram: state => state.ecommerce.ram,
        status: state => state.ecommerce.status,
        stock: state => state.ecommerce.stock,
        otherDescription: state => state.ecommerce.otherDescription,

      })
    },

  async fetch({ store, params }) {
    const ID = {
      productID: params.id
    }
    const productdetail = await store.dispatch(
      'ecommerce/getProductDetail',
      ID
    )
    console.warn('cek detail produk', productdetail)

    let productdetails = productdetail.product
    if (
      productdetail !== undefined &&
      productdetail.hasOwnProperty('product') 
    ) {
      await store.dispatch('ecommerce/setDefaultProductDetail', productdetails)
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