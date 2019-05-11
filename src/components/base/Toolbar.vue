<template>
  <v-toolbar app>
    <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
    <v-spacer></v-spacer>
    <router-link to="/contact">
      <v-btn icon flat  to="#contact">
        <v-icon>contact_mail</v-icon>
      </v-btn>
    </router-link>
  </v-toolbar>
</template>
<script>
import AnchorRouterLink from "vue-anchor-router-link";
export default {
  name: "app-toolbar",
  components: {
    AnchorRouterLink
  },
  data() {
    return {
      tab: null,
      items: ["about", "skills", "projects", "services", "contact"],
      scrollOptions: {
        container: "body",
        duration: 700,
        easing: "ease",
        offset: 0,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
      }
    };
  },
  methods: {
    handleDrawerToggle() {
      console.log(window.getApp);
      window.getApp.$emit("APP_DRAWER_TOGGLED");
    }
  }
};
</script>
