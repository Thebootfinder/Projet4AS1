<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>The </span>
        <span class="font-weight-light">T*ST</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <span class="mr-2">Test</span>
      </v-btn>
    </v-app-bar>

    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  })
}
</script>
