export const state = () => ({
    listProduct:[],
    isLoading:false
})

export const mutations = {
    setState(state, params) {
      const keys = Object.keys(params)
      keys.forEach(key => (state[key] = params[key]))
    },
    
    setDefaultListProduct(state, data ) {
        state.listProduct = data
    
        console.warn("cekdata",data)
      },
}

export const actions = {

  setDefaultListProduct({ commit }, dataProduct) {
      commit('setDefaultListProduct', dataProduct)
    },

    // setDefaultOrderNewHome({ commit }, resOrder) {
    //   commit('setDefaultOrderNewHome', resOrder)
    // },

  getAllProduct(
    { commit },
    { xRequested }
    ) {
      // console.warn('asd', aw
      commit('setState', {
        isLoading: true
      })
      // this.$axios.setToken(token, 'Bearer')
  
      // let url = "https://cors-anywhere.herokuapp.com/http://13.58.84.95:8000/public/product?rp=8"

      // let url_product = {
      //     method: "get",
      //     url: "https://cors-anywhere.herokuapp.com/http://13.58.84.95:8000/public/product?rp=8",
      //     headers: {
      //         "X-Requested-With": xRequested
      //     }
      //   };
      let url_product = "https://cors-anywhere.herokuapp.com/http://13.58.84.95:8000/public/product?rp=8"

      return this.$axios
        .$get(url_product)
        .catch(error => {
          const alertMsg = {
            msg: 'Get product list failed'
          }
          commit('setState', {
            isLoading: false
          })
          console.warn('error get order: ', error)
          return false
        })
    }
}
