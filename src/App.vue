<template>
  <v-app id="app">
    <v-app-bar
      app
      fixed
      dense
      short
      clipped-left
      src="@/assets/pics/bits.jpg"
      scroll-t
      arget="#scrolling-techniques-3"
    >
      <template v-slot:extension>
        <v-img :src="require('@/assets/pics/bits.jpg')" />
      </template>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <!-- <v-toolbar-title>botsandbytes.de</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <router-link to="#skills">skills</router-link>
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon color="yellow" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title :key="item.title">
              <router-link :to="{path: item.target}">{{ item.title }}</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs grow background-color="transparent">
          <v-tab to="/">Home</v-tab>
          <v-tab to="blog">blog</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="1000">
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-sheet>
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

