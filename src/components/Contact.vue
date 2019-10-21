<template>
<v-container flex >
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-toolbar
      color="cyan"
      dark
    >

      <v-toolbar-title>Contact </v-toolbar-title>

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
      {
        title: 'Mail du support ',
        subtitle: "<span class='text--primary'>geillon@et.esiea.fr </span> &mdash; Merci de bien mettre en objet votre problème",
      },
      { divider: true, inset: true },
      {
        title: 'Fail / Bug - Equipe technique',
        subtitle: "<span class='text--primary'>bleuze@et.esiea.fr</span> &mdash; Merci de bien mettre en objet le problème rencontré",
      },
       { divider: true, inset: true },
       {
        title: 'Suggestion',
        subtitle: "<span class='text--primary'>geillon@et.esiea.fr</span> ",
        subtitle2: "<span class='text--primary'>bleuze@et.esiea.fr</span> "
      
      }
    ]
  })
}
</script>
