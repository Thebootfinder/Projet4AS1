
<template>
  <v-container>
    <v-card class="mx-auto" max-width="600" min-height="300" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Quizz</div>
          <v-list-item-title class = ma-4>
            <div>{{TitreActuel}}</div>
          </v-list-item-title>
          <v-card-text>{{QuestionActuelle}}</v-card-text>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-row justify="center">
          <v-btn class="ma-4" depressed large color="primary" @click="ReponseOUI(Titre, Question, Score, i, IndexScore, nbrQuestion)">Oui</v-btn>
          <v-btn class="ma-4" depressed large color="red" @click="ReponseNON(Titre, Question, Score, i, IndexScore, nbrQuestion)">Non</v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { } from './Score'
export default {
  data: () => ({
    Hello: 'coucou',
    OUI: true,
    NON: false,
    i: 0,
    TitreActuel: 'Question 1',
    Titre: ['Question 2', 'Question 3', 'Question 4'],
    QuestionActuelle: 'As-tu déjà séché un cours ?',
    Question: ['As-tu déjà été viré de cours ?', 'As-tu collé un chewing-gum sous la table en cours ?', 'As-tu déjà triché pendant un contrôle ?'],
    ScoreActuel: 0,
    Score: [10, 0, 15, 0, 7, 0, 20, 0],
    IndexScore: 0,
    nbrQuestion: 4

  }),
  methods: {

    async ReponseOUI (Titre, Question, Score, index, indexScore, nbrQuestion) {
      console.log('OUI')
      this.TitreActuel = Titre[index]
      this.QuestionActuelle = Question[index]
      var ScoreTemp = this.ScoreActuel
      this.ScoreActuel = ScoreTemp + Score[indexScore]
      if (index + 1 === nbrQuestion) {
        sessionStorage.setItem('Score', this.ScoreActuel)
        sessionStorage.setItem('NumeroQuizz', 'Quizz de la Négativité')
        this.$router.push('/Score ')
        this.$router.go()
      } else {
        index = index + 1
        indexScore = indexScore + 2
        this.i = index
        this.IndexScore = indexScore
      }
    },

    async ReponseNON (Titre, Question, Score, index, indexScore, nbrQuestion) {
      console.log('NON')
      this.TitreActuel = Titre[index]
      this.QuestionActuelle = Question[index]
      var ScoreTemp = this.ScoreActuel
      this.ScoreActuel = ScoreTemp + Score[indexScore + 1]
      if (index + 1 === nbrQuestion) {
        sessionStorage.setItem('Score', this.ScoreActuel)
        sessionStorage.setItem('NumeroQuizz', 'Quizz de la Négativité')
        this.$router.push('/Score ')
        this.$router.go()
      } else {
        index = index + 1
        indexScore = indexScore + 2
        this.i = index
        this.IndexScore = indexScore
      }
    }
  }
}

</script>
