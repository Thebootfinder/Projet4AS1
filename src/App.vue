<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>The </span>
        <span class="font-weight-light">Quizz</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link :to="{ path: '/' }">
         <v-btn text>
        <span class="mr-2">KPS</span>
      </v-btn>
      </router-link>

    </v-app-bar>

    <v-content>
    <router-view></router-view>
    </v-content>

    <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Quizz</strong>
      </v-col>
    </v-row>
  </v-footer>
      </v-app>

</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    links: [
      'Home',
      { title: 'Pre-fab homes', href: '/', flex: 12 },
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ]
    //
  })

}
</script>
