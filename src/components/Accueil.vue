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
          @click="q"
        >
          <v-list-item-content>
            <v-list-item-title @click="LienQuizz1()" v-text="subItem.title1"></v-list-item-title>
            <v-list-item-title @click="LienQuizz2()" v-text="subItem.title2"></v-list-item-title>
            <v-list-item-title @click="LienScore()" v-text="subItem.title3"></v-list-item-title>
            <v-list-item-title @click="LienLogin()" v-text="subItem.title4"></v-list-item-title>
            <v-list-item-title @click="LienRules()" v-text="subItem.title5"></v-list-item-title>
            <v-list-item-title @click="LienContact()" v-text="subItem.title6"></v-list-item-title>
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
            { title1: 'Quizz 1' },
            { title2: 'Quizz 2' }
          ]
        },
        {
          action: 'Statistique',
          title: 'Vos stats',
          active: false,
          items: [
            { title3: 'Score' },
            { title4: 'Login', icon: 'mdi-check-circle' }
          ]
        },
        {
          action: 'Aide',
          title: 'Besoin d un coup de main',
          active: false,
          items: [
            { title5: 'Rules' },
            { title6: 'Contact' }
          ]
        }
      ]
    }
  },

  methods: {
    async LienQuizz1 () {
      this.$router.push('/Quizz ')
    },
    async LienQuizz2 () {
      this.$router.push('/Accueil2')
    },
    async LienScore () {
      this.$router.push('/Score')
    },
    async LienLogin () {
      this.$router.push('/Login')
    },
    async LienRules () {
      this.$router.push('/Rules')
    },
    async LienContact () {
      this.$router.push('/Contact')
    }
  }
}
</script>
