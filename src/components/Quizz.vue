
<template>
  <v-container>
    <v-card class="mx-auto" max-width="600" min-height="300" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Quizz</div>
          <v-list-item-title>
            <div>{{TitreActuel}}</div>
          </v-list-item-title>
          <v-card-text>{{QuestionActuelle}}</v-card-text>
        <v-card-text>{{ScoreActuel}}</v-card-text>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-row justify="center">
          <v-btn class="ma-4" depressed large color="primary" @click="ReponseOUI(Titre, Question, Score, i, IndexScore, nbrQuestion)">Oui</v-btn>
          <v-btn class="ma-4" depressed large color="red" @click="ReponseNON(Titre, Question, Score, i, IndexScore, nbrQuestion)">Non</v-btn>
          <v-icon>mdi-heart</v-icon>
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
    TitreActuel: 'Question1',
    Titre: ['Question2', 'Question3', 'Question4'],
    QuestionActuelle: 'JE SUIS UNE QUESTION 1',
    Question: ['JE SUIS UNE QUESTION 2', 'JE SUIS UNE QUESTION 3', 'JE SUIS UNE QUESTION 4'],
    ScoreActuel: 0,
    Score: [10, 0, 0, 5, 10, 0],
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
        sessionStorage.setItem('Score', ScoreTemp)
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
        sessionStorage.setItem('Score', ScoreTemp)
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
