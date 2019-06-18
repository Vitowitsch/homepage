<template>
  <div style="border-style: dotted dashed solid double;">
    <v-navigation-drawer 
      id="appDrawer"
      app
      v-model="drawer"
      dark
      disable-resize-watcher
      :mini-variant.sync="mini"
      hide-overlay
      stateless
    >
      <v-toolbar flat transparent>
        <v-list class="pa-0">
          <v-list-tile>
            <v-list-tile-avatar>
              <img src="@/assets/pics/me-thumb.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Veit Wehner</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini; drawer = false">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <template v-for="(item) in menus">
          <v-list-tile
            :to="{hash: item.target}"
            ripple="ripple"
            :key="item.name"
            v-if="item.title!='Projects'"
          >
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title class="menu-item subheading">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <div v-else :key="item.name">
            <v-list-group no-action prepend-icon="format_align_left">
              <template v-slot:activator>
                <v-list-tile ripple="ripple">
                  <v-list-tile-title class="menu-item subheading">Projects</v-list-tile-title>
                </v-list-tile>
              </template>
              <!-- <v-list-group sub-group no-action> -->
              <v-list-tile v-for="(p, i) in projects" :key="i" :to="{hash: p.target}">
                <v-list-tile-title
                  class="menu-item body-2"
                  ripple="ripple"
                  v-text="p.title"
                  :to="{hash: p.target}"
                ></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon v-text="p.icon"></v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <!-- </v-list-group> -->
            </v-list-group>
          </div>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import menu from "@/api/menu";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  name: "app-drawer",
  components: {
    VuePerfectScrollbar
  },
  created() {
    window.getApp.$on("APP_DRAWER_TOGGLED", () => {
      this.drawer = !this.drawer;
    });
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    mini: true,
    drawer: false,
    scrollSettings: {
      maxScrollbarLength: 160
    },
    menus: [
      {
        title: "Home",
        target: "",
        icon: "dashboard"
      },
      {
        title: "Projects",
        target: "recent-projects",
        icon: "format_align_left"
      },
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
        title: "Blog",
        target: "blog",
        icon: "create"
      },

    ],
    projects: [
      { title: "Carbon", target: "carbon", icon: "code" },
      { title: "City Toll", target: "citytoll", icon: "code" },
      { title: "Cognac", target: "cognac", icon: "code" }
    ]
  })
};
</script>

<style scoped>
</style>