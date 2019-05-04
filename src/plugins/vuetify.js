import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#82B1FF', //grey
    secondary: '#d4d7d8', //dark grey
    accent: '#82B1FF', //light blue
    error: '#FF5252', //red
    info: '#2196F3', //blue
    success: '#4CAF50', //green
    warning: '#FFC107' //yellow
  },
  iconfont: 'mdi'
})
