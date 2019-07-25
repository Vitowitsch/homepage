<template>
  <v-toolbar app dark tabs class="accent">
    <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
    <v-toolbar-title style="font-family: 'Geostar Fill', cursive; padding: 1px">Bots and Bytes</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <template v-slot:extension> -->
    <!-- <v-tabs v-model="tab" dark grow align-with-title> -->
    <!-- <v-tabs-slider color="black"></v-tabs-slider> -->
    <!-- <v-tab v-for="l in links" :key="l.target">
          <router-link :to="{hash: l.target}">
            <v-btn icon flat :to="{hash: l.target}">
              <v-icon>{{l.icon}}</v-icon>
            </v-btn>
    </router-link>-->
    <!-- </v-tab> -->
    <!-- </v-tabs> -->
    <!-- </template> -->
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
