<template>
<v-container flex >
  <v-card
    max-width="100"
    min-width="500"
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

        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
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
        { title: 'Martin GEILLON', avatar: 'src/assets/logo.png' },
        { title: 'Hugo BLEUZE', avatar: 'https://picsum.photos/id/41/1280/805' },
        { title: 'Charles Maziarski', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' }
      ]
    }
  }
}
</script>
