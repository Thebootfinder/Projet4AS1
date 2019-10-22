<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>The </span>
        <span class="font-weight-light">Quizz</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link :to="{ path: '/Accueil3' }">
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

            <div class="my-2">
         <router-link v-bind:to="'/Accueil3'"><v-btn text color="white">Home</v-btn></router-link>
      </div>
              <div class="my-2">
          <router-link v-bind:to="'/team'"><v-btn text color="white">Team</v-btn></router-link>
      </div>
       <div class="my-2">
          <router-link v-bind:to="'/Rules'"><v-btn text color="white">Rules et FAQ </v-btn></router-link>
      </div>
       <div class="my-2">
          <router-link v-bind:to="'/Contact'"><v-btn text color="white">Contact</v-btn></router-link>
      </div>

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
