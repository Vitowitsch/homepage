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
import resource from './plugins/resource'
import * as resources from './resources'
import deviceQueries from './plugins/device-queries'
import Pace from 'pace-progress'

Vue.config.productionTip = false

Vue.use(resource, {
  resources,
  endpoint: '/static/api'
})

Vue.use(deviceQueries, {
  phone: 'max-width: 567px',
  tablet: 'min-width: 568px',
  mobile: 'max-width: 1024px',
  laptop: 'min-width: 1025px',
  desktop: 'min-width: 1280px',
  monitor: 'min-width: 1448px'
})

new Vue({
  router,
  render: h => h(App),
  mounted() {
    Pace.start()
    Pace.on('hide', () => {
      document.dispatchEvent(new Event('app.rendered'));
    })
  }
}).$mount('#app')
