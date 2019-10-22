<template>

<v-container flex >

 <v-card-title class="text-center justify-center py-6">
   <v-row justify="center">
   <v-toolbar
      color="cyan"
      dark
      >
      <v-row justify="center">
      <v-toolbar-title justify-content="center">Bienvenue sur THE QUIZZ</v-toolbar-title>
      </v-row>

    </v-toolbar>
  </v-row>
    </v-card-title>

   <v-row justify="center">
    <v-card
            max-width = 600
            min-width = 600
            color="#385F73"
            dark
            class = ma-2
                   >
            <v-card-title class = "text-center justify-center py-6">Quizz 1 </v-card-title>

            <v-card-subtitle class = ma-4> Le test que tu dois faire dès maintenant ! Fait le où tu le regretteras à jamais</v-card-subtitle>

            <v-card-actions class = "text-center justify-center py-6">
                   <v-icon>mdi-xbox-controller</v-icon>
             <router-link :to="{ path: '/Quizz' }"> <v-btn text >Lancer le Quizz !</v-btn> </router-link>
            </v-card-actions>
          </v-card>
            <v-card
            color="navy"
            dark
            class = ma-2
                max-width = 600
            min-width = 600
          >
            <v-card-title class="text-center justify-center py-6">Quizz Number Two</v-card-title>

            <v-card-subtitle class = ma-4> Participe à ce quizz et découvre ce que tu découvriras ( ps : c'est génial) </v-card-subtitle>

            <v-card-actions class = "text-center justify-center py-6">
             <v-icon>mdi-xbox-controller</v-icon>
<router-link :to="{ path: '/Quizz2' }"> <v-btn text >Lancer le Quizz !</v-btn> </router-link>
            </v-card-actions>

          </v-card>
           <v-card
           class = ma-2
            color="grey"
            dark
                max-width = 600
            min-width = 600
          >
            <v-card-title class = "text-center justify-center py-6">Aide</v-card-title>

            <v-card-subtitle class = ma-4 >Envie de connaitre les règles ? de s'informer ? de rapporter un bug ? Tout est là ! </v-card-subtitle>

            <v-card-actions class = "text-center justify-center py-6">
              <v-icon dark>mdi-wrench</v-icon>
               <router-link :to="{ path: '/Rules' }"> <v-btn text >Règles et FAQ</v-btn> </router-link>
             <v-icon >mdi-domain</v-icon>
               <router-link :to="{ path: '/Team' }"> <v-btn text >TEAM</v-btn> </router-link>
               <v-icon>mdi-email</v-icon>
                <router-link :to="{ path: '/Contact' }"> <v-btn text >Contact</v-btn> </router-link>
            </v-card-actions>
          </v-card>

</v-row>
</v-container>

</template>
