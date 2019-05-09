import createPersistedState from 'vuex-persistedstate'


export default ({ store }) => {
  createPersistedState({
    key: 'gadget',
    paths: [
        'ecommerce.token',
        'ecommerce.isLogin'
    ]
  })(store)
}
