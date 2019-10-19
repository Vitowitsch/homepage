<template>
  <v-app-bar app dark tabs class="accent darken-4">
    <v-app-bar-side-icon @click.stop="handleDrawerToggle"></v-app-bar-side-icon>
    <v-toolbar-title style="font-family: 'Geostar Fill', cursive;">Bots and Bytes</v-toolbar-title>
  </v-app-bar>
</template>
<script>
import AnchorRouterLink from "vue-anchor-router-link";
export default {
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
      },
      links: [
        {
          title: "Blog",
          target: "/blog",
          icon: "list"
        }
      ]
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
