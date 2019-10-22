<template>
<v-container flex >
  <v-card
    max-width="620"
    min-width="620"
    class="mx-auto"
  >
    <v-toolbar
      color="cyan"
      dark
    >

      <v-toolbar-title>Team de développement</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
     
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content> 
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Martin GEILLON', icon: 'mdi-account' },
        { title: 'Hugo BLEUZE', icon: 'mdi-account' }
      ]
    }
  }
}
</script>
