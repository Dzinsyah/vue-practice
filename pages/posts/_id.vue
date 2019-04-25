<template>
  <div class="container">
    <article>
      <h1>{{post.title}}</h1>
      <p>{{post.content}}</p>
    </article>
    <aside>
      <h3>Postingan terkait</h3>
      <ul>
        <li v-for="item in relatedPosts" :key="item.id">
          <nuxt-link :to="`/posts/${item.id}`">{{item.title}}</nuxt-link>
        </li>
      </ul>
    </aside>
    <div v-for="product in info" :key="product.id">
      <ul>
        <li>
          {{product.seller}}
        </li>
      </ul>
      <v-card flat tile class="d-flex">
          <v-img
          :src="product.url_image"
          aspect-ratio="1"
          class="grey lighten-2"
          >
          </v-img>
      </v-card>
    </div>
  
  </div>

</template>

<script>

  import axios from "axios"
  export default{
    data () {
      return {
        id: this.$route.params.id,
        info: null
      }
    },

    mounted () {
    const product = {
        method: "get",
        url: "https://cors-anywhere.herokuapp.com/http://13.58.84.95:8000/public/product?rp=8",
        headers: {
            "X-Requested-With": "http://13.58.84.95"
            //   Authorization: "Bearer " + this.props.Bearer
        }
      };
    axios(product)
      .then(response => (this.info = response.data.product))
    },

    computed: {
      post () {
        return this.$store.state.posts.all.find(post => post.id === this.id)
      },
      relatedPosts () {
        return this.$store.state.posts.all.filter(post => post.id !== this.id)
      }
    }
  }

</script>

