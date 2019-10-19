import Vue from "vue";
import Vuetify from "vuetify/lib";
import 'vuetify/src/styles/main.sass'
// import 'vuetify/dist/vuetify.min.css'
// import "material-design-icons-iconfont/dist/material-design-icons.css"
// import "roboto-fontface/css/roboto/roboto-fontface.css"
// import "font-awesome/css/font-awesome.css" // iconfont : 'fa4'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  theme: {
    primary: "#ffffff",
    secondary: "#e0f7fa",
    accent: "#78909c", //#E27D60
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  iconfont: "mdi",
  customProperties: true
});

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  }
});

// Vue.use(Vuetify, {
//   theme: {
//     primary: '#9099A2',
//     secondary: '#D5D5D5',
//     accent: '#968f8f', //#E27D60
//     error: '#FF5252',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FFC107'
//   },
//   iconfont: 'mdi',
//   customProperties: true,
// })

// Vue.use(Vuetify, {
//   theme: {
//     primary: '#41B3A3', //'#eff1f4', //grey
//     secondary: '#98d5d6', //'#d4d7d8', //dark grey
//     accent: '#C38D9E', //#E27D60
//     error: '#FF5252', //red
//     info: '#2196F3', //blue
//     success: '#4CAF50', //green
//     warning: '#FFC107' //yellow
//   },
//   iconfont: 'mdi',
//   customProperties: true,
// })
