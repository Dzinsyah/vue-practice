<template>
  <div>
    <Menu />
    <v-toolbar 
      class="customToolbar"
      tabs
    >
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <!-- <v-toolbar-title class="colorbase margin-auto">Kategori Berita</v-toolbar-title> -->
      <!-- <v-spacer></v-spacer> -->

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          fixed-tabs
          color="transparent"
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#mobile-tabs-5-1" class="primary--text">
            <v-icon>local_hospital</v-icon>
          </v-tab>

          <v-tab href="#mobile-tabs-5-2" class="primary--text">
            <v-icon>directions_bike</v-icon>
          </v-tab>

          <v-tab href="#mobile-tabs-5-3" class="primary--text">
            <v-icon>mood</v-icon>
          </v-tab>

          <v-tab href="#mobile-tabs-5-4" class="primary--text">
            <v-icon>laptop_mac</v-icon>
          </v-tab>

          <v-tab href="#mobile-tabs-5-5" class="primary--text">
            <v-icon>group</v-icon>
          </v-tab>

        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs" class="white elevation-1" >
      <v-tab-item
        value="mobile-tabs-5-1"
      >
        <v-card v-for="berita in news.articles" :key="berita.title">
            
          <div v-if="berita.urlToImage !== null">
            <v-img 
            :src="berita.urlToImage"
            aspect-ratio="1"
            class="images-news"
            >
            </v-img>
          </div>

          <div v-else>
            <v-img
            :src="`https://media.wsls.com/photo/2017/04/24/Whats%20News%20Today_1493062809311_9576980_ver1.0_1280_720.png`"
            aspect-ratio="1"
            class="images-news"
            >
            </v-img>
          </div>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{berita.title}}</h3>
              <div> {{ berita.content}} </div>
            </div>
          </v-card-title>
        </v-card>
      </v-tab-item>

      <v-tab-item
          value="mobile-tabs-5-2"
        >
          <v-card v-for="olahraga in sports.articles" :key="olahraga.title">
            
            <div v-if="olahraga.urlToImage !== null">
              <v-img 
              :src="olahraga.urlToImage"
              aspect-ratio="1"
              class="images-news"
              >
              </v-img>
            </div>

            <div v-else>
              <v-img
              :src="`https://media.wsls.com/photo/2017/04/24/Whats%20News%20Today_1493062809311_9576980_ver1.0_1280_720.png`"
              aspect-ratio="1"
              class="images-news"
              >
              </v-img>
            </div>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{olahraga.title}}</h3>
                <div> {{ olahraga.content}} </div>
              </div>
            </v-card-title>
          </v-card>
        </v-tab-item>
        
        <v-tab-item
          value="mobile-tabs-5-3"
        >
          <v-card v-for="hiburan in entertainment.articles" :key="hiburan.title">
            
            <div v-if="hiburan.urlToImage !== null">
              <v-img 
              :src="hiburan.urlToImage"
              aspect-ratio="1"
              class="images-news"
              >
              </v-img>
            </div>

            <div v-else>
              <v-img
              :src="`https://media.wsls.com/photo/2017/04/24/Whats%20News%20Today_1493062809311_9576980_ver1.0_1280_720.png`"
              aspect-ratio="1"
              class="images-news"
              >
              </v-img>
            </div>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{hiburan.title}}</h3>
                <div> {{ hiburan.content}} </div>
              </div>
            </v-card-title>
          </v-card>
        </v-tab-item>

        <v-tab-item
          value="mobile-tabs-5-4"
        >
          <v-card v-for="teknologi in technology.articles" :key="teknologi.title">
            
            <div v-if="teknologi.urlToImage !== null">
              <v-img 
              :src="teknologi.urlToImage"
              aspect-ratio="1"
              class="images-news"
              >
              </v-img>
            </div>

            <div v-else>
              <v-img
              :src="`https://media.wsls.com/photo/2017/04/24/Whats%20News%20Today_1493062809311_9576980_ver1.0_1280_720.png`"
              aspect-ratio="1"
              class="images-news"
              >
              </v-img>
            </div>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{teknologi.title}}</h3>
                <div> {{ teknologi.content}} </div>
              </div>
            </v-card-title>
          </v-card>
        </v-tab-item>

        <v-tab-item
          value="mobile-tabs-5-5"
        >
          <v-card v-for="bisnis in business.articles" :key="bisnis.title">
            
            <div v-if="bisnis.urlToImage !== null">
              <v-img 
              :src="bisnis.urlToImage"
              aspect-ratio="1"
              class="images-news"
              >
              </v-img>
            </div>

            <div v-else>
              <v-img
              :src="`https://media.wsls.com/photo/2017/04/24/Whats%20News%20Today_1493062809311_9576980_ver1.0_1280_720.png`"
              aspect-ratio="1"
              class="images-news"
              >
              </v-img>
            </div>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{bisnis.title}}</h3>
                <div> {{ bisnis.content}} </div>
              </div>
            </v-card-title>
          </v-card>
        </v-tab-item>

    </v-tabs-items>

    <v-footer
      dark
      height="auto"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="basecolor">
          <strong class="subheading center">Aplikasi berita terbaik untuk mobile dari berbagai situs atau portal berita lengkap dan terpercaya, diperbarui setiap harinya </strong>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;2018 — <strong>Berita Update</strong>
        </v-card-actions>
      </v-card>
    </v-footer>

  </div>
</template>

<style scoped>

.customToolbar >>> .v-toolbar__content {
  height: 0px !important;
  /* text-align: center !important; */
}

</style>

<script>
  import Header from "~/components/Header.vue"
  import Menu from "~/components/Menu.vue"
  
  export default {

    components: {
      Header,
      Menu
    },

    data () {
      return {
        tabs: null,
        text: 'Aplikasi untuk baca berita',
        info:null
      }
    },

    async asyncData({ $axios }) {
      const news = await $axios.$get("https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=02eefd4e96b54474b829905117a48a16")
      const sports = await $axios.$get("https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=02eefd4e96b54474b829905117a48a16")
      const entertainment = await $axios.$get("https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=02eefd4e96b54474b829905117a48a16")
      const technology = await $axios.$get("https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=02eefd4e96b54474b829905117a48a16")
      const business = await $axios.$get("https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=02eefd4e96b54474b829905117a48a16")
      return {
        news,
        sports,
        entertainment,
        technology,
        business
      }
    },
    async fetchSomething() {
    const news = await this.$axios.$get("https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=02eefd4e96b54474b829905117a48a16")
    const sports = await this.$axios.$get("https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=02eefd4e96b54474b829905117a48a16")
    const entertainment = await this.$axios.$get("https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=02eefd4e96b54474b829905117a48a16")
    const technology = await this.$axios.$get("https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=02eefd4e96b54474b829905117a48a16")
    const business = await this.$axios.$get("https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=02eefd4e96b54474b829905117a48a16")
    this.news = news.data.articles
    this.sports = sports.data.articles
    this.entertainment = entertainment.data.articles
    this.technology = technology.data.articles
    this.business = business.data.articles    
    }
    
  }
</script>


