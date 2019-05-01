import Vue from 'vue'
import './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
