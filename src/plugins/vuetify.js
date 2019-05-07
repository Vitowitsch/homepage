import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import "material-design-icons-iconfont/dist/material-design-icons.css"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "font-awesome/css/font-awesome.css"

Vue.use(Vuetify, {
  theme: {
    primary: '#eff1f4', //grey
    secondary: '#d4d7d8', //dark grey
    accent: '#82B1FF', //light blue
    error: '#FF5252', //red
    info: '#2196F3', //blue
    success: '#4CAF50', //green
    warning: '#FFC107' //yellow
  },
  iconfont: 'fa4',
  customProperties: true,
})
