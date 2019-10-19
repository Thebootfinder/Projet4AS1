<template>
  <v-container>
    <v-row justify="center">
      <v-form>
        <v-alert v-model="show" :type="error" color="red">{{Message}}</v-alert>
        <v-col md="16">
          <v-text-field color="black" filled clearable v-model="Username" label="Identifiant"></v-text-field>
          <v-text-field color="black" filled v-model="Password" label="Mot de Passe" type="Password"></v-text-field>

          <v-btn class="ma-4" tile large color="success" @click="Login()">Login</v-btn>

          <v-btn class="ma-4" tile large color="error" @click="Register()">Register</v-btn>
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
    statusMsg: ''
  }),
  methods: {
    async Login () {
      if (this.Password === '' || this.Username === '') {
        console.log('empty')
        this.Message = 'ID et Mot de Passe Requis !'
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
          this.Message = 'ID ou Mot de Passe incorrect !'
          this.show = true
        } else {
          console.log('combinaison valide')
          sessionStorage.setItem('session_username', this.Username)
          this.$router.push('/')
        }
      }
    }
  }
}

</script>
