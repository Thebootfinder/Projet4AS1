<template>
<v-container flex >
  <v-card
    max-width="620"
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
</v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { header: 'Tout ce qu il faut savoir' },
      {
        title: 'Règles du jeu ',
        subtitle: "<span class='text--primary'>Déroulement du jeu</span> &mdash; Lancer un Quizz, puis lisez la question et répondait en cliquant sur le bouton oui ou non en fonction de votre réponse",
        subtitle2: "<span class='text--primary'>Résultat</span> &mdash; A la fin du Quizz un score vous sera donné en fonction des réponses que vous avez données"
      },
      { divider: true, inset: true },
      {
        title: 'Problème',
        subtitle: "<span class='text--primary'>Mon score est nul !</span> &mdash; Ce résultat est peut-être la meilleure chose qui pouvait arriver! Dit toi qu'avoir un meilleur score n'est pas toujours sain ! Alors réfléchis si ç'est vraiment nécessaire",
        subtitle2: "<span class='text--primary'>Résultat</span> &mdash; Vous avez eu un problème et vous voulez qu'il soit corrigé ! Contacte-nous ( adresse mail en page de contact)"
      },
      { divider: true, inset: true },
      {
        title: 'Dans quel contexte à été créer ce site? ',
        subtitle: "<span class='text--primary'>Etude</span> &mdash; Ce site a été crée dans le cadre d'un projet de 4eme année, permettant d'apprendre à utiliser vue.js et beaucoup d'autre chose super cool mais dont on ne peut pas vous parler car c'est un secret"

      }
    ]
  })
}
</script>
