<template>
 <v-parallax
    height = 800
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
<v-container>
   <v-row>
    <v-card
            max-width = 600
            min-width = 600
            color="#385F73"
            dark
            class = ma-1
          >
            <v-card-title class="headline">Quizz 1 </v-card-title>

            <v-card-subtitle class = ma-4> Le test que tu dois faire dès maintenant !</v-card-subtitle>

            <v-card-actions>
                   <v-icon>mdi-xbox-controller</v-icon>
             <router-link :to="{ path: '/Quizz' }"> <v-btn text >Lancer le Quizz !</v-btn> </router-link>
            </v-card-actions>
          </v-card>
            <v-card
            color="navy"
            dark
            class = ma-1
                max-width = 600
            min-width = 600
          >
            <v-card-title class="headline">Quizz Number Two</v-card-title>

            <v-card-subtitle class = ma-4> Participe à ce quizz et découvre ce que tu découvriras </v-card-subtitle>
<v-col>
            <v-card-actions>
             <v-icon>mdi-xbox-controller</v-icon>
<router-link :to="{ path: '/Quizz' }"> <v-btn text >Lancer le Quizz !</v-btn> </router-link>
            </v-card-actions>
</v-col>
          </v-card>
           <v-card
           class = ma-1
            color="grey"
            dark
                max-width = 600
            min-width = 600
          >
            <v-card-title class="headline">Aide</v-card-title>

            <v-card-subtitle class = ma-4 >Envie de connaitre les règles ? de s'informer ? de rapporter un bug ? Tout est là ! </v-card-subtitle>

            <v-card-actions>
               <router-link :to="{ path: '/Quizz' }"> <v-btn text >Règles et FAQ</v-btn> </router-link>
               <router-link :to="{ path: '/Quizz' }"> <v-btn text >TEAM</v-btn> </router-link>
                <router-link :to="{ path: '/Quizz' }"> <v-btn text >Contact</v-btn> </router-link>
            </v-card-actions>
          </v-card>
</v-row>
</v-container>
</v-parallax>

</template>
