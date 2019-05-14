import Vue from 'vue'
import './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from "./router/router"
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "font-awesome/css/font-awesome.css";
import "vuetify/dist/vuetify.min.css"
import "./stylus/main.styl"
import 'promise-polyfill'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
