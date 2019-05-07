<template>

<BottomNav /> 

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
        info:null
      }
    }
    
  }
</script>
