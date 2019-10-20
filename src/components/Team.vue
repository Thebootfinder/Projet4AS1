<template>
  <v-card
    max-width="100"
    min-width="500"
    class="mx-auto"
  >
    <v-toolbar
      color="indigo"
      dark
    >

      <v-toolbar-title>Team</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click=""
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
</template>

<script>
export default {
  data () {
    return {
      items: [
        {  title: 'Martin GEILLON', avatar: '/src/assets/martin.jpg' },
        { title: 'Hugo BLEUZE', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Charles Maziarski', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
      ]
    }
  }
}
</script>
