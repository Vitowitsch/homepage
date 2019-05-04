import Vue from 'vue'
import './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from "./router/router"
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
