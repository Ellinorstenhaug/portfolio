import Vue from 'vue'
import Vuetify from 'vuetify'
import vueSmoothScroll from 'vue-smooth-scroll'


import App from './App.vue'
import VueCarousel from 'vue-carousel';
import './plugins/vuetify'
import './assets/css/style.css'


Vue.use(Vuetify)
Vue.use(VueCarousel)
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


