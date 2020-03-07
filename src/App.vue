<template>
  <v-app px-4>
    <v-app-bar app collapse>
      <v-app-bar-nav-icon color="teal" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app width="160">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item
            v-for="item in items"
            :key="item.hash"
            :to="{ name: item.name, hash: item.hash }"
          >{{item.text}}</v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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
    },
    drawerWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        default:
          return 300;
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
      goto: "/home#cv",
      drawer: null,
      group: null,
      tab: null,
      items: [
        {
          name: "home",
          text: "HOME",
          hash: "#start",
          icon: "dashboard"
        },
        {
          name: "home",
          text: "CV",
          hash: "#cv",
          icon: "person_outline"
        },
        {
          name: "home",
          hash: "#skills",
          text: "SKILLS",
          icon: "center_focus_strong"
        },
        {
          name: "home",
          hash: "#badges",
          text: "BADGES",
          icon: "monetization_on"
        },
        {
          text: "REFERENCES",
          hash: "#references",
          name: "home",
          icon: "grade"
        },
        {
          text: "BLOG",
          hash: "",
          name: "feed",
          icon: "mdi-blogger"
        }
      ]
    };
  }
};
</script>