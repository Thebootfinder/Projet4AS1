<template>
<v-container>
 <v-card

    class="mx-auto"
    max-width="800"
    tile
  >
    <v-list flat>
      <v-subheader>SCORE</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.NumeroQuizz"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-text="item.User"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-text="item.Score"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-text="item.Day + item.Month + item.Year + '  ' + item.Hour + item.Minute"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-row justify="center">
      <v-btn class="ma-2" color="green" :disabled="disable" @click="TakeDate() + push(items, DayActuelle, MonthActuel, YearActuel, HourActuel, MinuteActuel)"> Ajouter votre Score </v-btn>
    </v-row>
    </v-card>
    <v-row class="ma-4" justify="center">
      <v-btn class="ma-2" color="blue" @click="RetourMenu()"> Retour au menu </v-btn>
    </v-row>
  </v-container>

</template>

<script>
export default {
  data: () => ({
    item: 1,
    DayActuelle: 0,
    MonthActuel: 0,
    YearActuel: 0,
    HourActuel: 0,
    MinuteActuel: 0,
    disable: false,

    items: [
      { NumeroQuizz: 'Quizz de la Positivité', User: 'Hugo', Score: '20 Points', Day: '18/', Month: '10/', Year: '2019', Hour: '17:', Minute: '02' },
      { NumeroQuizz: 'Quizz de la Négativité', User: 'Martin', Score: '10 Points', Day: '20/', Month: '10/', Year: '2019', Hour: '20:', Minute: '44' },
      { NumeroQuizz: 'Quizz de la Négativité', User: 'Maman', Score: '30 Points', Day: '21/', Month: '10/', Year: '2019', Hour: '21:', Minute: '08' }
    ]
  }),
  methods: {
    async RetourMenu () {
      this.$router.push('./Accueil3')
    },

    async TakeDate () {
      console.log(Date())
      var D = new Date()
      var d = D.getDate()
      var M = D.getMonth() + 1
      var y = D.getFullYear()
      var h = D.getHours()
      var m = D.getMinutes()
      this.DayActuelle = d + '/'
      this.MonthActuel = M + '/'
      this.YearActuel = y
      this.HourActuel = h + ':'
      this.MinuteActuel = m
    },

    async push (items, DayActuelle, MonthActuel, YearActuel, HourActuel, MinuteActuel) {
      var ScoreUser = { NumeroQuizz: sessionStorage.NumeroQuizz, User: sessionStorage.session_username, Score: sessionStorage.Score + ' Points', Day: DayActuelle, Month: MonthActuel, Year: YearActuel, Hour: HourActuel, Minute: MinuteActuel }
      this.items = items.concat(ScoreUser)
      this.disable = true
    }

  }
}
</script>
