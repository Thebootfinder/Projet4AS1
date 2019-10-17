import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuerouter from 'vue-router'
import Accueil from './components/Accueil'
import Login from './components/Login'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuerouter)
Vue.use(Vuerouter)

const routes = [
  { path: '/Login', component: Login, meta: { requiresAuth: true } },
  { path: '/', component: Accueil, meta: { requiresAuth: false } }
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
