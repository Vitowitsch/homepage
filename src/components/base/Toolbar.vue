<template>
  <v-toolbar app tabs dark>
    <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
    <v-toolbar-title>My Place</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <template v-slot:extension> -->
    <!-- <v-tabs v-model="tab" dark grow align-with-title> -->
    <!-- <v-tabs-slider color="black"></v-tabs-slider> -->
    <v-toolbar-items v-for="l in links" :key="l.target">
      <router-link :to="{hash: l.target}">
        <v-btn icon flat :to="{hash: l.target}">
          <v-icon>{{l.icon}}</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar-items>
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
          title: "CV",
          target: "cv",
          icon: "person_outline"
        },
        {
          title: "Skills",
          target: "skills",
          icon: "center_focus_strong"
        },
        {
          title: "Badges",
          target: "badges",
          icon: "monetization_on"
        },
        {
          title: "References",
          target: "references",
          icon: "grade"
        },
        {
          title: "References",
          target: "contact",
          icon: "contact_mail"
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
