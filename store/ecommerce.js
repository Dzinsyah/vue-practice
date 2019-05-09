export const state = () => ({
    listProduct:[],
    isLoading:false,
    seller:"",
    productName:"",
    productImg:"",
    productPrice:"",
    camera:"",
    location:"",
    memory:"",
    processor:"",
    ram:"",
    status:"",
    stock:"",
    otherDescription:"",
    price:"",
    token:"",
    isLogin:false,
    username:"",
    password:""

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

    setDefaultProductDetail(state, data ) {
      state.productName = data.name,
      state.productImg = data.url_image,
      state.productPrice = data.price,
      state.seller = data.seller,
      state.camera = data.camera,
      state.location = data.location,
      state.memory = data.memory,
      state.processor = data.processor,
      state.ram = data.ram,
      state.status = data.status,
      state.stock = data.stock,
      state.otherDescription = data.other_description,
      state.price = Math.trunc(data.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    },

    // setProductDetail(state, data ) {
    //   state.listProduct = data
  
    //   console.warn("cekdata",data)
    // },
}

export const actions = {

  setState({ commit }, data) {
    commit('setState', data)
  },

  setDefaultListProduct({ commit }, dataProduct) {
      commit('setDefaultListProduct', dataProduct)
  },

  setDefaultProductDetail({ commit }, productdetails) {
    commit('setDefaultProductDetail', productdetails)
  },

    // setDefaultOrderNewHome({ commit }, resOrder) {
    //   commit('setDefaultOrderNewHome', resOrder)
    // },

  getToken(
    {commit, state})
    {
      const user = state.username
      const pass = state.password
      const urlAuth = 'https://cors-anywhere.herokuapp.com/http://13.58.84.95:8000//user/login?username=' + user + '&password=' + pass
      // let credential = {
      //   username : state.username,
      //   password : state.password
      // }
      // let urlAuth = `https://cors-anywhere.herokuapp.com/http://13.58.84.95:8000//user/login`

      return this.$axios
        .$get(urlAuth)
        .catch(error => {
          const alertMsg = {
            msg: 'get token failed'
          }
          console.warn('error get order: ', error)
          return false
        })
  },

  async doLogin({ dispatch, commit }) {
    commit('setState', { isLoading: true })
    console.warn('call getToken')
    const loginReq = await dispatch('getToken')
    console.warn('cek get token ', loginReq)
    // console.warn('call postLogin done', loginReq)
    if (loginReq.hasOwnProperty('token')) {
      commit('setState', {
        token: loginReq.token
      })
    }
    console.warn('cek get token ', loginReq)
    // setup auth cookies
    // await dispatch('setupAuthCookies')
  },

  getAllProduct(
    { commit },
    { xRequested }
    ) {
      // console.warn('asd', aw
      commit('setState', {
        isLoading: true
      })
      // this.$axios.setToken(token, 'Bearer')
  
      let url_product = "https://cors-anywhere.herokuapp.com/http://13.58.84.95:8000/public/product?rp=100"

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
    },

    getProductDetail(
      { commit },
      { productID }
      ) {
        commit('setState', {
          isLoading: true
        })
        // this.$axios.setToken(token, 'Bearer')
    
        let url_detail = `https://cors-anywhere.herokuapp.com/http://13.58.84.95:8000/public/product/${productID}`
        // `jsonapi/commerce_inventory_item/default/${productUUID}`
        return this.$axios
          .$get(url_detail)
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
      },
}
