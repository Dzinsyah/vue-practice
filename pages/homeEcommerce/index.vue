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
    <v-layout row wrap>
      <v-flex xs5>
        <v-img
          :src="require(`assets/images/ads1.jpg`)"
          :lazy-src="``"
          aspect-ratio="1.3"
          class="grey lighten-2"
        />
      </v-flex>
      <v-flex xs7>
        <h2>ini testing col</h2>
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

</style>

<script>
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
    }
  }
</script>


