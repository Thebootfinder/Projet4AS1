<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-toolbar
      color="cyan"
      dark
    >

      <v-toolbar-title>Rules et FAQ </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="item.subtitle2"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      { header: 'Tout ce qu il faut savoir' },
      {
        title: 'Règle du jeu ',
        subtitle: "<span class='text--primary'>Déroulement du jeu</span> &mdash; Lancer un Quizz, puis lisez la question et répondait en cliquant sur le bouton oui ou non en fonction de votre réponse",
        subtitle2: "<span class='text--primary'>Résultat</span> &mdash; A la fin du Quizz un score vous sera donné en fonction des réponses que vous avez donné"
      },
      { divider: true, inset: true },
      {
        title: 'Problème <span class="grey--text text--lighten-1">4</span>',
        subtitle: "<span class='text--primary'>Mon score est nul !</span> &mdash; Tente de le refaire afin de t améliorer !, l entrainement est la meilleur méthode"
      }
    ]
  })
}
</script>
