<template>
  <v-toolbar app>
    <v-toolbar-title>Veit Wehner's Place</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tabs v-model="tab" grow>
      <v-tab>
        <anchor-router-link
          :to="{name: 'carbon', hash: '#article'}"
          :scrollOptions="scrollOptions"
        >Projects</anchor-router-link>
      </v-tab>
      <v-tab to="carbon">CV</v-tab>
    </v-tabs>
    <router-link to="/contact">
      <v-btn flat>Contact</v-btn>
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
  methods: {
    handleDrawerToggle() {
      window.getApp.$emit("APP_DRAWER_TOGGLED");
    },
    handleFullScreen() {
      Util.toggleFullScreen();
    }
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
  }
};
</script>
