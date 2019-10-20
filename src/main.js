import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuerouter from 'vue-router'
import Accueil from './components/Accueil'
import Login from './components/Login'
import Test1 from './components/Test1'
import Team from './components/Team'
import Accueil2 from './components/Accueil2'
import Rules from './components/Rules'
import Contact from './components/Contact'
import Score from './components/Score'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuerouter)
Vue.use(Vuerouter)

const routes = [
  { path: '/Login', component: Login, meta: { requiresAuth: true } },
  { path: '/', component: Accueil, meta: { requiresAuth: false } },
  { path: '/Test1', component: Test1, meta: { requiresAuth: true } },
  { path: '/Team', component: Team, meta: { requiresAuth: false } },
  { path: '/Accueil2', component: Accueil2, meta: { requiresAuth: false } },
  { path: '/Rules', component: Rules, meta: { requiresAuth: false } },
  { path: '/Score', component: Score, meta: { requiresAuth: false } },
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
