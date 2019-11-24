<template>
  <v-app id="app" px-4>
    <v-app-bar style="border: 1px solid black;"
      app bottom=true
      :dense="$vuetify.breakpoint.xsOnly"
      :hide-on-scroll="$vuetify.breakpoint.xsOnly"
      :height="height"
    >
      <template v-slot:extension>
        <v-tabs background-color="transparent">
          <v-tab to="/">
            <v-icon x-large>home</v-icon>
          </v-tab>
          <hr>
          <v-tab to="blog">
            <v-icon x-large>mdi-blogger</v-icon>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
  
</template>

<script>
import AppEvents from "./event.js";
import Vue from "vue";

export default {
  created() {
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "10";
        default:
          return "10";
      }
    }
  },
  data() {
    return {
      tab: null,
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
      items: [
        {
          title: "Home",
          target: "/",
          icon: "dashboard"
        },
        {
          title: "CV",
          target: "/#cv",
          icon: "person_outline"
        },
        {
          title: "Skills",
          target: "/home#skills",
          icon: "center_focus_strong"
        },
        {
          title: "Badges",
          target: "/home#badges",
          icon: "monetization_on"
        },
        {
          title: "References",
          target: "/home#references",
          icon: "grade"
        },
        {
          title: "Blog",
          target: "blog",
          icon: "favorite_border"
        }
      ]
    };
  }
};
</script>