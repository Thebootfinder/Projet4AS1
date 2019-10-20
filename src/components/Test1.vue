
<template>
  <v-card
    class="mx-auto"
    max-width="644"
    min-height="400"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Quizz</div>
        <v-list-item-title class="headline mb-1">Titre Question</v-list-item-title>
         <v-card-text>
      Texte de la question, Texte de la question, Texte de la question, Texte de la question, Texte de la question
    </v-card-text>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-col

        class="d-flex align-center">

              <v-spacer></v-spacer>
              
       <router-link v-bind:to="'/'"> <v-btn depressed large color="primary">Oui</v-btn>
       </router-link>
       <span>-- OU --</span>
        <v-btn depressed large color="red">Non</v-btn>
              <v-spacer></v-spacer>
               <v-icon>mdi-heart</v-icon>
         </v-col>
    </v-card-actions>
  </v-card>
</template>
