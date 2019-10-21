<template>
<v-container>
 <v-card
    class="mx-auto"
    max-width="500"
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
  </v-card>

  </v-container>

</template>

<script>
import ScoreActuel from './Quizz'
export default {
  data: () => ({
    item: 1,
    DayActuelle: 0,
    MonthActuel: 0,
    YearActuel: 0,
    HourActuel: 0,
    MinuteActuel: 0,
    ScoreActuel: ScoreActuel,

    items: [
      { User: 'Hugo', Score: '20 Points', Day: '21/', Month: '10/', Year: '2019', Hour: '20:', Minute: '02' },
      { User: 'Martin', Score: '30 Points', Day: '22/', Month: '10/', Year: '2019', Hour: '19:', Minute: '33' },
      { User: 'Hugo', Score: '25 Points', Day: '23/', Month: '10/', Year: '2019', Hour: '18:', Minute: '45' }
    ]
  }),
  methods: {
    async TakeDate () {
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
      var ScoreUser = { User: sessionStorage.session_username, Score: sessionStorage.Score + ' Points', Day: DayActuelle, Month: MonthActuel, Year: YearActuel, Hour: HourActuel, Minute: MinuteActuel }
      this.items = items.concat(ScoreUser)
    }
  }
}
</script>
