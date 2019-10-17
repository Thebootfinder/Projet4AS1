<template>
  <v-container>
    <v-row justify="center">
      <v-form>
        <v-alert v-model="show" :type="error" color="red">{{Message}}</v-alert>
        <v-col md="16">
          <v-text-field color="black" filled clearable v-model="Identifiant" label="Identifiant"></v-text-field>
          <v-text-field color="black" filled label="Mot de Passe" type="Mot de Passe"></v-text-field>

          <v-btn class="ma-4" tile large color="success" @click="Login()">Login</v-btn>

          <v-btn class="ma-4" tile large color="error" @click="createNewUser">Register</v-btn>
        </v-col>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    Username: '',
    Password: '',
    show: false,
    msgType: 'error',
    statusMsg: '',
    loginGranted: false
  }),
  methods: {
    async Login () {
      if (this.Password === '' || this.Username === '') {
        console.log('empty')
        this.Message = 'Username & Password are required !'
        this.show = true
      } else {
        console.log('login request')
        const login = await this.axios.post('http://localhost:4000/api/Login', {
          username: this.Username,
          password: this.Password
        })
        console.log(login.data.status)
        if (!login.data.status) {
          console.log('combinaison non valide')
          this.msgType = 'error'
          this.statusMsg = 'Incorrect Username or Password !'
          this.show = true
        } else {
          console.log('combinaison valide')
          sessionStorage.setItem('session_username', this.Username)
          this.updateOperation()
          this.$router.push('/Home')
        }
      }
    }
  }
}

</script>
