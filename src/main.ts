import Vue from "vue";
import vuetify from "./plugins/vuetify";
import "./plugins/vuetify";
import "./plugins/base";
import App from "./App.vue";
import router from "./router/router";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "font-awesome/css/font-awesome.css";
import "vuetify/dist/vuetify.min.css";
import "promise-polyfill";
import Pace from "pace-progress";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
  mounted() {
    Pace.start();
    Pace.on("hide", () => {
      document.dispatchEvent(new Event("app.rendered"));
    });
  }
}).$mount("#app");
