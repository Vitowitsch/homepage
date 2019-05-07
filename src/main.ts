import Vue from 'vue'
import './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from "./router/router"
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "font-awesome/css/font-awesome.css";
import "vuetify/dist/vuetify.min.css"
import colors from "vuetify/es5/util/colors"
import VueYouTubeEmbed from 'vue-youtube-embed'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueYouTubeEmbed)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDAct-mqYtdZk9kopRdPJvZytJ5bWvJwJ0",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
