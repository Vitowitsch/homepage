<template>
  <v-app id="app" px-4>
    <v-app-bar style="border: 1px solid black;" app prominent>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-tabs grow background-color="transparent" color="teal" icons-and-text>
        <v-tab to="/">
        home
          <v-icon x-large>home</v-icon>
        </v-tab>
        <v-tab to="blog">
          blog
          <v-icon x-large>mdi-blogger</v-icon>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="drawer" app width="100">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title to="{hash: #cv}">CV</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->

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
  watch: {
    group() {
      this.drawer = false;
    }
  },
  data() {
    return {
      drawer: false,
      group: null,
      tab: null,
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