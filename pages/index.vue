<template>
  <v-layout
    column
    justify-center
    class="font-roboto page-login"
  >
    <v-flex xs12 sm11 md11>
      <v-container>
        <h1 id="title">Masuk Sebagai Pembaca</h1>
      </v-container>
      
      <v-form ref="form" v-model="valid" @keyup.native.enter="valid && submit($event)">
        <v-text-field
          v-model="username"
          :rules="[rules.ruleUsername, rules.minUsername]"
          label="Username"
          outline
          class="fieldLogin"
          clearable
        ></v-text-field>
        
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="Password minimal 3 karakter"
          outline
          class="fieldLogin"
          @click:append="show1 = !show1"
        ></v-text-field>

          <div class="text-right text-red">
            <v-btn
              :ripple="false"
              flat
              class="text-none btnForgetpass"
              @click=" forgetPassword "
            >Lupa password?</v-btn>
          </div>

        <v-btn
          :loading="loading"
          :disabled="!valid"
          :ripple="false"
          block
          color="error"
          class="text-none login"
          @click=" submit "

        >Masuk</v-btn>

      </v-form>

      <v-card-text class="footer">
        <p>Dengan masuk ke aplikasi, Anda telah menyetujui,
          <br>
          <span><nuxt-link class="text-red" to="/landingPage">Syarat dan Ketentuan</nuxt-link> yang berlaku</span>
        </p>
      </v-card-text>

    </v-flex>
  </v-layout>
</template>

<style scoped>
.v-btn.text-none.btnForgetpass {
  height: 24px;
  margin-right: 6px;
  padding: 3px;
  color:red;
  font-size: 14px;
  font-weight: 500 !important;
}
.v-btn.text-none.btnForgetpass:hover{
  color:red;
  background-color: white !important;
}

.v-btn.text-none.login {
  height: 48px;
}

.fieldLogin >>> .v-input__control .v-input__slot{
  border: 0.5px solid ;
}

.fieldLogin.primary--text >>> .v-input__control .v-input__slot{
  border: 0.5px solid #00bcb8 !important;
}

.fieldLogin.error--text >>> .v-input__control .v-input__slot{
  border: 0.5px solid red !important;
}


/* text input ditengah box */
.fieldLogin >>> .v-text-field__slot input {
  height: 48px;
  font-size: 16px;
  margin:auto;
}

/* swap place holder ke border atas form*/
.fieldLogin >>> .v-text-field__slot .v-label--active {
  -webkit-transform: translateY(-25px) scale(0.75);
  transform: translateY(-25px) scale(0.75);
  background: #fff;
  padding: 0 5px;
  /* color:#00bcb8 ; */
  /* border-color: #00bcb8 !important; */
}

.fieldLogin >>> .v-text-field__slot .v-label--active.primary--text,
.fieldLogin >>> .v-input__append-inner .v-input__icon.v-input__icon--append i.primary--text{
  color:#00bcb8 !important;
}

.fieldLogin >>> .v-text-field__slot .v-label {
  font-size: 14px;}


.fieldLogin >>> .v-input__control .v-text-field__details .v-messages{
  color: rgba(0,0,0,0.54);
  min-height: 2px;
}

</style>

<script>

import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  data () {
  return {
    show1: false,
    valid: true,
    loading: false,
    rules: {
      ruleUsername: value => !!value|| "Username harus diisi",
      minUsername: v => (v && v.length >= 3) || 'Username minimal 3 karakter',
      required: value => !!value || 'Password harus diisi',
      min: v => v.length >= 3 || 'Password minimal 3 karakter',
    }
  }
  },

  computed: {
    ...mapState({
      username: state => state.user.username,
      password: state => state.user.password
      // loginLoading: state => state.user.loginLoading
    }),
    username: {
      get() {
        return this.$store.state.ecommerce.username
      },
      set(value) {
        this.setState({ username: value })
      }
    },
    password: {
      get() {
        return this.$store.state.ecommerce.password
      },
      set(value) {
        this.setState({ password: value })
      }
    }
  },

  methods :{
    ...mapActions({ doLogin: 'ecommerce/doLogin' }),
    ...mapMutations({ setState: 'ecommerce/setState' }),
    // submit (){
    //   this.loading = true
    //   setTimeout(() => (
    //     this.loading = false,
    //     this.$router.push('/homeEcommerce')
    //     ), 2000)
    // },
    submit() {
      if (this.$refs.form.validate()) {
        this.doLogin().finally(() => {
          this.$router.replace('/homeEcommerce')
        })
      }
    },

    forgetPassword (){
      alert("Hubungi customer services GaDa & infokan username atau nomer telepon anda")
    }
  }
}
</script>

