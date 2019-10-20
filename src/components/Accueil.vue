<template>
  <v-card

    min-width="500"
    min-height="400"
    class="mx-auto"
  >
    <v-toolbar
      color="blue"
      dark
    >

      <v-toolbar-title>Voici ce que vous pouvez faire </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          @click="items"
        >
          <v-list-item-content>
            <v-list-item-title @click="LienContact()" v-text="subItem.title2"></v-list-item-title>
            <v-list-item-title v-text="subItem.title1"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          action: 'Quizz',
          title: 'choix du quizz',
          items: [
            { title1: 'test 1 ', href: '/Login' },
            { title: 'test 2' }
          ]
        },
        {
          action: 'Statistique',
          title: 'Vos stats',
          active: false,
          items: [
            { title2: 'Score' },
            { title: 'Login', icon: 'mdi-check-circle' }
          ]
        },
        {
          action: 'Aide',
          title: 'Besoin d un coup de main',
          active: false,
          items: [
            { title: 'Rules' },
            { title: 'Contact' }
          ]
        }
      ]
    }
  },
  methods: {
    async LienContact () {
      this.$router.push('/Team')
    },
    async LienRules () {
      this.$router.push('/Test1')
    }
  }

}
</script>
