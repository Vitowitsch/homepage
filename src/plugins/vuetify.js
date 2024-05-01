import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);
export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
  iconfont: "mdi",
  customProperties: true,
});
