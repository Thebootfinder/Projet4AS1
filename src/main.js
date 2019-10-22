import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuerouter from 'vue-router'
import Login from './components/Login'
import Quizz from './components/Quizz'
import Quizz2 from './components/Quizz2'
import Team from './components/Team'
import Rules from './components/Rules'
import Contact from './components/Contact'
import Score from './components/Score'
import Accueil3 from './components/Accueil3'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuerouter)
Vue.use(Vuerouter)

const routes = [
  { path: '/Login', component: Login, meta: { requiresAuth: true } },
  { path: '/Accueil3', component: Accueil3, meta: { requiresAuth: true } },
  { path: '/Quizz', component: Quizz, meta: { requiresAuth: true } },
  { path: '/Quizz2', component: Quizz2, meta: { requiresAuth: true } },
  { path: '/Team', component: Team, meta: { requiresAuth: false } },
  { path: '/Rules', component: Rules, meta: { requiresAuth: false } },
  { path: '/Score', component: Score, meta: { requiresAuth: false } },
  { path: '/', component: Login, meta: { requiresAuth: false } },
  { path: '/Contact', component: Contact, meta: { requiresAuth: false } }
]

const router = new Vuerouter({
  routes,
  mode: 'history'
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
