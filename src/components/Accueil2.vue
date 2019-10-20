<template>
  <v-card color="blue">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">WELCOME</h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat color="grey">
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
        
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      tab: null,
      items: [
        'Quizz', 'Help', 'Statistique'
      ],
      text: 'test'
    }
  }
}
</script>
